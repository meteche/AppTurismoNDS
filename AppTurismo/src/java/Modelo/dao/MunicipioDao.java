/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.dao;

import Modelo.dto.Municipio;
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
public class MunicipioDao {
    private Connection co;
    private ResultSet rs;
    private PreparedStatement ps;
    
    public MunicipioDao(Connection c) {
        this.co = c;
    }
    
    public String agregarMunicipio(Municipio m) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("INSERT INTO MUNICIPIOS (nombre) VALUES (?);");
            this.ps.setString(1, m.getNombre());

            this.ps.execute();

        } catch (Exception e) {
            msg = "ERROR EN EL DAO:: " + e.getMessage();
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
    
    public String consultarMunicipios() {
        String msg = "";
        try {
            this.ps = this.co.prepareStatement("SELECT nombre FROM MUNICIPIOS;");
            rs = ps.executeQuery();

            if (rs != null) {
                while (rs.next()) {
                    msg += rs.getString(1)+"/";
                }
            }
        } catch (Exception e) {
            msg = "ERROR EN EL DAO:: " + e.getMessage();
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
    
    public String modificarMunicipio(Municipio mVer, Municipio mMod) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("UPDATE MUNICIPIOS SET nombre = ? WHERE nombre = ?");
            this.ps.setString(1, mMod.getNombre());
            this.ps.setString(2, mVer.getNombre());

            this.ps.execute();

        } catch (Exception e) {
            msg = "ERROR EN EL DAO:: " + e.getMessage();
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
    
    public String eliminarMunicipio(Municipio m) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("DELETE FROM MUNICIPIOS WHERE nombre = ?;");
            this.ps.setString(1, m.getNombre());

            this.ps.execute();

        } catch (Exception e) {
            msg = "ERROR EN EL DAO:: " + e.getMessage();
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
