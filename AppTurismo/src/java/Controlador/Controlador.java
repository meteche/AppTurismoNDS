/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;

import Modelo.Conexion;
import Modelo.dao.CuentaDao;
import Modelo.dto.Cuenta;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Ruben D
 */
public class Controlador {
    private Conexion c;
    private Connection co;
    
    public Controlador() {
    }
    
    /**
     * Metodo que establece la conexion con la base de datos
     */
    private void conectar() {
        this.c = new Conexion();
        this.c.conectar();
        this.co = this.c.getConexion();
    }

    /**
     * Metodo que finaliza la conexion con la base de datos
     */
    private void desconectar() {
        
        try {
            this.co.close();
            this.co = null;
            this.c.desconectar();
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public String validarSesion(String correo, String password){
        Cuenta c = new Cuenta();
        c.setCorreo(correo);
        c.setPassword(password);
        this.conectar();
        
        CuentaDao cd = new CuentaDao(this.co);
        String msg = cd.validarSesion(c);
        if(msg.equals("no existe")){
            msg = "Verifique su correo o contraseña";
        }
        this.desconectar();
        return msg;
    }
    
    public String agregarCuenta(String correo, String password, String tipoCuenta) {
        Cuenta c = new Cuenta();
        
        c.setCorreo(correo);
        c.setPassword(password);
        c.setTipoCuenta(tipoCuenta);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        CuentaDao cd = new CuentaDao(this.co);
        String mensaje = cd.agregarCuenta(c);

        if (mensaje.equals("error")) {
            try {
                co.rollback();
                mensaje = "Ha ocurrido un error a la hora de registrar la cuenta.";
            } catch (SQLException ex) {
                Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            try {
                co.commit();
            } catch (SQLException ex) {
                Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        this.desconectar();
        return mensaje;
    }
}
