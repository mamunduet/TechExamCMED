package com.webapp.admin.dao;

import com.webapp.admin.databaseconnector.DBConnection;
import com.webapp.admin.databaseconnector.DBConnector;
import com.webapp.admin.dto.LoginDTO;
import com.webapp.admin.utils.AppLogger;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.apache.log4j.Logger;

public class LoginDAO {

    static Logger logger = AppLogger.getActivityLogger();

    private LoginDAO() {

    }

    private static class LoginDAOHolder {

        private static final LoginDAO INSTANCE = new LoginDAO();
    }

    public static LoginDAO getInstance() {
        return LoginDAOHolder.INSTANCE;
    }

    public LoginDTO getUserInfo(String userName) {

        LoginDTO loginDTO = new LoginDTO();
        PreparedStatement ps = null;
        ResultSet rs = null;
        DBConnection db = null;
        int i = 1;
        String query = "SELECT id, user_name, user_password, user_full_name, permission_level FROM admin_users WHERE user_name  = ?";
        try {
            db = DBConnector.getInstance().makeConnection();
            ps = db.getConnection().prepareStatement(query);
            ps.setString(i++, userName);
            rs = ps.executeQuery();
            if (rs.next()) {
                loginDTO.setUserId(rs.getInt("id"));
                loginDTO.setUserName(rs.getString("user_name"));
                loginDTO.setPassword(rs.getString("user_password"));
                loginDTO.setFullName(rs.getString("user_full_name"));
                loginDTO.setPermissionLevel(rs.getInt("permission_level"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("getUserInfo error" + e);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("getUserInfo error" + e);
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException e) {
            }
        }
        return loginDTO;
    }

    public static void main(String[] args) {
        System.out.println(LoginDAO.getInstance().getUserInfo("mamun").getPassword());
    }
}
