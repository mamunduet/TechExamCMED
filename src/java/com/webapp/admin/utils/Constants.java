/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.Properties;

/**
 *
 * @author mamun
 */

public class Constants {

    BufferedReader br = null;

    public static String SERVER;
    public static int VERSION;

    // decision for DevelopmentProfile/ProductionProfile
    static {
        try {
            Properties properties = new Properties();
            properties.load(Thread.currentThread().getContextClassLoader().getResourceAsStream("Profile.txt"));
            if (properties.containsKey("SERVER")) {
                SERVER = properties.getProperty("SERVER").trim();
                switch (properties.getProperty("SERVER").trim()) {
                    case "dev":
                        break;
                    case "pro":
                        break;
                    default:
                        break;
                }
            }
            if (properties.containsKey("VERSION")) {
                VERSION = Integer.parseInt(properties.getProperty("VERSION").trim());
            }
        } catch (IOException | NumberFormatException e) {

        }
    }

    // DevelopmentProfile/ProductionProfile constants
    public static String USERID;
    public static String PASSWORD;

    /// for admin
    public final static String RECORD_PER_PAGE = "RECORD_PER_PAGE";
    public final static String LOGIN_DTO = "loginDTO";
    public final static String LOGIN_ID = "loginId";
    public final static long LOGIN_EXPIRE_TIME = 28800000;//8 * 60 * 60 * 1000;
    public final static String MESSAGE = "message";
    public final static String STARTING_RECORD_NO = "startingRecordNo";
    public final static String ENDING_RECORD_NO = "endingRecordNo";
    public final static String TOTAL_RECORDS = "totalRecords";
    public final static String TOTAL_PAGES = "totalPages";
    public final static String CURRENT_PAGE_NO = "currentPageNo";
    //Action
    public final static int RECORD_PER_PAGE_CHANGE = 1;
    public final static int PAGE_NAVIGATION = 2;
    public final static int ADD = 3;
    public final static int EDIT = 4;
    public final static int UPDATE = 5;
    public final static int DELETE = 6;
    public final static int SEARCH = 7;
    public final static int RESET = 13;
    /* Sorting style */

    public final static int ASC_SORT = 0;
    public final static int DESC_SORT = 1;
    public final static String DATA_ROWS = "DATA_ROWS";
    public final static String COLLECTION_LIST = "collectionList";

    /*------Sorting Column-----*/
    public final static int COLUMN_ONE = 1;
    public final static int COLUMN_TWO = 2;
    public final static int COLUMN_THREE = 3;
    public final static int COLUMN_FOUR = 4;
    public final static int COLUMN_FIVE = 5;
    public final static int COLUMN_SIX = 6;

    public static final int SUPER_ADMIN = 1;
    public static final int ADMIN = 2;
    public static final int GUEST = 3;

}
