/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.dto;

import com.webapp.admin.BaseDTO;
import com.webapp.admin.utils.Constants;
import java.util.Comparator;

/**
 *
 * @author mamun
 */
public class PrescriptionDTO extends BaseDTO {

    private int id;
    private String patientName;
    private int patientAge;
    private String patientGender;
    private String diagnosis;
    private String medicines;
    private long prescriptionDate;
    private long nextVisitDate;
    private String prescriptionDateStr;
    private String nextVisitDateStr;
    private String dateStr;
    private int count;

    public String getDateStr() {
        return dateStr;
    }

    public void setDateStr(String dateStr) {
        this.dateStr = dateStr;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getPrescriptionDateStr() {
        return prescriptionDateStr;
    }

    public void setPrescriptionDateStr(String prescriptionDateStr) {
        this.prescriptionDateStr = prescriptionDateStr;
    }

    public String getNextVisitDateStr() {
        return nextVisitDateStr;
    }

    public void setNextVisitDateStr(String nextVisitDateStr) {
        this.nextVisitDateStr = nextVisitDateStr;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public int getPatientAge() {
        return patientAge;
    }

    public void setPatientAge(int patientAge) {
        this.patientAge = patientAge;
    }

    public String getPatientGender() {
        return patientGender;
    }

    public void setPatientGender(String patientGender) {
        this.patientGender = patientGender;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getMedicines() {
        return medicines;
    }

    public void setMedicines(String medicines) {
        this.medicines = medicines;
    }

    public long getPrescriptionDate() {
        return prescriptionDate;
    }

    public void setPrescriptionDate(long prescriptionDate) {
        this.prescriptionDate = prescriptionDate;
    }

    public long getNextVisitDate() {
        return nextVisitDate;
    }

    public void setNextVisitDate(long nextVisitDate) {
        this.nextVisitDate = nextVisitDate;
    }

    public static class CompASC implements Comparator<PrescriptionDTO> {

        @Override
        public int compare(PrescriptionDTO arg0, PrescriptionDTO arg1) {
            switch (column) {
                case Constants.COLUMN_ONE:
                    return arg0.getPatientName().compareTo(arg1.getPatientName());
                case Constants.COLUMN_TWO:
                    return arg0.getPatientGender().compareTo(arg1.getPatientGender());
                default:
                    return arg0.getId() - arg1.getId();
            }
        }
    }

    public static class CompDSC implements Comparator<PrescriptionDTO> {

        @Override
        public int compare(PrescriptionDTO arg0, PrescriptionDTO arg1) {
            switch (column) {
                case Constants.COLUMN_ONE:
                    return arg1.getPatientName().compareTo(arg0.getPatientName());
                case Constants.COLUMN_TWO:
                    return arg1.getPatientGender().compareTo(arg0.getPatientGender());
                default:
                    return arg1.getId() - arg0.getId();
            }
        }
    }
}
