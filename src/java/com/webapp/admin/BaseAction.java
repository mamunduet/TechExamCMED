/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin;

import com.webapp.admin.utils.Constants;
import javax.servlet.http.HttpServletRequest;
import org.apache.struts.action.Action;
import org.apache.struts.action.ActionErrors;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionMapping;

public class BaseAction extends Action {

    protected final String SUCCESS = "success";
    protected final String FAILURE = "failure";
    protected final String UNAUTHORIZED = "unauthorized";

    protected String checkAuthentication(ActionMapping mapping, ActionForm form, HttpServletRequest request) {
        ActionErrors errors = form.validate(mapping, request);
        if (errors != null && !errors.isEmpty()) {
            if (errors.get("auth").hasNext()) {
                return UNAUTHORIZED;
            } else {
                saveErrors(request.getSession(), errors);
                return FAILURE;
            }
        }
        return SUCCESS;
    }

    protected void managePages(HttpServletRequest request, BaseForm form, long dataListSize) {
        long pageNo = 1;
        if (form.getPageNo() > 0) {
            pageNo = form.getPageNo();
        }

        long totalPages = 1;
        if (dataListSize != -1) {
            if (dataListSize > 0) {
                totalPages = dataListSize / form.getRecordPerPage();
                if (dataListSize % form.getRecordPerPage() != 0) {
                    totalPages++;
                }
            }
            if (totalPages < pageNo) {
                pageNo = totalPages;
            }
        } else {
            switch (form.getAction()) {
                case Constants.RECORD_PER_PAGE_CHANGE:
                    totalPages = 1;
                    pageNo = 1;
                    break;
                case Constants.SEARCH:
                    pageNo = 1;
                    break;
                default:
                    if (request.getSession().getAttribute(Constants.TOTAL_PAGES) != null && Integer.parseInt(request.getSession().getAttribute(Constants.TOTAL_PAGES).toString()) > 0) {
                        totalPages = Integer.parseInt(request.getSession().getAttribute(Constants.TOTAL_PAGES).toString());
                    }
                    if (totalPages < pageNo) {
                        totalPages = pageNo;
                    }
                    break;
            }
        }
        form.setPageNo((int) pageNo);
        request.setAttribute(Constants.TOTAL_RECORDS, dataListSize);
        request.setAttribute(Constants.TOTAL_PAGES, totalPages);
        request.setAttribute(Constants.CURRENT_PAGE_NO, pageNo);
        request.setAttribute(Constants.STARTING_RECORD_NO, (pageNo - 1) * form.getRecordPerPage());
        request.setAttribute(Constants.ENDING_RECORD_NO, pageNo * form.getRecordPerPage());
        request.getSession(true).setAttribute(Constants.RECORD_PER_PAGE, form.getRecordPerPage());
    }

    protected String getSuccessMessage(String message) {
        return "<span style='color: green'>" + message + "</span>";
    }

    protected String getErrorMessage(String message) {
        return "<span style='color: red'>" + message + "</span>";
    }

    protected BaseDTO getSearchDTO(BaseForm baseForm, BaseDTO dto) {
        if (baseForm.getColumn() <= 0) {
            baseForm.setColumn(Constants.COLUMN_ONE);
            baseForm.setSort(Constants.DESC_SORT);
        }
        if (baseForm.getSearchText() != null && baseForm.getSearchText().length() > 0) {
            dto.setSearchText(baseForm.getSearchText().trim().toLowerCase());
        }
        dto.setColumn(baseForm.getColumn());
        dto.setSortType(baseForm.getSort());
        return dto;
    }
}
