<%--
    Document   : prescriptionTable
    Created on : Dec 1, 2018, 1:33:18 PM
    Author     : mamun
--%>

<div class="form-body">
    <div class="form-group">
        <label class="col-md-3 control-label">Patient Name <label class="required"></label> </label>
        <div class="col-md-4">
            <html:text styleId="patientName" property="patientName" title="" styleClass="form-control" />
            <html:messages id="patientName" property="patientName">
                <bean:write name="patientName"  filter="false"/>
            </html:messages>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Patient Age <label class="required"></label></label>
        <div class="col-md-4">
            <input id="patientAge" type="text" name="patientAge" class="form-control" placeholder="age 1 to 100" value="<bean:write name='PrescriptionForm' property='patientAge'/>"/>
            <html:messages id="patientAge" property="patientAge">
                <bean:write name="patientAge"  filter="false"/>
            </html:messages>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Patient Gender <label class="required"></label> </label>
        <div class="col-md-4">
            <html:select property="patientGender" styleClass="form-control">
                <html:option  value="male">Male</html:option>
                <html:option  value="female">Female</html:option>
                <html:option  value="other">Other</html:option>
            </html:select>
            <html:messages id="patientGender" property="patientGender">
                <bean:write name="patientGender"  filter="false"/>
            </html:messages>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Diagnosis</label>
        <div class="col-md-4">
            <html:textarea property="diagnosis" title="" styleClass="form-control" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Medicines</label>
        <div class="col-md-4">
            <html:textarea property="medicines" title="" styleClass="form-control" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Prescription Date <label class="required" ></label> </label>
        <div class="col-md-4">
            <input id="prescriptionDate" type="text" name="prescriptionDate" class="form-control input-small input-inline date-picker" data-date-format="mm-dd-yyyy" placeholder="mm-dd-yyyy" value="<bean:write name='PrescriptionForm' property='prescriptionDate'/>"/>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Next Visit Date </label>
        <div class="col-md-4">
            <input type="text" name="nextVisitDate" class="form-control input-small input-inline date-picker" data-date-format="mm-dd-yyyy" placeholder="mm-dd-yyyy" value="<bean:write name='PrescriptionForm' property='nextVisitDate'/>"/>
        </div>
    </div>
</div>