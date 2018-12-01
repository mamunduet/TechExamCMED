/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.prescription;

import com.webapp.admin.BaseAction;
import com.webapp.admin.dto.LoginDTO;
import com.webapp.admin.dto.PrescriptionDTO;
import com.webapp.admin.repository.PrescriptionRepository;
import com.webapp.admin.service.IService;
import com.webapp.admin.utils.AppLogger;
import com.webapp.admin.utils.Constants;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

/**
 *
 * @author mamun
 */
public class PrescriptionAction extends BaseAction {

    @Override
    public ActionForward execute(ActionMapping mapping, ActionForm form, HttpServletRequest request, HttpServletResponse response) throws Exception {
        String target = FAILURE;
        String activistName;
        try {
            LoginDTO loginDTO = (LoginDTO) request.getSession(true).getAttribute(Constants.LOGIN_DTO);
            activistName = loginDTO.getUserName();
        } catch (Exception e) {
            target = UNAUTHORIZED;
            return mapping.findForward(target);
        }
        PrescriptionForm prescriptionForm = (PrescriptionForm) form;
        PrescriptionDTO prescriptionDTO = new PrescriptionDTO();
        IService prescriptionService = new PrescriptionService();
        int result = 0;
        switch (prescriptionForm.getAction()) {
            case Constants.ADD: {
                AppLogger.getActivityLogger().debug("Action : PrescriptionAction[add] activistName : " + activistName);
                prescriptionDTO = getPrescriptionDTO(prescriptionForm);
                result = prescriptionService.add(prescriptionDTO);
                if (result > 0) {
                    target = SUCCESS;
                    PrescriptionRepository.getInstance().forceReload();
                } else {
                    target = FAILURE;
                    request.setAttribute("message", "Failure");
                }
                break;
            }
            case Constants.EDIT: {
                if (prescriptionForm.getId() > 0) {
                    prescriptionDTO = (PrescriptionDTO) prescriptionService.get(prescriptionForm.getId());
                    setPrescriptionForm(prescriptionDTO, prescriptionForm);
                    target = SUCCESS;
                } else {
                    target = FAILURE;
                }
                break;
            }
            case Constants.UPDATE: {
                AppLogger.getActivityLogger().debug("Action : PrescriptionAction[add] activistName : " + activistName);
                prescriptionDTO = getPrescriptionDTO(prescriptionForm);
                result = prescriptionService.update(prescriptionDTO);
                if (result > 0) {
                    target = SUCCESS;
                    PrescriptionRepository.getInstance().forceReload();
                } else {
                    target = FAILURE;
                    request.setAttribute("message", "Failure");
                }
                break;
            }
            case Constants.DELETE: {
                if (prescriptionForm.getId() > 0) {
                    result = prescriptionService.delete(prescriptionForm.getId());
                }
                if (result > 0) {
                    target = SUCCESS;
                    PrescriptionRepository.getInstance().forceReload();
                } else {
                    target = FAILURE;
                    request.setAttribute("message", "Failure");
                }
                break;
            }
            default: {
                target = SUCCESS;
                break;
            }
        }
        return mapping.findForward(target);
    }

    private PrescriptionDTO getPrescriptionDTO(PrescriptionForm prescriptionForm) throws ParseException {
        PrescriptionDTO prescriptionDTO = new PrescriptionDTO();
        prescriptionDTO.setPatientName(prescriptionForm.getPatientName());
        prescriptionDTO.setPatientAge(prescriptionForm.getPatientAge());
        prescriptionDTO.setPatientGender(prescriptionForm.getPatientGender());
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM-dd-yyyy");
        Date prescriptionDate = null;

        System.out.println("Date : " + dateFormat.format(dateFormat.parse(prescriptionForm.getPrescriptionDate())));

        try {
            prescriptionDate = dateFormat.parse(prescriptionForm.getPrescriptionDate());
        } catch (ParseException ex) {
        }

        Date nextVisitDate = null;

        try {
            if (prescriptionForm.getNextVisitDate() != null && prescriptionForm.getNextVisitDate().length() > 0) {
                nextVisitDate = dateFormat.parse(prescriptionForm.getNextVisitDate());
            }
        } catch (ParseException ex) {
        }
        if (prescriptionDate != null) {
            prescriptionDTO.setPrescriptionDate(prescriptionDate.getTime());
        }
        if (nextVisitDate != null) {
            prescriptionDTO.setNextVisitDate(nextVisitDate.getTime());
        }
        prescriptionDTO.setDiagnosis(prescriptionForm.getDiagnosis());
        prescriptionDTO.setMedicines(prescriptionForm.getMedicines());
        prescriptionDTO.setId(prescriptionForm.getId());
        return prescriptionDTO;
    }

    private void setPrescriptionForm(PrescriptionDTO prescriptionDTO, PrescriptionForm prescriptionForm) {

        prescriptionForm.setPatientName(prescriptionDTO.getPatientName());
        prescriptionForm.setPatientAge(prescriptionDTO.getPatientAge());
        prescriptionForm.setPatientGender(prescriptionDTO.getPatientGender());
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM-dd-yyyy");
        String prescriptionDate = "";
        prescriptionDate = dateFormat.format(new Date(prescriptionDTO.getPrescriptionDate()));
        String nextVisitDate = "";
        if (prescriptionDTO.getNextVisitDate() > 0) {
            nextVisitDate = dateFormat.format(new Date(prescriptionDTO.getNextVisitDate()));
        }
        prescriptionForm.setPrescriptionDate(prescriptionDate);
        prescriptionForm.setNextVisitDate(nextVisitDate);
        if (prescriptionDTO.getDiagnosis() != null) {
            prescriptionForm.setDiagnosis(prescriptionDTO.getDiagnosis());
        }
        if (prescriptionDTO.getMedicines() != null) {
            prescriptionForm.setMedicines(prescriptionDTO.getMedicines());
        }
        prescriptionForm.setId(prescriptionDTO.getId());
    }
}
