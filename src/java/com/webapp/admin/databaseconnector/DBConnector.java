/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.databaseconnector;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

/**
 *
 * @author mamun
 */
public class DBConnector {

    private static String configFile = "DBConfig.txt";
    private static String host = null;
    private static String database = null;
    private static String user = null;
    private static String password = null;
    private static String useUnicode = null;
    private static String characterEncoding = null;
    private static Logger logger = Logger.getLogger(DBConnector.class.getName());

    private DBConnector() {
        if (LoadDriver()) {
            getDBConfig();
        }
    }

    private static class DBConnectorHolder {

        private static final DBConnector INSTANCE = new DBConnector();
    }

    public static DBConnector getInstance() {
        return DBConnectorHolder.INSTANCE;
    }

    private boolean LoadDriver() {
        boolean success = true;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            logger.debug("MySQL Driver is Found");
        } catch (ClassNotFoundException e) {
            success = false;
            logger.fatal("MySQL JDBC Driver is not found ... " + e);
        }
        return success;
    }

    private void getDBConfig() {
        try {
            InputStream input = null;
            File file = new File(configFile);
            if (file.exists()) {
                input = new FileInputStream(file);
            } else {
                input = Thread.currentThread().getContextClassLoader().getResourceAsStream(configFile);
            }
            Properties dbProp = new Properties();
            dbProp.load(input);
            input.close();
            if (dbProp.containsKey("host")) {
                host = dbProp.getProperty("host");
            } else {
                logger.debug("No host is found in DBConfig.txt");
                return;
            }
            if (dbProp.containsKey("database")) {
                database = dbProp.getProperty("database");
            } else {
                logger.debug("No database is found in DBConfig.txt");
                return;
            }
            if (dbProp.containsKey("user")) {
                user = dbProp.getProperty("user");
            } else {
                logger.debug("No user is found in DBConfig.txt");
                return;
            }
            if (dbProp.containsKey("password")) {
                password = dbProp.getProperty("password");
            } else {
                logger.debug("No password is found in DBConfig.txt");
                return;
            }
            if (dbProp.containsKey("useUnicode")) {
                useUnicode = dbProp.getProperty("useUnicode");
            }
            if (dbProp.containsKey("characterEncoding")) {
                characterEncoding = dbProp.getProperty("characterEncoding");
            }
        } catch (IOException e) {
            logger.fatal("Exception in reading DB config file:" + e);
        }
    }

    public synchronized DBConnection makeConnection() throws Exception {

        DBConnection dbConnection = null;
        try {
            dbConnection = new DBConnection();
            dbConnection.createConnection(host, database, user, password, useUnicode, characterEncoding);

        } catch (Exception e) {
            logger.fatal(e.getMessage(), e);
            throw e;
        }
        return dbConnection;
    }

    public static void main(String[] arg)
            throws Exception {
        PropertyConfigurator.configure("log4j.properties");
    }
}
