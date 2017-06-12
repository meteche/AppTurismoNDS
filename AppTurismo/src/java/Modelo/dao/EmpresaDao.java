/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.dao;

import Modelo.dto.Empresa;
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
public class EmpresaDao {
    private Connection co;
    private ResultSet rs;
    private PreparedStatement ps;
    
    public EmpresaDao(Connection c) {
        this.co = c;
    }
    
    public String agregarEmpresa(Empresa em) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("INSERT INTO EMPRESAS (USUARIOS_Cuentas_correo, MUNICIPIOS_nombre, tipo, telefono, direccion, imagen, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?);");
            this.ps.setString(1, em.getCorreo());
            this.ps.setString(2, em.getMunicipio());
            this.ps.setString(3, em.getTipoEmpresa());
            this.ps.setString(4, em.getTelefono());
            this.ps.setString(5, em.getDireccion());
            this.ps.setString(6, em.getImagen());
            this.ps.setString(7, em.getDescripcion());

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
    
    public String consultarEmpresaPorID(Empresa em) {
        String msg = "";
        try {
            this.ps = this.co.prepareStatement("SELECT USUARIOS_Cuentas_correo, MUNICIPIOS_nombre, tipo, telefono, direccion, imagen, descripcion FROM EMPRESAS WHERE USUARIOS_Cuentas_correo = ?;");
            this.ps.setString(1, em.getCorreo());
            rs = ps.executeQuery();

            if (rs != null) {
                while (rs.next()) {
                    msg += rs.getString(1)+"&";
                    msg += rs.getString(2)+"&";
                    msg += rs.getString(3)+"&";
                    msg += rs.getString(4)+"&";
                    msg += rs.getString(5)+"&";
                    msg += rs.getString(6)+"&";
                    msg += rs.getString(7);
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
    
    public String modificarEmpresa(Empresa em) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("UPDATE EMPRESAS SET MUNICIPIOS_nombre = ?, tipo = ?, telefono = ?, direccion = ?, imagen = ?, descripcion = ?  WHERE USUARIOS_Cuentas_correo = ?");
            this.ps.setString(1, em.getMunicipio());
            this.ps.setString(2, em.getTipoEmpresa());
            this.ps.setString(3, em.getTelefono());
            this.ps.setString(4, em.getDireccion());
            this.ps.setString(5, em.getImagen());
            this.ps.setString(6, em.getDescripcion());
            this.ps.setString(7, em.getCorreo());

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
