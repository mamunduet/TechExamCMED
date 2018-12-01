<%--
    Document   : head
    Created on : Mar 11, 2017, 10:51:05 AM
    Author     : MAMUN
--%>
<%
    String getProtocal = request.getScheme();
    String getDomain = request.getServerName();
    String getPort = String.valueOf(request.getServerPort());
    String hostName = getProtocal + "://" + getDomain + ":" + getPort + "/";
    String resourceURL = hostName + "admin.webapptemplate.com";
%>
