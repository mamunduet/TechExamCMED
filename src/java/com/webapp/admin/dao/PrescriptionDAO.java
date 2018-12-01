/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.dao;

import com.webapp.admin.databaseconnector.DBConnection;
import com.webapp.admin.databaseconnector.DBConnector;
import com.webapp.admin.dto.PrescriptionDTO;
import com.webapp.admin.utils.AppLogger;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;

/**
 *
 * @author mamun
 */
public class PrescriptionDAO {

    private static final Logger logger = AppLogger.getActivityLogger();
    private final static SimpleDateFormat dateFormat = new SimpleDateFormat("MM-dd-yyyy");

    private PrescriptionDAO() {

    }

    private static class PrescriptionDAOHolder {

        private static final PrescriptionDAO INSTANCE = new PrescriptionDAO();
    }

    public static PrescriptionDAO getInstance() {
        return PrescriptionDAOHolder.INSTANCE;
    }

    public List<PrescriptionDTO> getPrescriptionDalilyCount() {
        List<PrescriptionDTO> prescriptionDailyCount = new ArrayList<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        DBConnection db = null;
        String sql = "SELECT COUNT(prescriptionDate) as dailyCount, prescriptionDate"
                + " FROM prescriptions  GROUP BY prescriptionDate;";
        try {
            db = DBConnector.getInstance().makeConnection();
            ps = db.getConnection().prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                PrescriptionDTO dto = new PrescriptionDTO();
                dto.setCount(rs.getInt("dailyCount"));
                dto.setPrescriptionDate(rs.getLong("prescriptionDate"));
                dto.setDateStr(dateFormat.format(new Date(dto.getPrescriptionDate())));
                prescriptionDailyCount.add(dto);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (db != null && db.getConnection() != null) {
                    db.getConnection().close();
                }
            } catch (SQLException e) {
            }
        }
        return prescriptionDailyCount;
    }

    public Map<Integer, PrescriptionDTO> getPrescriptionDataMap() {
        Map<Integer, PrescriptionDTO> countryMap = new HashMap<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        DBConnection db = null;
        String sql = "SELECT id, patientName, patientAge, patientGender, "
                + " diagnosis, medicines, prescriptionDate, nextVisitDate "
                + " FROM prescriptions;";
        try {
            db = DBConnector.getInstance().makeConnection();
            ps = db.getConnection().prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                PrescriptionDTO dto = new PrescriptionDTO();
                dto.setId(rs.getInt("id"));
                dto.setPatientName(rs.getString("patientName"));
                dto.setPatientAge(rs.getInt("patientAge"));
                dto.setPatientGender(rs.getString("patientGender"));
                dto.setDiagnosis(rs.getString("diagnosis"));
                dto.setMedicines(rs.getString("medicines"));
                dto.setPrescriptionDate(rs.getLong("prescriptionDate"));
                dto.setNextVisitDate(rs.getLong("nextVisitDate"));
                dto.setPrescriptionDateStr(dateFormat.format(new Date(dto.getPrescriptionDate())));
                if (dto.getNextVisitDate() > 0) {
                    dto.setNextVisitDateStr(dateFormat.format(new Date(dto.getNextVisitDate())));
                } else {
                    dto.setNextVisitDateStr("");
                }
                countryMap.put(dto.getId(), dto);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (db != null && db.getConnection() != null) {
                    db.getConnection().close();
                }
            } catch (SQLException e) {
            }
        }

        return countryMap;
    }

    public int addPrescriptionInfo(PrescriptionDTO dto) {
        int result = 0;
        PreparedStatement ps = null;
        ResultSet rs = null;
        DBConnection db = null;
        int i = 1;
        String sql = "INSERT INTO `prescriptions` (patientName, patientAge, patientGender, "
                + " diagnosis, medicines, prescriptionDate, nextVisitDate )"
                + " VALUES (?, ?, ?, ?, ?, ?, ?)";
        try {
            db = DBConnector.getInstance().makeConnection();
            ps = db.getConnection().prepareStatement(sql);
            ps.setString(i++, dto.getPatientName());
            ps.setInt(i++, dto.getPatientAge());
            ps.setString(i++, dto.getPatientGender());
            ps.setString(i++, dto.getDiagnosis());
            ps.setString(i++, dto.getMedicines());
            ps.setLong(i++, dto.getPrescriptionDate());
            ps.setLong(i++, dto.getNextVisitDate());
            result = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (db != null && db.getConnection() != null) {
                    db.getConnection().close();
                }
            } catch (SQLException e) {
            }
        }

        return result;
    }

    public int upadtePrescriptionInfo(PrescriptionDTO dto) {
        int result = 0;
        PreparedStatement ps = null;
        ResultSet rs = null;
        DBConnection db = null;
        int i = 1;
        String sql = "Update `prescriptions` SET patientName = ?, patientAge = ?, patientGender=?, "
                + " diagnosis=?, medicines=?, prescriptionDate=?, nextVisitDate=? "
                + " WHERE id=?;";
        try {
            db = DBConnector.getInstance().makeConnection();
            ps = db.getConnection().prepareStatement(sql);
            ps.setString(i++, dto.getPatientName());
            ps.setInt(i++, dto.getPatientAge());
            ps.setString(i++, dto.getPatientGender());
            ps.setString(i++, dto.getDiagnosis());
            ps.setString(i++, dto.getMedicines());
            ps.setLong(i++, dto.getPrescriptionDate());
            ps.setLong(i++, dto.getNextVisitDate());
            ps.setInt(i++, dto.getId());
            result = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (db != null && db.getConnection() != null) {
                    db.getConnection().close();
                }
            } catch (SQLException e) {
            }
        }

        return result;
    }

    public int deletePrescriptionInfo(int id) {
        int result = 0;
        PreparedStatement ps = null;
        ResultSet rs = null;
        DBConnection db = null;
        int i = 1;
        String sql = "DELETE FROM `prescriptions` WHERE id =?";
        try {
            db = DBConnector.getInstance().makeConnection();
            ps = db.getConnection().prepareStatement(sql);
            ps.setInt(i++, id);
            result = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("getCountryDataMap error" + e);
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException e) {
            }
            try {
                if (db != null && db.getConnection() != null) {
                    db.getConnection().close();
                }
            } catch (SQLException e) {
            }
        }

        return result;
    }

    public static void main(String[] args) {
        System.out.println(LoginDAO.getInstance().getUserInfo("mamun").getUserId());
    }
}
