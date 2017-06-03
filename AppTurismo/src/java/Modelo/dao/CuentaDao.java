/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.dao;

import Modelo.dto.Cuenta;
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
public class CuentaDao {
    private Connection co;
    private ResultSet rs;
    private PreparedStatement ps;
    
    public CuentaDao(Connection c) {
        this.co = c;
    }
    
    public String agregarCuenta(Cuenta c) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("INSERT INTO CUENTAS (correo, contrasena, tipo_cuenta) VALUES (?, ?, ?);");
            this.ps.setString(1, c.getCorreo());
            this.ps.setString(2, c.getPassword());
            this.ps.setString(3, c.getTipoCuenta());

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
    
    public String validarSesion(Cuenta c){
        String msg = "no existe";
        try {
            this.ps = this.co.prepareStatement("SELECT tipo_cuenta FROM CUENTAS WHERE correo = ? AND contrasena = ?;");
            this.ps.setString(1, c.getCorreo());
            this.ps.setString(2, c.getPassword());
            rs = ps.executeQuery();
              
            if(rs!=null){
                if(rs.next()){
                    msg = rs.getString(1);
                }
            }
        } catch (Exception e) {
            msg = "ERROR EN EL DAO:: " + e.getMessage();
            System.out.println("ERROR EN EL DAO:: " + e.getMessage());
        } finally{
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
