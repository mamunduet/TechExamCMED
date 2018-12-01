<%--
    Document   : permissionDenied
    Created on : Nov 28, 2018, 2:38:28 PM
    Author     : mamun
--%>

<%@include file="/login/loginTimeExpiry.jsp"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Admin Panel | Unauthorized </title>
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
                                    <div class="page-content-inner">
                                        <div class="row">
                                            <div class="col-md-12 page-500">
                                                <div class=" number font-red"> 401 </div>
                                                <div class=" details">
                                                    <h3>Unauthorized Access</h3>
                                                    <p> Access Denied. Contact Administrator For Permission
                                                        <br/> </p>
                                                    <p>
                                                        <a href="welcome.do" class="btn red btn-outline"> Return home </a>
                                                        <br> </p>
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