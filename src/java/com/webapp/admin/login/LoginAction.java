package com.webapp.admin.login;

import com.webapp.admin.BaseAction;
import com.webapp.admin.dto.LoginDTO;
import com.webapp.admin.utils.Constants;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

public class LoginAction extends BaseAction {

    @Override
    public ActionForward execute(ActionMapping mapping, ActionForm from, HttpServletRequest request, HttpServletResponse response) throws Exception {

        String target = FAILURE;
        LoginForm loginBean = null;
        try {
            loginBean = (LoginForm) from;
            LoginDTO loginDTO = LoginTaskSchedular.getInstance().getUserInfo(loginBean.getUserName());
            if (loginDTO != null && loginDTO.getUserId() > 0) {
                if (loginDTO.getUserName() != null && loginDTO.getUserName().equals(loginBean.getUserName()) && loginDTO.getPassword() != null && loginDTO.getPassword().equals(loginBean.getPassword())) {
                    loginDTO.setLoginTime(System.currentTimeMillis());
                    request.getSession(true).setAttribute(Constants.LOGIN_DTO, loginDTO);
                    request.getSession(true).setAttribute(Constants.LOGIN_ID, loginDTO.getUserId());
                    target = SUCCESS;
                } else {
                    throw new Exception("invalid credentials");
                }
            } else {
                throw new Exception("invalid credentials");
            }
        } catch (Exception e) {
            String errorText = e.toString();
            if (errorText.contains(".Exception:")) {
                errorText = errorText.substring(errorText.indexOf(".Exception:") + ".Exception:".length() + 1);
            }
            if (loginBean != null) {
                System.out.println("error: " + errorText);
                loginBean.setMessage(errorText);
            }
            request.getSession(true).setAttribute(Constants.LOGIN_DTO, null);
            request.getSession(true).setAttribute(Constants.LOGIN_ID, null);
        }
        return new ActionForward(mapping.findForward(target).getPath(), true);
    }
}
