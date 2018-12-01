/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.repository;

import com.webapp.admin.dao.PrescriptionDAO;
import com.webapp.admin.dto.PrescriptionDTO;
import com.webapp.admin.utils.AppLogger;
import com.webapp.admin.utils.Constants;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.apache.log4j.Logger;

/**
 *
 * @author mamun
 */
public class PrescriptionRepository {

    private static final long LOADING_INTERVAL = 24 * 60 * 60 * 1000;
    private long loadingTime = 0;
    private Map<Integer, PrescriptionDTO> prescriptionMap;
    private static final Logger logger = AppLogger.getActivityLogger();

    private PrescriptionRepository() {
        prescriptionMap = new HashMap<>();
    }

    private static class PrescriptionRepositoryHolder {

        private static final PrescriptionRepository INSTANCE = new PrescriptionRepository();
    }

    public static PrescriptionRepository getInstance() {
        return PrescriptionRepositoryHolder.INSTANCE;
    }

    private void forceLoadData() {
        prescriptionMap.clear();
        prescriptionMap = PrescriptionDAO.getInstance().getPrescriptionDataMap();
        System.out.println("size: " + prescriptionMap.size());
        logger.debug("PrescriptionRepository: forceLoadData :: " + prescriptionMap.size());
    }

    private void checkForReload() {
        long currentTime = System.currentTimeMillis();
        if (currentTime - loadingTime > LOADING_INTERVAL) {
            loadingTime = currentTime;
            forceLoadData();
        }
    }

    public synchronized void forceReload() {
        loadingTime = System.currentTimeMillis();
        forceLoadData();
    }

    private boolean containsAny(String query, PrescriptionDTO dto) {
        return (dto.getId() > 0 && String.valueOf(dto.getId()).contains(query))
                || (dto.getPatientName().length() > 0 && dto.getPatientName().toLowerCase().contains(query))
                || (dto.getPatientGender().length() > 0 && dto.getPatientGender().toLowerCase().contains(query))
                || (dto.getPatientAge() > 0 && String.valueOf(dto.getPatientAge()).contains(query));
    }

    private List<PrescriptionDTO> getPrescriptionDTOData(String searchText) {
        checkForReload();

        return prescriptionMap
                .entrySet()
                .stream()
                .filter(prescription
                        -> (searchText.length() > 0 ? containsAny(searchText, prescription.getValue()) : true)).
                map(prescription -> prescription.getValue()).collect(Collectors.toList());
    }

    public List<PrescriptionDTO> getPrescriptionDTOList(PrescriptionDTO searchDTO) {
        List<PrescriptionDTO> prescriptionDTOs = getPrescriptionDTOData(searchDTO.getSearchText() != null
                && searchDTO.getSearchText().length() > 0 ? searchDTO.getSearchText() : "");
        if (searchDTO.getSortType() == Constants.DESC_SORT) {
            Collections.sort(prescriptionDTOs, new PrescriptionDTO.CompDSC());
        } else {
            Collections.sort(prescriptionDTOs, new PrescriptionDTO.CompASC());
        }
        logger.debug("PrescriptionRepository [getPrescriptionDTOList]: " + prescriptionDTOs.size());
        return prescriptionDTOs;
    }

    public PrescriptionDTO getPrescriptionDTO(int id) {
        checkForReload();
        if (prescriptionMap.containsKey(id)) {
            return prescriptionMap.get(id);
        }
        return null;
    }
}
