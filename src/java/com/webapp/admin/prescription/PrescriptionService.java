package com.webapp.admin.prescription;

import com.webapp.admin.dao.PrescriptionDAO;
import com.webapp.admin.dto.PrescriptionDTO;
import com.webapp.admin.repository.PrescriptionRepository;
import com.webapp.admin.service.IService;
import java.util.List;

public class PrescriptionService implements IService<PrescriptionDTO> {

    @Override
    public int add(PrescriptionDTO o) {
        return PrescriptionDAO.getInstance().addPrescriptionInfo(o);
    }

    @Override
    public int update(PrescriptionDTO o) {

        return PrescriptionDAO.getInstance().upadtePrescriptionInfo(o);
    }

    @Override
    public int delete(int id) {
        return PrescriptionDAO.getInstance().deletePrescriptionInfo(id);
    }

    @Override
    public PrescriptionDTO get(int id) {

        return PrescriptionRepository.getInstance().getPrescriptionDTO(id);
    }

    @Override
    public List<PrescriptionDTO> getList(PrescriptionDTO o) {
        return PrescriptionRepository.getInstance().getPrescriptionDTOList(o);
    }

    public List<PrescriptionDTO> getPrescriptionDalilyCount() {
        return PrescriptionDAO.getInstance().getPrescriptionDalilyCount();
    }

}
