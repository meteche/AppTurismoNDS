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
public class Empresa {
    private String correo;
    private String municipio;
    private String tipoEmpresa;
    private String telefono;
    private String direccion;
    private String imagen;
    private String descripcion;

    public Empresa() {
    }

    public Empresa(String correo, String municipio, String tipoEmpresa, String telefono, String direccion, String imagen, String descripcion) {
        this.correo = correo;
        this.municipio = municipio;
        this.tipoEmpresa = tipoEmpresa;
        this.telefono = telefono;
        this.direccion = direccion;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getTipoEmpresa() {
        return tipoEmpresa;
    }

    public void setTipoEmpresa(String tipoEmpresa) {
        this.tipoEmpresa = tipoEmpresa;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    
}
