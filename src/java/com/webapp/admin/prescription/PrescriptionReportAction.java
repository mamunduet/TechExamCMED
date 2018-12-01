/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.prescription;

import com.webapp.admin.BaseAction;
import com.webapp.admin.dto.PrescriptionDTO;
import com.webapp.admin.repository.PrescriptionRepository;
import com.webapp.admin.service.IService;
import com.webapp.admin.utils.Constants;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

/**
 *
 * @author mamun
 */
public class PrescriptionReportAction extends BaseAction {

    @Override
    public ActionForward execute(ActionMapping mapping, ActionForm from, HttpServletRequest request, HttpServletResponse response) throws Exception {

        String target = SUCCESS;
        try {
            PrescriptionForm prescriptionForm = (PrescriptionForm) from;
            PrescriptionService prescriptionService = new PrescriptionService();

            List<PrescriptionDTO> list = prescriptionService.getPrescriptionDalilyCount();
            request.getSession(true).setAttribute(Constants.DATA_ROWS, list);
        } catch (NullPointerException e) {
            target = FAILURE;
        }
        return mapping.findForward(target);
    }
}
