/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.utils;

/**
 *
 * @author mamun
 */
public class MyAppError {

    private int id;
    private String errorMessage;
    public static final int NOERROR = 0;
    public static final int DBERROR = 1;
    public static final int VALIDATIONERROR = 2;
    public static final int OTHERERROR = 3;
    private int ERROR_TYPE = 0;

    public MyAppError() {
        ERROR_TYPE = NOERROR;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public int getERROR_TYPE() {
        return ERROR_TYPE;
    }

    public void setERROR_TYPE(int ERROR_TYPE) {
        this.ERROR_TYPE = ERROR_TYPE;
    }
}
