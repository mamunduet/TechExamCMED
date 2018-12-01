<%--
    Document   : prescriptionUI
    Created on : Dec 1, 2018, 12:40:03 PM
    Author     : mamun
--%>
<%@include file="../../login/loginTimeExpire.jsp"%>
<%@page import="com.webapp.admin.utils.Constants"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
<%@include  file="/shared/head.jsp" %>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Prescription | Add Prescription</title>
        <%@include file="/shared/css-list.jsp"%>
    </head>
    <body class="page-container-bg-solid">
        <div class="page-wrapper">
            <div class="page-wrapper-row">
                <div class="page-wrapper-top">
                    <div class="page-header">
                        <%@include  file="/shared/menu.jsp"%>
                    </div>
                </div>
            </div>
            <div class="page-wrapper-row full-height">
                <div class="page-wrapper-middle">
                    <div class="page-container">
                        <div class="page-content-wrapper">
                            <div class="page-content">
                                <div class="container">
                                    <ul class="page-breadcrumb breadcrumb">
                                        <li>
                                            <a href="appConstantsListInfo.do">Prescription</a>
                                            <i style="font-size: 14px; margin: 0 auto;" class="fa fa-angle-right"></i>
                                        </li>
                                        <li>
                                            <span id="features" data-class-active=".common .appConstants .addAppConstants">Add Prescription</span>
                                        </li>
                                    </ul>
                                    <div class="page-content-inner">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="tabbable-line boxless tabbable-reversed">
                                                    <div class="tab-content" style="padding-top: 15px;">
                                                        <div class="portlet box green">
                                                            <div class="portlet-title">
                                                                <div class="caption">
                                                                    <i class="fa fa-plus"></i> Add Prescription Info </div>
                                                                <div class="tools">
                                                                    <a href="javascript:;" class="collapse"> </a>
                                                                </div>
                                                            </div>
                                                            <div class="portlet-body form">
                                                                <html:form action="addPrescriptionInfo" styleClass="form-horizontal" method="POST"  acceptCharset="UTF-8">
                                                                    <%@include file="prescriptionTable.jsp" %>
                                                                    <div class="form-actions">
                                                                        <div class="row">
                                                                            <div class="col-md-offset-3 col-md-4">
                                                                                <button id="validateInput" type="submit" class="btn green" name="saveButton">Submit</button>
                                                                                <a href="prescriptionListInfo.do" class="btn default">Cancel</a>
                                                                                <input type="hidden" name="action" value="<%=Constants.ADD%>" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </html:form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <%@include file="/shared/footer.jsp"%>
        </div>
        <%@include file="/shared/script-list.jsp"%>
    </body>
</html>
