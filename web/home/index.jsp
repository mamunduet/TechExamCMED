<%--
    Document   : index
    Created on : Nov 28, 2018, 2:21:49 PM
    Author     : mamun
--%>

<%@include file="../login/loginTimeExpire.jsp"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
<%@include file="../shared/head.jsp"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Prescription | Home</title>
        <%@include file="/shared/css-list.jsp"%>
    </head>
    <body class="page-container-bg-solid">
        <div class="page-wrapper">
            <div class="page-wrapper-row">
                <div class="page-wrapper-top">
                    <div class="page-header">
                        <%@include  file="/shared/menu.jsp" %>
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
                                            <a href="welcome.do">Prescription</a>
                                            <span style="font-size: 14px; margin: 0 auto;" class="fa fa-angle-right"></span>
                                        </li>
                                        <li>
                                            <span id="features" data-class-active=".featureHome">Home</span>
                                        </li>
                                    </ul>
                                    <div class="page-content-inner">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="tabbable-line boxless tabbable-reversed">
                                                    <div class="tab-content" style="padding-top: 15px;padding-bottom: 0px;">
                                                        <div class="portlet box green">
                                                            <div class="portlet-title">
                                                                <div class="caption">
                                                                    <i style="font-size: 20px;" class="fa fa-check-circle"></i> Only Permission for Admin </div>
                                                                <div class="tools">
                                                                    <a href="javascript:;" class="collapse"> </a>
                                                                </div>
                                                            </div>
                                                            <div class="portlet-body form">
                                                                <div class="note note-success">
                                                                    <h4 class="block">Welcome to Admin Panel</h4>
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
            </div>
            <%@include file="/shared/footer.jsp"%>
        </div>
        <%@include file="/shared/script-list.jsp"%>
    </body>
</html>
