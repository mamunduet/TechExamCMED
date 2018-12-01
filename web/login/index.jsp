<%--
    Document   : login
    Created on : Nov 28, 2018, 2:22:48 PM
    Author     : mamun
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
<%@include file="../shared/head.jsp"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Admin Panel | Login</title>
        <%@include file="../shared/css-list.jsp"%>
    </head>
    <body class=" login">
        <div class="logo">
            <a href="<%=resourceURL%>/login/index.jsp">
                <img src="<%=resourceURL%>/assets/pages/img/logo-7.png" alt="" />
            </a>
        </div>
        <div class="content">
            <html:form styleClass="login-form" action="login" method="POST">
                <h3 class="form-title font-green"> <span style="font-size: 40px" class="fa fa-lock"></span></h3>
                    <logic:notEmpty name="LoginForm" property="message">
                    <div class="alert alert-danger">
                        <button class="close" data-close="alert"></button>
                        <span> <bean:write name="LoginForm" property="message" filter="false"/> </span>
                    </div>
                </logic:notEmpty>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">Username</label>
                    <input class="form-control form-control-solid placeholder-no-fix" type="text" autocomplete="off" placeholder="Username" name="userName" />
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">Password</label>
                    <input class="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" name="password" />
                    <html:messages id="msg" property="message">
                        <bean:write name="msg"  filter="false"/>
                    </html:messages>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn green uppercase">Login</button>
                </div>
            </html:form>
        </div>
        <div class="copyright"> Copyright &copy; 2015 All right reserved by <a target="_blank" href="#"> Company Ltd. </a></div>
        <%@include file="../shared/script-list.jsp"%>
    </body>
</html>
