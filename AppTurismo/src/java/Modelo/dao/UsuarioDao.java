/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.dao;

import Modelo.dto.Usuario;
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
public class UsuarioDao {
    private Connection co;
    private ResultSet rs;
    private PreparedStatement ps;
    
    public UsuarioDao(Connection c) {
        this.co = c;
    }
    
    public String agregarUsuario(Usuario u) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("INSERT INTO USUARIOS (CUENTAS_correo) VALUES (?);");
            this.ps.setString(1, u.getCorreo());

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
    
    public String modificarEmpresa(Usuario u) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("UPDATE USUARIOS SET nombre = ?  WHERE CUENTAS_correo = ?");
            this.ps.setString(1, u.getNombre());
            this.ps.setString(2, u.getCorreo());
            
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
    
    public String consultarUsuario(Usuario u) {
        String msg = "";
        try {
            this.ps = this.co.prepareStatement("SELECT CUENTAS_correo, nombre FROM USUARIOS WHERE CUENTAS_correo = ?;");
            this.ps.setString(1, u.getCorreo());
            rs = ps.executeQuery();

            if (rs != null) {
                while (rs.next()) {
                    msg += rs.getString(1)+"&";
                    msg += rs.getString(2);
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
}
