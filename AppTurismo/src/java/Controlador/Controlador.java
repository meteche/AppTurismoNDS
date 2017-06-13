/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;

import Modelo.Conexion;
import Modelo.dao.CuentaDao;
import Modelo.dao.EmpresaDao;
import Modelo.dao.MunicipioDao;
import Modelo.dao.ServicioDao;
import Modelo.dao.SitioTuristicoDao;
import Modelo.dao.UsuarioDao;
import Modelo.dto.Cuenta;
import Modelo.dto.Empresa;
import Modelo.dto.Municipio;
import Modelo.dto.Servicio;
import Modelo.dto.SitioTuristico;
import Modelo.dto.Usuario;
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
    
    public String agregarCuenta(String correo, String password, String tipoCuenta, String tipoEmpresa) {
        Cuenta c = new Cuenta();
        Usuario u = new Usuario();
        String mensaje = "";
        
        c.setCorreo(correo);
        c.setPassword(password);
        c.setTipoCuenta(tipoCuenta);
        u.setCorreo(correo);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        CuentaDao cd = new CuentaDao(this.co);
        UsuarioDao ud = new UsuarioDao(this.co);
        
        String mensaje1 = cd.agregarCuenta(c);
        String mensaje2 = ud.agregarUsuario(u);
        String mensaje3 = "";
        
        if(tipoCuenta.equals("Empresa")){
            Empresa em = new Empresa();
            Servicio s = new Servicio();
            
            s.setCorreo(correo);
            s.setDescripcion("1");
            s.setNombre("1 campo no valido");
            s.setPrecio(1);
            s.setUrl("1");
            em.setCorreo(correo);
            em.setTipoEmpresa(tipoEmpresa);
            
            EmpresaDao emd = new EmpresaDao(this.co);
            mensaje3 = emd.agregarEmpresa(em);
            
            ServicioDao sd = new ServicioDao(this.co);
            String mensaje4 = sd.agregarServicio(s);
        }else{
            
        }

        if (mensaje1.indexOf("error")>-1 || mensaje2.indexOf("error")>-1 || mensaje3.indexOf("error")>-1) {
            try {
                System.err.println(mensaje1);
                System.err.println(mensaje2);
                co.rollback();
                mensaje = "Ha ocurrido un error a la hora de registrar la cuenta.";
            } catch (SQLException ex) {
                Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            try {
                mensaje = "exito";
                co.commit();
            } catch (SQLException ex) {
                Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        this.desconectar();
        return mensaje;
    }
    
    public String modificarCuenta(String correoVer, String correoMod, String pass) {
        Cuenta cV = new Cuenta();
        Cuenta cM = new Cuenta();
        
        cV.setCorreo(correoVer);
        cM.setCorreo(correoMod);
        cM.setPassword(pass);
        cM.setTipoCuenta("Administrador");
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        CuentaDao cd = new CuentaDao(this.co);
        String mensaje = cd.modificarCuenta(cV, cM);

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
    
    public String consultarCuentas(){
        this.conectar();
        
        CuentaDao cd = new CuentaDao(this.co);
        String mensaje = cd.consultarCuentas();
        return mensaje;
    }
    
    public String eliminarCuenta(String correo) {
        Cuenta c = new Cuenta();
        
        c.setCorreo(correo);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        CuentaDao cd = new CuentaDao(this.co);
        String mensaje = cd.eliminarCuenta(c);

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
    
    public String agregarMunicipio(String nombreM) {
        Municipio m = new Municipio();
        
        m.setNombre(nombreM);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        MunicipioDao md = new MunicipioDao(this.co);
        String mensaje = md.agregarMunicipio(m);

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
    
    public String consultarMunicipios(){
        this.conectar();
        
        MunicipioDao md = new MunicipioDao(this.co);
        String mensaje = md.consultarMunicipios();
        this.desconectar();
        return mensaje;
    }
    
    public String modificarMunicipio(String muniVer, String muniMod) {
        Municipio cV = new Municipio();
        Municipio cM = new Municipio();
        
        cV.setNombre(muniVer);
        cM.setNombre(muniMod);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        MunicipioDao md = new MunicipioDao(this.co);
        String mensaje = md.modificarMunicipio(cV, cM);

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
    
    public String eliminarMunicipio(String nombre) {
        Municipio m = new Municipio();
        
        m.setNombre(nombre);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        MunicipioDao md = new MunicipioDao(this.co);
        String mensaje = md.eliminarMunicipio(m);

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
    
    public String agregarSitioTuristico(String nombre, String municipio, String descripcion, String imagen) {
        SitioTuristico st = new SitioTuristico();
        
        st.setNombre(nombre);
        st.setMunicipio(municipio);
        st.setDescripcion(descripcion);
        st.setImagen(imagen);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        SitioTuristicoDao std = new SitioTuristicoDao(this.co);
        String mensaje = std.agregarSitioTuristico(st);

        if (mensaje.equals("error")) {
            try {
                co.rollback();
                mensaje = "Ha ocurrido un error a la hora de registrar el sitio turistico.";
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
    
    public String consultarSitiosTuristicos(){
        this.conectar();
        
        SitioTuristicoDao std = new SitioTuristicoDao(this.co);
        String mensaje = std.consultarSitiosTuristicos();
        return mensaje;
    }
    
    public String consultarSitioTuristicoPorID(String nombre, String municipio){
        SitioTuristico st = new SitioTuristico();
        
        st.setNombre(nombre);
        st.setMunicipio(municipio);
        this.conectar();
        
        SitioTuristicoDao std = new SitioTuristicoDao(this.co);
        String mensaje = std.consultarSitioTuristicoPorID(st);
        return mensaje;
    }
    
    public String consultarSitioTuristicoPorMunicipio(String municipio){
        String mensaje = "";
        SitioTuristico st = new SitioTuristico();
        
        st.setMunicipio(municipio);
        this.conectar();
        
        SitioTuristicoDao std = new SitioTuristicoDao(this.co);
        if(municipio.equals("Seleccione un municipio")){
            mensaje = std.consultarSitiosTuristicos();
        }else{
            mensaje = std.consultarSitioTuristicoPorMunicipio(st);
        }
        this.desconectar();
        return mensaje;
    }
    
    public String modificarSitioTuristico(String nombreSTVer, String municipioVer, String nombreST, String municipio,  String descripcion, String imagen) {
        SitioTuristico stV = new SitioTuristico();
        SitioTuristico stM = new SitioTuristico();
        
        stV.setNombre(nombreSTVer);
        stV.setMunicipio(municipioVer);
        stM.setNombre(nombreST);
        stM.setMunicipio(municipio);
        stM.setDescripcion(descripcion);
        stM.setImagen(imagen);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        SitioTuristicoDao std = new SitioTuristicoDao(this.co);
        String mensaje = std.modificarSitioTuristico(stV, stM);

        if (mensaje.equals("error")) {
            try {
                co.rollback();
                mensaje = "Ha ocurrido un error a la hora de modificar el sitio turistico.";
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
    
    public String eliminarSitioTuristico(String nombre, String municipio) {
        SitioTuristico st = new SitioTuristico();
        
        st.setNombre(nombre);
        st.setMunicipio(municipio);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        SitioTuristicoDao std = new SitioTuristicoDao(this.co);
        String mensaje = std.eliminarSitioTuristico(st);

        if (mensaje.equals("error")) {
            try {
                co.rollback();
                mensaje = "Ha ocurrido un error a la hora de eliminar el sitio turistico.";
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
    
    public String consultarEmpresaPorID(String correo){
        Empresa em = new Empresa();
        Usuario u = new Usuario();
        String mensaje = "";
        
        u.setCorreo(correo);
        em.setCorreo(correo);
        this.conectar();

        EmpresaDao emd = new EmpresaDao(this.co);
        String mensaje1 = emd.consultarEmpresaPorID(em);
        UsuarioDao ud = new UsuarioDao(this.co);
        String mensaje2 = ud.consultarUsuario(u);
        mensaje = mensaje1+"&"+mensaje2;
        return mensaje ;
    }
    
    public String modificarEmpresa(String correo, String nombre, String municipio, String tipoEmp, String descripcion, String telefono, String direccion, String imagen) {
        String mensaje = "exito";
        Empresa em = new Empresa();
        Usuario u = new Usuario();
        
        em.setCorreo(correo);
        em.setMunicipio(municipio);
        em.setTipoEmpresa(tipoEmp);
        em.setDescripcion(descripcion);
        em.setTelefono(telefono);
        em.setDireccion(direccion);
        em.setImagen(imagen);
        
        u.setNombre(nombre);
        u.setCorreo(correo);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        EmpresaDao emd = new EmpresaDao(this.co);
        String mensaje1 = emd.modificarEmpresa(em);
        
        UsuarioDao ud = new UsuarioDao(this.co);
        String mensaje2 = ud.modificarEmpresa(u);

        if (mensaje1.equals("error") || mensaje2.equals("error")) {
            try {
                co.rollback();
                mensaje = "error";
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
    
    public String agregarServicio(String correo, String nombre, int precio, String descripcion, String url, String imagen) {
        Servicio s = new Servicio();
        
        s.setCorreo(correo);
        s.setNombre(nombre);
        s.setPrecio(precio);
        s.setDescripcion(descripcion);
        s.setUrl(url);
        s.setImagen(imagen);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        ServicioDao sd = new ServicioDao(this.co);
        String mensaje = sd.agregarServicio(s);

        if (mensaje.indexOf("ERROR")>-1) {
            try {
                co.rollback();
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
    
    public String consultarServiciosPorID(String correo){
        Servicio s = new Servicio();
        
        s.setCorreo(correo);
        this.conectar();

        ServicioDao sd = new ServicioDao(this.co);
        String mensaje = sd.consultarServiciosPorID(s);
        this.desconectar();
        return mensaje ;
    }
    
    public String consultarServicioPorID(String correo, String nombre){
        Servicio s = new Servicio();
        
        s.setCorreo(correo);
        s.setNombre(nombre);
        this.conectar();

        ServicioDao sd = new ServicioDao(this.co);
        String mensaje = sd.consultarServicioPorID(s);
        this.desconectar();
        return mensaje ;
    }
    
    public String modificarServicio(String correo, String nombre, String nombreSVer, int precio, String descripcion, String url, String imagen) {
        Servicio s = new Servicio();
        Servicio sV = new Servicio();
        
        s.setCorreo(correo);
        s.setNombre(nombre);
        s.setPrecio(precio);
        s.setDescripcion(descripcion);
        s.setUrl(url);
        s.setImagen(imagen);
        sV.setNombre(nombre);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        ServicioDao sd = new ServicioDao(this.co);
        String mensaje = sd.modificarServicio(s, sV);

        if (mensaje.indexOf("ERROR")>-1) {
            try {
                co.rollback();
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
    
    public String eliminarServicio(String correo, String nombre) {
        Servicio s = new Servicio();
        
        s.setCorreo(correo);
        s.setNombre(nombre);
        
        this.conectar();
        try {
            this.co.setAutoCommit(false);
        } catch (SQLException ex) {
            Logger.getLogger(Controlador.class.getName()).log(Level.SEVERE, null, ex);
        }
        ServicioDao sd = new ServicioDao(this.co);
        String mensaje = sd.eliminarServicio(s);

        if (mensaje.equals("error")) {
            try {
                co.rollback();
                mensaje = "Ha ocurrido un error a la hora de eliminar el servicio.";
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
    
    public String consultarServicioPorEmpresaMunicipio(String tipoEmp, String municipio){
        Empresa em = new Empresa();
        
        em.setTipoEmpresa(tipoEmp);
        em.setMunicipio(municipio);
        this.conectar();

        ServicioDao sd = new ServicioDao(this.co);
        String mensaje = sd.consultarServicioPorEmpresaMunicipio(em);
        this.desconectar();
        return mensaje ;
    }
}
