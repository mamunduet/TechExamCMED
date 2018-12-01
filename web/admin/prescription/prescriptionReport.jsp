<%--
    Document   : prescriptionReport
    Created on : Dec 1, 2018, 6:44:02 PM
    Author     : mamun
--%>

<%@include file="../../login/loginTimeExpire.jsp"%>
<%@page import="com.webapp.admin.dto.PrescriptionDTO"%>
<%@page import="java.util.List"%>
<%@page import="com.webapp.admin.utils.Constants"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
<%@include  file="/shared/head.jsp" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>WebApp | Prescription Report</title>
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
                                            <a href="Welcome.do">Prescription</a>
                                            <span style="font-size: 14px; margin: 0 auto;" class="fa fa-angle-right"></span>
                                        </li>
                                        <li>
                                            <span id="features" data-class-active=".Prescription">Prescription Report</span>
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
                                                                    <i class="fa fa-list-ul"></i> Prescription Report Info </div>
                                                                <div class="tools">
                                                                    <a href="javascript:;" class="collapse"> </a>
                                                                </div>
                                                            </div>
                                                            <div class="portlet-body form">
                                                                <html:form action="prescriptionCountReport" styleClass="form-horizontal" method="POST"  acceptCharset="UTF-8">
                                                                    <div class="form-body">
                                                                        <div class="table-scrollable">
                                                                            <table class="table table-striped table-bordered table-hover">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th  class="text-center ">Date</th> <!-- sortable both/asc/desc/asc-disabled/desc-disabled -->
                                                                                        <th  class="text-center ">Count</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <%                                                                                        List<PrescriptionDTO> data1 = (List<PrescriptionDTO>) session.getAttribute(Constants.DATA_ROWS);
                                                                                        session.removeAttribute(Constants.DATA_ROWS);
                                                                                        if (data1 != null && data1.size() > 0) {
                                                                                            int dataSize = data1.size();
                                                                                            for (int i = 0; i < dataSize; i++) {
                                                                                                PrescriptionDTO dto = (PrescriptionDTO) data1.get(i);
                                                                                    %>
                                                                                    <tr>
                                                                                        <td class="text-center"><%=dto.getDateStr()%></td>
                                                                                        <td class="text-center"><%=dto.getCount()%></td>
                                                                                        <% } %>
                                                                                    </tr>
                                                                                    <%
                                                                                        }
                                                                                    %>
                                                                                </tbody>
                                                                            </table>
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
