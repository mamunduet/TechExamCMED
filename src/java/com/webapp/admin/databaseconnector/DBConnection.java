/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.databaseconnector;

import com.webapp.admin.utils.AppLogger;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import org.apache.log4j.Logger;

/**
 *
 * @author mamun
 */
public class DBConnection {

    private static final Logger logger = AppLogger.getActivityLogger();
    private Connection connection = null;

    public Connection getConnection() {
        return this.connection;
    }

    public void createConnection(String host, String database, String user, String password, String useUnicode, String characterEncoding)
            throws Exception {
        String url = "";
        try {
            url = "jdbc:mysql://" + host + ":3306/" + database + (useUnicode != null ? "?useUnicode=" + useUnicode : "") + (characterEncoding != null ? "&characterEncoding=" + characterEncoding : "");
            this.connection = DriverManager.getConnection(url, user, password);
            System.out.println("conncetions success");
        } catch (SQLException e) {
            logger.fatal("Connection couldn't be established to " + url);
            throw e;
        }
    }

    @Override
    protected void finalize()
            throws Throwable {
        try {
            if (this.connection != null) {
                this.connection.close();
            }
        } finally {
            super.finalize();
        }
    }
}
