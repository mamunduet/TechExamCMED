<%--
    Document   : prescriptionList
    Created on : Dec 1, 2018, 12:39:41 PM
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
        <title>WebApp | Prescription List</title>
        <%@include file="/shared/css-list.jsp"%>
    </head>
    <body class="page-container-bg-solid">
        <div class="page-wrapper">
            <div class="page-wrapper-row">
                <div class="page-wrapper-top">
                    <div class="page-header">
                        <%@include  file="/shared/menu.jsp" %>
                        <%                            int TOTAL_RECORDS = 0, TOTAL_PAGES = 0, CURRENT_PAGE_NO = 0, STARTING_RECORD_NO = 0, ENDING_RECORD_NO = 0;
                            String disabledPrev = "", disabledNext = "";
                            if (request.getAttribute(Constants.TOTAL_RECORDS) != null) {
                                TOTAL_RECORDS = Integer.valueOf(request.getAttribute(Constants.TOTAL_RECORDS).toString());
                            }
                            if (request.getAttribute(Constants.TOTAL_PAGES) != null) {
                                TOTAL_PAGES = Integer.valueOf(request.getAttribute(Constants.TOTAL_PAGES).toString());
                            }
                            if (request.getAttribute(Constants.CURRENT_PAGE_NO) != null) {
                                CURRENT_PAGE_NO = Integer.valueOf(request.getAttribute(Constants.CURRENT_PAGE_NO).toString());
                            }
                            if (request.getAttribute(Constants.STARTING_RECORD_NO) != null) {
                                STARTING_RECORD_NO = Integer.valueOf(request.getAttribute(Constants.STARTING_RECORD_NO).toString());
                            }
                            if (request.getAttribute(Constants.ENDING_RECORD_NO) != null) {
                                ENDING_RECORD_NO = Integer.valueOf(request.getAttribute(Constants.ENDING_RECORD_NO).toString());
                            }
                            if (STARTING_RECORD_NO <= 0) {
                                disabledPrev = "disabled";
                                STARTING_RECORD_NO = 0;
                            }
                            if (ENDING_RECORD_NO >= TOTAL_RECORDS) {
                                disabledNext = "disabled";
                                ENDING_RECORD_NO = TOTAL_RECORDS;
                            }
                        %>
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
                                            <span id="features" data-class-active=".Prescription">Prescription List</span>
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
                                                                    <i class="fa fa-list-ul"></i> Prescription List Info </div>
                                                                <div class="tools">
                                                                    <a href="javascript:;" class="collapse"> </a>
                                                                    <a data-original-title="Reload" href="prescriptionListInfo.do?ForceReload=1" style="width: 13px; background-image: url(assets/global/img/portlet-reload-icon-white.png);" class="tooltips"> </a>
                                                                    <a data-original-title="AddNew" style="color: white; width: 16px; background-image: url(assets/global/img/add-1.png);" href="admin/prescription/prescriptionUI.jsp" class="tooltips"> </a>
                                                                </div>
                                                            </div>
                                                            <div class="portlet-body form">
                                                                <html:form action="prescriptionListInfo" styleClass="form-horizontal" method="POST"  acceptCharset="UTF-8">
                                                                    <div class="form-body">
                                                                        <div class="form-group">
                                                                            <div class="col-md-6 col-sm-6">
                                                                                <label>
                                                                                    <html:select styleClass="bs-select form-control input-sm input-xsmall input-inline" property="recordPerPage" onchange="javascript: submitform(1, 1, this);">
                                                                                        <html:option value="10">10</html:option>
                                                                                        <html:option value="25">25</html:option>
                                                                                        <html:option value="50">50</html:option>
                                                                                        <html:option value="100">100</html:option>
                                                                                        <html:option value="200">200</html:option>
                                                                                    </html:select>
                                                                                    records</label>
                                                                            </div>
                                                                            <div class="col-md-6 col-sm-6">
                                                                                <div class="input-group" style="float: right;">
                                                                                    <input name="searchText" type="text" class="form-control input-sm input-small" placeholder="Search" value="<bean:write name='PrescriptionForm' property='searchText'/>">
                                                                                    <span>
                                                                                        <button class="btn green-soft uppercase bold input-sm" type="submit"><i class="icon-magnifier"></i></button>
                                                                                        <input name="action" type="hidden" value="<%=Constants.SEARCH%>" />
                                                                                        <html:hidden property="column" />
                                                                                        <html:hidden property="sort" />
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="table-scrollable">
                                                                            <table class="table table-striped table-bordered table-hover">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th id="col_1" class="text-center sortable">Patient Name</th> <!-- sortable both/asc/desc/asc-disabled/desc-disabled -->
                                                                                        <th id="col_2" class="text-center sortable">Patient Age</th>
                                                                                        <th id="col_3" class="text-center sortable">Patient Gender</th>
                                                                                        <th  class="text-center ">Diagnosis</th> <!-- sortable both/asc/desc/asc-disabled/desc-disabled -->
                                                                                        <th  class="text-center ">Medicines</th>
                                                                                        <th  class="text-center ">Prescription Date</th>
                                                                                        <th class="text-center ">Next Visit Date</th> <!-- sortable both/asc/desc/asc-disabled/desc-disabled -->
                                                                                        <th class="text-center">Action</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <%
                                                                                        List<PrescriptionDTO> data1 = (List<PrescriptionDTO>) session.getAttribute(Constants.DATA_ROWS);
                                                                                        session.removeAttribute(Constants.DATA_ROWS);
                                                                                        if (data1 != null && data1.size() > 0) {
                                                                                            for (int i = STARTING_RECORD_NO; i < ENDING_RECORD_NO; i++) {
                                                                                                PrescriptionDTO dto = (PrescriptionDTO) data1.get(i);
                                                                                    %>
                                                                                    <tr>
                                                                                        <td class="text-center"><%=dto.getPatientName()%></td>
                                                                                        <td class="text-center"><%=dto.getPatientAge()%></td>
                                                                                        <td class="text-center"><%=dto.getPatientGender()%></td>
                                                                                        <td class="text-center"><%=dto.getDiagnosis()%></td>
                                                                                        <td class="text-center"><%=dto.getMedicines()%></td>
                                                                                        <td class="text-center"><%=dto.getPrescriptionDateStr()%></td>
                                                                                        <td class="text-center"><%=dto.getNextVisitDateStr()%></td>
                                                                                        <td class="text-center">
                                                                                            <a href="editPrescriptionInfo.do?id=<%=dto.getId() + "&action=" + Constants.EDIT%>" class="" title="Change"><span class="fa fa-edit"></span></a>
                                                                                            &nbsp;<a href="deletePrescriptionInfo.do?id=<%=dto.getId() + "&action=" + Constants.DELETE%>" class="" title="Delete" onclick="javascript:return confirm('Are you sure you want to delete this content')"><span class="fa fa-remove"></span></a>
                                                                                        </td>
                                                                                        <% } %>
                                                                                    </tr>
                                                                                    <%
                                                                                        }
                                                                                    %>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-5 col-sm-12">
                                                                                <div>
                                                                                    Showing <%=(STARTING_RECORD_NO + 1)%> to <%=ENDING_RECORD_NO%> of <%=TOTAL_RECORDS%> entries
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-7 col-sm-12">
                                                                                <div style="float: right;">
                                                                                    <div>
                                                                                        Page <a href="javascript: submitform(2, <%=(CURRENT_PAGE_NO - 1)%>, this);" class="btn btn-sm default prev <%=disabledPrev%>"><i class="fa fa-angle-left"></i></a>
                                                                                        <input name="pageNo" class="form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;" type="text" value="<%=CURRENT_PAGE_NO%>" onchange="javascript: submitform(2, 0, this);">
                                                                                        <a href="javascript: submitform(2, <%=(CURRENT_PAGE_NO + 1)%>, this);" class="btn btn-sm default next <%=disabledNext%>"><i class="fa fa-angle-right"></i></a> of <span><%=TOTAL_PAGES%></span>
                                                                                    </div>
                                                                                </div>
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
