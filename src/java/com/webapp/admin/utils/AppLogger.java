/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.utils;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

/**
 *
 * @author mamun
 */
public class AppLogger {

    private static final Logger ACTIVITY_LOGGER;

    static {
        ACTIVITY_LOGGER = LogManager.getLogger("com.webapp.activity");
    }

    public static Logger getActivityLogger() {
        return ACTIVITY_LOGGER;
    }

}
