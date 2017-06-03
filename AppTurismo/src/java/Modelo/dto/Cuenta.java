/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.dto;

/**
 *
 * @author Ruben D
 */
public class Cuenta {
    private String correo;
    private String password;
    private String tipoCuenta;

    public Cuenta() {
    }

    public Cuenta(String correo, String password, String tipoCuenta) {
        this.correo = correo;
        this.password = password;
        this.tipoCuenta = tipoCuenta;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTipoCuenta() {
        return tipoCuenta;
    }

    public void setTipoCuenta(String tipoCuenta) {
        this.tipoCuenta = tipoCuenta;
    }
    
    
}
