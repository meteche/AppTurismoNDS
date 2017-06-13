/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.dao;

import Modelo.dto.Empresa;
import Modelo.dto.Servicio;
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
public class ServicioDao {
    private Connection co;
    private ResultSet rs;
    private PreparedStatement ps;
    
    public ServicioDao(Connection c) {
        this.co = c;
    }
    
    public String agregarServicio(Servicio s) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("INSERT INTO SERVICIOS (EMPRESAS_Usuarios_Cuentas_correo, nombre, precio, descripcion, url, imagen) VALUES (?, ?, ?, ?, ?, ?);");
            this.ps.setString(1, s.getCorreo());
            this.ps.setString(2, s.getNombre());
            this.ps.setInt(3, s.getPrecio());
            this.ps.setString(4, s.getDescripcion());
            this.ps.setString(5, s.getUrl());
            this.ps.setString(6, s.getImagen());

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
    
    public String consultarServiciosPorID(Servicio s) {
        String msg = "";
        try {
            this.ps = this.co.prepareStatement("SELECT EMPRESAS_Usuarios_Cuentas_correo, nombre, precio, descripcion, url, imagen FROM SERVICIOS WHERE EMPRESAS_Usuarios_Cuentas_correo = ?;");
            this.ps.setString(1, s.getCorreo());
            rs = ps.executeQuery();

            if (rs != null) {
                while (rs.next()) {
                    msg += rs.getString(1)+"&";
                    msg += rs.getString(2)+"&";
                    msg += rs.getString(3)+"&";
                    msg += rs.getString(4)+"&";
                    msg += rs.getString(5)+"&";
                    msg += rs.getString(6)+"/";
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
    
    public String consultarServicioPorID(Servicio s) {
        String msg = "";
        try {
            this.ps = this.co.prepareStatement("SELECT EMPRESAS_Usuarios_Cuentas_correo, nombre, precio, descripcion, url, imagen FROM SERVICIOS WHERE EMPRESAS_Usuarios_Cuentas_correo = ? AND nombre = ?;");
            this.ps.setString(1, s.getCorreo());
            this.ps.setString(2, s.getNombre());
            rs = ps.executeQuery();

            if (rs != null) {
                while (rs.next()) {
                    msg += rs.getString(1)+"&";
                    msg += rs.getString(2)+"&";
                    msg += rs.getString(3)+"&";
                    msg += rs.getString(4)+"&";
                    msg += rs.getString(5)+"&";
                    msg += rs.getString(6);
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
    
    public String consultarServicioPorEmpresaMunicipio(Empresa em) {
        String msg = "";
        try {
            this.ps = this.co.prepareStatement("SELECT s.imagen, s.nombre, s.descripcion,  s.precio, s.url, u.nombre FROM SERVICIOS s INNER JOIN EMPRESAS e ON e.USUARIOS_Cuentas_correo = s.EMPRESAS_Usuarios_Cuentas_correo INNER JOIN USUARIOS u ON e.USUARIOS_Cuentas_correo = CUENTAS_correo WHERE e.MUNICIPIOS_nombre = ? AND e.tipo = ?;");
            this.ps.setString(1, em.getMunicipio());
            this.ps.setString(2, em.getTipoEmpresa());
            
            rs = ps.executeQuery();

            if (rs != null) {
                while (rs.next()) {
                    msg += rs.getString(1)+"&";
                    msg += rs.getString(2)+"&";
                    msg += rs.getString(3)+"&";
                    msg += rs.getString(4)+"&";
                    msg += rs.getString(5)+"&";
                    msg += rs.getString(6)+"/";
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
    
    public String modificarServicio(Servicio s, Servicio sV) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("UPDATE SERVICIOS SET nombre = ?, precio = ?, descripcion = ?, url = ?, imagen = ? WHERE EMPRESAS_Usuarios_Cuentas_correo = ? AND nombre = ?");
            this.ps.setString(1, s.getNombre());
            this.ps.setInt(2, s.getPrecio());
            this.ps.setString(3, s.getDescripcion());
            this.ps.setString(4, s.getUrl());
            this.ps.setString(5, s.getImagen());
            this.ps.setString(6, s.getCorreo());
            this.ps.setString(7, sV.getNombre());

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
    
    public String eliminarServicio(Servicio s) {
        String msg = "exito";
        try {
            this.ps = this.co.prepareStatement("DELETE FROM SERVICIOS WHERE EMPRESAS_Usuarios_Cuentas_correo = ? AND nombre = ?;");
            this.ps.setString(1, s.getCorreo());
            this.ps.setString(2, s.getNombre());

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
