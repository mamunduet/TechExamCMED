<%--
    Document   : loginTimeExpire
    Created on : Nov 28, 2018, 2:34:44 PM
    Author     : mamun
--%>

<%

    com.webapp.admin.dto.LoginDTO loginDTO = (com.webapp.admin.dto.LoginDTO) request.getSession().getAttribute(com.webapp.admin.utils.Constants.LOGIN_DTO);

    if (request.getParameter("logout") != null) {
        loginDTO = null;
        request.getSession(true).removeAttribute(com.webapp.admin.utils.Constants.LOGIN_DTO);
        response.sendRedirect(request.getContextPath() + "/index.do?reset=1");
        return;
    }
    if (loginDTO == null) {
        response.sendRedirect(request.getContextPath() + "/index.do?reset=1");
        return;
    } else {
        if (loginDTO.getLoginTime() + com.webapp.admin.utils.Constants.LOGIN_EXPIRE_TIME < System.currentTimeMillis()) {
            loginDTO = null;
            request.getSession(true).removeAttribute(com.webapp.admin.utils.Constants.LOGIN_DTO);
            response.sendRedirect(request.getContextPath() + "/index.do?reset=1");
            return;
        } else {
            loginDTO.setLoginTime(System.currentTimeMillis());
            request.getSession().setAttribute(com.webapp.admin.utils.Constants.LOGIN_DTO, loginDTO);
        }
    }
%>