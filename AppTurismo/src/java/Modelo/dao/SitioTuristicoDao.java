/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.dao;

import Modelo.dto.SitioTuristico;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Ruben D
 */
public class SitioTuristicoDao {
    private Connection co;
    private ResultSet rs;
    private PreparedStatement ps;
    
    public SitioTuristicoDao(Connection c) {
        this.co = c;
    }
    
    public String agregarSitioTuristico(SitioTuristico st) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("INSERT INTO SITIOSTURISTICOS (nombre, MUNICIPIOS_nombre, descripcion, imagen) VALUES (?, ?, ?, ?);");
            this.ps.setString(1, st.getNombre());
            this.ps.setString(2, st.getMunicipio());
            this.ps.setString(3, st.getDescripcion());
            this.ps.setString(4, st.getImagen());

            this.ps.execute();

        } catch (Exception e) {
            msg = "error: ERROR EN EL DAO:: " + e.getMessage();
            System.out.println("ERROR EN EL DAO:: " + e.getMessage());
        } finally {
            try {
                this.ps.close();
                this.ps = null;
            } catch (SQLException ex) {
                Logger.getLogger(CuentaDao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return msg;
    }
    
    public String consultarSitiosTuristicos() {
        String msg = "";
        try {
            this.ps = this.co.prepareStatement("SELECT nombre, MUNICIPIOS_nombre FROM SITIOSTURISTICOS;");
            rs = ps.executeQuery();

            if (rs != null) {
                while (rs.next()) {
                    msg += rs.getString(1)+"-";
                    msg += rs.getString(2)+"/";
                }
            }
        } catch (Exception e) {
            msg = "error: ERROR EN EL DAO:: " + e.getMessage();
            System.out.println("ERROR EN EL DAO:: " + e.getMessage());
        } finally {
            try {
                this.ps.close();
                this.ps = null;
            } catch (SQLException ex) {
                Logger.getLogger(CuentaDao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return msg;
    }
    
    public String consultarSitioTuristicoPorID(SitioTuristico st) {
        String msg = "";
        try {
            this.ps = this.co.prepareStatement("SELECT nombre, MUNICIPIOS_nombre, descripcion, imagen FROM SITIOSTURISTICOS WHERE nombre = ? AND MUNICIPIOS_nombre = ?;");
            this.ps.setString(1, st.getNombre());
            this.ps.setString(2, st.getMunicipio());
            rs = ps.executeQuery();

            if (rs != null) {
                while (rs.next()) {
                    msg += rs.getString(1)+"-";
                    msg += rs.getString(2)+"-";
                    msg += rs.getString(3)+"-";
                    msg += rs.getString(4);
                }
            }
        } catch (Exception e) {
            msg = "error: ERROR EN EL DAO:: " + e.getMessage();
            System.out.println("ERROR EN EL DAO:: " + e.getMessage());
        } finally {
            try {
                this.ps.close();
                this.ps = null;
            } catch (SQLException ex) {
                Logger.getLogger(CuentaDao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return msg;
    }
    
    public String consultarSitioTuristicoPorMunicipio(SitioTuristico st) {
        String msg = "";
        try {
            this.ps = this.co.prepareStatement("SELECT nombre, MUNICIPIOS_nombre FROM SITIOSTURISTICOS WHERE MUNICIPIOS_nombre = ?;");
            this.ps.setString(1, st.getMunicipio());
            rs = ps.executeQuery();

            if (rs != null) {
                while (rs.next()) {
                    msg += rs.getString(1)+"-";
                    msg += rs.getString(2)+"/";
                }
            }
        } catch (Exception e) {
            msg = "error: ERROR EN EL DAO:: " + e.getMessage();
            System.out.println("ERROR EN EL DAO:: " + e.getMessage());
        } finally {
            try {
                this.ps.close();
                this.ps = null;
            } catch (SQLException ex) {
                Logger.getLogger(CuentaDao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return msg;
    }
    
    public String modificarSitioTuristico(SitioTuristico stVer, SitioTuristico stMod) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("UPDATE SITIOSTURISTICOS SET nombre = ?, MUNICIPIOS_nombre = ?, descripcion = ?, imagen = ?  WHERE nombre = ? AND MUNICIPIOS_nombre = ?");
            this.ps.setString(1, stMod.getNombre());
            this.ps.setString(2, stMod.getMunicipio());
            this.ps.setString(3, stMod.getDescripcion());
            this.ps.setString(4, stMod.getImagen());
            this.ps.setString(5, stVer.getNombre());
            this.ps.setString(6, stVer.getMunicipio());

            this.ps.execute();

        } catch (Exception e) {
            msg = "error: ERROR EN EL DAO:: " + e.getMessage();
            System.out.println("ERROR EN EL DAO:: " + e.getMessage());
        } finally {
            try {
                this.ps.close();
                this.ps = null;
            } catch (SQLException ex) {
                Logger.getLogger(CuentaDao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return msg;
    }
    
    public String eliminarSitioTuristico(SitioTuristico st) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("DELETE FROM SITIOSTURISTICOS WHERE nombre = ? AND MUNICIPIOS_nombre = ?;");
            this.ps.setString(1, st.getNombre());
            this.ps.setString(2, st.getMunicipio());

            this.ps.execute();

        } catch (Exception e) {
            msg = "error: ERROR EN EL DAO:: " + e.getMessage();
            System.out.println("ERROR EN EL DAO:: " + e.getMessage());
        } finally {
            try {
                this.ps.close();
                this.ps = null;
            } catch (SQLException ex) {
                Logger.getLogger(CuentaDao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return msg;
    }
}
