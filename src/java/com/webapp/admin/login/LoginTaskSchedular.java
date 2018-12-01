package com.webapp.admin.login;

import com.webapp.admin.dao.LoginDAO;
import com.webapp.admin.dto.LoginDTO;

public class LoginTaskSchedular {

    private LoginTaskSchedular() {

    }

    private static class LoginTaskSchedularHolder {

        private static final LoginTaskSchedular INSTANCE = new LoginTaskSchedular();
    }

    public static LoginTaskSchedular getInstance() {
        return LoginTaskSchedularHolder.INSTANCE;
    }

    public LoginDTO getUserInfo(String userName) {
        LoginDAO loginDAO = LoginDAO.getInstance();
        return loginDAO.getUserInfo(userName);
    }
}
