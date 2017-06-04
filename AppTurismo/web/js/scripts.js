/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//INICIO - declaracion de variables
var cont = 0;

var READY_STATE_UNINITIALIZED = 0;
var READY_STATE_LOADING = 1;
var READY_STATE_LOADED = 2;
var READY_STATE_INTERACTIVE = 3;
var READY_STATE_COMPLETE = 4;

var OK = 200;
var NOT_FOUND = 404;
var INTERNAL_SERVER_ERROR = 500;

var xhttp;
//FIN - declaraccion de variables

/*
 * INICIO - carga de scripts del sitio
 */

window.onload = function () {
    cargarScripts();
};

function cargarScripts(){
    var inicio = window.location.pathname.indexOf("inicio.jsp");
    var registrarCuenta = window.location.pathname.indexOf("registrar-cuenta.jsp");
    var municipios = window.location.pathname.indexOf("admin/municipios.jsp");
    var miCuenta = window.location.pathname.indexOf("admin/mi_cuenta.jsp");
    
    if(inicio >= 0){
        cargaScriptsBasicos();
    }else{
        if(registrarCuenta >= 0){
            cargaScriptsBasicos();
            cargaScriptsRegistrarCuenta();
        }else{
            if(municipios >= 0){
                cargaScriptsBasicosLogueado();
                cargaScriptsMunicipios();
                cargarTablaMunicipios();
            }else{
                if(miCuenta >= 0){
                    cargaScriptsBasicosLogueado();
                }
            }
        }
    }
}

function cargaScriptsBasicos(){
    var btnMenu = document.getElementById('iconMenu');
    btnMenu.onclick = function(){desplegar('#sub-menu');};
    
    var btnSMLogin = document.getElementById('subM-Login');
    btnSMLogin.onclick = function(){desplegar('#login');};
    
    var btnMLogin = document.getElementById('m-login');
    btnMLogin.onclick = function(){desplegar('#login2');};
    
    var btnInicio = document.getElementById('logo');
    btnInicio.onclick = function(){redirigir("", "index.jsp");};
    
    var btnSMRegistrar = document.getElementById('smRegistrar');
    btnSMRegistrar.onclick = function(){redirigir("", "registrar-cuenta.jsp");};
    
    var btnMRegistrar = document.getElementById('mRegistrar');
    btnMRegistrar.onclick = function(){redirigir("", "registrar-cuenta.jsp");};
    
    var btnLogin2 = document.getElementById('btn-login2');
    btnLogin2.onclick = function(){login(2);};
    
    var btnLogin = document.getElementById('btn-login');
    btnLogin.onclick = function(){login(1);};
}

function cargaScriptsRegistrarCuenta(){
    
    var btnRegistarCuentaDespliega = document.getElementById('btn-registrarmeT');
    btnRegistarCuentaDespliega.onclick = function(){desplegar('#form-registroT');};
    
    var btnRegistarCuentaDespliega = document.getElementById('btn-registrarmeE');
    btnRegistarCuentaDespliega.onclick = function(){desplegar('#form-registroE');};
    
    var btnBtnRegCuentaT = document.getElementById('regCuentaT');
    btnBtnRegCuentaT.onclick = function(){registrarCuenta("Turista");};
    
    var btnBtnRegCuentaE = document.getElementById('regCuentaE');
    btnBtnRegCuentaE.onclick = function(){registrarCuenta("Empresa");};
}

function cargaScriptsBasicosLogueado(){
    
    var btnInicio = document.getElementById('logo');
    btnInicio.onclick = function(){redirigir("", "../index.jsp");};
    
    var btnLogout = document.getElementById('m-logout');
    btnLogout.onclick = function(){redirigir("cerrarSesion", "../index.jsp");};
    
    var btnMostrarMenuLateral = document.getElementById('mostrarMenu');
    btnMostrarMenuLateral.onclick = function(){desplegar("#contenedor-acciones");desplegar("#acciones");};
    
    var btnMenu = document.getElementById('iconMenu');
    btnMenu.onclick = function(){desplegar('#sub-menu');};
    
    var iconLogout = document.getElementById('smLogout');
    iconLogout.onclick = function(){redirigir("cerrarSesion", "../index.jsp");};
    
    var btnMMunicipio = document.getElementById('m-municipio');
    btnMMunicipio.onclick = function(){redirigir("", "municipios.jsp");};
    
    var btnMMiCuenta = document.getElementById('m-miCuenta');
    btnMMiCuenta.onclick = function(){redirigir("", "mi_cuenta.jsp");};
}

function cargaScriptsMunicipios(){
    
    var btnCrearMunicipio = document.getElementById('btn-crearMunicipio');
    btnCrearMunicipio.onclick = function(){registrarMunicipio();};
    
    var btnModificarMunicipio = document.getElementById('btn-modificarMunicipio');
    btnModificarMunicipio.onclick = function(){modificarMunicipio();};
}

//FIN - carga scripts  del sitio

/*
 * INICIO - funciones que permiten la interaccion del sitio
 */

function desplegar(div){
    $(div).toggle();
}

function redirigir(opcion, pagina){
    if(opcion != ""){
        if (window.XMLHttpRequest) {  
        // Navegadores que siguen los estándares
            xhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {  // Navegadores obsoletos
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("POST", "../back/procesar.jsp", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var queryString = "option=" + (opcion) + "&nocache=" + Math.random();
        xhttp.send(queryString);
    }
    window.location = pagina;
}

function verificarCorreoContraseña(correo, pass, msgCorreo, msgPass){
    //patrón de expresión regular para validar los correos
    var validaCorreo1 = /\w+@\w+\.+[a-z]+\.+[a-z]+$/;
    var validaCorreo2 = /\w+@\w+\.+[a-z]+$/;
    
    // Preparar la funcion de respuesta
    if(correo === ""){
        document.getElementById(msgCorreo).style.display = "block";
        document.getElementById(msgCorreo).innerHTML = "Ingrese un correo";
    }else{
        if (!validaCorreo1.test(correo) && !validaCorreo2.test(correo)) {
            document.getElementById(msgCorreo).style.display = "block";
            document.getElementById(msgCorreo).innerHTML = "Correo no valido. El correo debe tener el formato mio@correo.com o mio@correo.com.co";
        } else {
            document.getElementById(msgCorreo).style.display = "none";
            if(pass === ""){
                document.getElementById(msgPass).style.display = "block";
                document.getElementById(msgPass).innerHTML = "Ingrese una contraseña";
            }else{
                if (pass.length > 16) {
                    document.getElementById(msgPass).style.display = "block";
                    document.getElementById(msgPass).innerHTML = "Máximo 16 caracteres";
                } else {
                    document.getElementById(msgPass).style.display = "none";
                    return true;
                }       
            }
        }
    }
    return false;
}

function cargaTablaMuni(mensaje){
    
    var losDatos = mensaje.split("/");
    
    var tabla = document.getElementById('tabla');
    var tbody = document.createElement('tbody');
    
    for(var i=0; i<(losDatos.length - 1); i++){
        
        var fila = document.createElement("tr");
        var Cnombre = document.createElement("td");
        var Copciones = document.createElement("td");
        var iconEditar = document.createElement("span");
        var iconEliminar = document.createElement("span"); 
        
        Cnombre.innerHTML = losDatos[i];
        
        iconEditar.setAttribute("id","iconEdit");
        iconEditar.setAttribute("class","icon-edit");
        iconEliminar.setAttribute("id","iconEliminar");
        iconEliminar.setAttribute("class","icon-trash-o");
        Copciones.appendChild(iconEditar);
        Copciones.appendChild(iconEliminar);
        Copciones.setAttribute("class","opciones");
        Cnombre.setAttribute("class","municipio");
        fila.appendChild(Cnombre);
        fila.appendChild(Copciones);
        tbody.appendChild(fila);
        tbody.setAttribute("id","contFilas");
        tabla.appendChild(tbody);
    }
    $("body").css({'cursor':'default'});
}

//FIN - funciones que permiten la interaccion del sitio

/*
 * INICIO - metodos que interactuan con la base de datos
 */

function login(op){
    
    if(op === 2){
        var correo = document.getElementById("correoL2").value;
        var pass = document.getElementById("passL2").value;

        if(verificarCorreoContraseña(correo, pass, 'msgEmergenteCorreoL2', 'msgEmergentePassL2')){
            iniciarSesion(correo, pass);
        }
    }else{
        if(op === 1){
            var correo = document.getElementById("correoL").value;
            var pass = document.getElementById("passL").value;

            if(verificarCorreoContraseña(correo, pass, 'msgEmergenteCorreoL', 'msgEmergentePassL')){
                iniciarSesion(correo, pass);
            }
        }
    }
}

function iniciarSesion(correo, pass){
    if (window.XMLHttpRequest) {  
    // Navegadores que siguen los estándares
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {  // Navegadores obsoletos
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == READY_STATE_COMPLETE && xhttp.status == OK) {
            var mensaje = xhttp.responseText;
            if(mensaje.indexOf('Verifique')>-1){
                $("#msgRespuesta").css({
                        'display':'block',
                        'background': '#F2DEDE',
                        'color': '#B94A48'
                    });
                document.getElementById('msgRespuesta').innerHTML = mensaje;
            }else{
                if(mensaje.indexOf('Administrador')>-1){
                    redirigir("", "admin/municipios.jsp");
                }else{
                    alert(mensaje);
                }
            }
            $("#msgRespuesta").fadeOut(6000);
            $("html, body").animate({scrollTop:"0px"});
        }
    }
    xhttp.open("POST", "back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "correo=" + (correo) + "&password=" + (pass) + "&option=" + ("login") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function registrarCuenta(tipoCuenta){
    var correo = document.getElementById("correoT").value;
    var pass = document.getElementById("passT").value;
    var verpass = document.getElementById('verpassT').value;
    
    var correoE = document.getElementById("correoE").value;
    var passE = document.getElementById("passE").value;
    var verpassE = document.getElementById('verpassE').value;
    var tipoEmpresa = document.getElementById("tipoEmpresa").value;
    var municipioLabora = document.getElementById("municipioLabora").value;
    
    if(tipoCuenta === "Turista"){
        if(verificarCorreoContraseña(correo, pass, 'msgEmergenteCorreoT', 'msgEmergentePassT')){
        if(verpass === ""){
            document.getElementById('msgEmergentePassT').style.display = "none";
            document.getElementById('msgEmergenteVerPassT').style.display = "block";
            document.getElementById('msgEmergenteVerPassT').innerHTML = "Ingrese una contraseña";
        }else{
            if(pass === verpass){
                document.getElementById('msgEmergenteVerPassT').style.display = "none";
                
                if (window.XMLHttpRequest) {  
                // Navegadores que siguen los estándares
                    xhttp = new XMLHttpRequest();
                }
                else if (window.ActiveXObject) {  // Navegadores obsoletos
                    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == READY_STATE_COMPLETE && xhttp.status == OK) {
                        var mensaje = xhttp.responseText;
                        if(mensaje.indexOf('exito')>-1){
                            $("#msgRespuesta").css({
                                'display':'block',
                                'background':'#DFF0D8',
                                'color': '#46884B'
                            });
                            document.getElementById('msgRespuesta').innerHTML = "El registro de la cuenta ha sido exitoso";
                            $(".campo").val("");
                            $("#form-registroT").css({'display':'none'});
                        }else{
                            $("#msgRespuesta").css({
                                    'display':'block',
                                    'background': '#F2DEDE',
                                    'color': '#B94A48'
                                });
                            if(mensaje.indexOf('Duplicate')>-1){
                                document.getElementById('msgRespuesta').innerHTML = "El correo ingresado ya existe";
                            }else{
                                document.getElementById('msgRespuesta').innerHTML = mensaje;
                            }
                        }
                        $("#msgRespuesta").fadeOut(6000);
                        $("html, body").animate({scrollTop:"0px"});
                    }
                }
                xhttp.open("POST", "back/procesar.jsp", true);
                xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var queryString = "correo=" + (correo) + "&password=" + (pass) + "&tipoCuenta=" + (tipoCuenta) + "&option=" + ("registrarCuenta") + "&nocache=" + Math.random();
                xhttp.send(queryString);
            }else{
                document.getElementById('msgEmergenteVerPassT').style.display = "block";
                document.getElementById('msgEmergenteVerPassT').innerHTML = "La contraseña es diferente";
            }
        }
    }
    }else{
        if(verificarCorreoContraseña(correoE, passE, 'msgEmergenteCorreoE', 'msgEmergentePassE')){
            if(verpassE === ""){
                document.getElementById('msgEmergentePassE').style.display = "none";
                document.getElementById('msgEmergenteVerPassE').style.display = "block";
                document.getElementById('msgEmergenteVerPassE').innerHTML = "Ingrese una contraseña";
            }else{
                if(passE === verpassE){
                    document.getElementById('msgEmergenteVerPassE').style.display = "none";
                    if(tipoEmpresa.indexOf('Tipo de empresa')>-1){
                        document.getElementById('msgEmergenteSelTipoEmp').style.display = "block";
                        document.getElementById('msgEmergenteSelTipoEmp').innerHTML = "Seleccione el tipo de empresa";
                    }else{
                        document.getElementById('msgEmergenteSelTipoEmp').style.display = "none";
                        if(municipioLabora.indexOf("Municipio donde ofrece sus servicios")>-1){
                            document.getElementById('msgEmergenteSelMun').style.display = "block";
                            document.getElementById('msgEmergenteSelMun').innerHTML = "Seleccione un municipio";
                        }else{
                            document.getElementById('msgEmergenteSelMun').style.display = "none";
                            alert("listo para enviar datos...");
                        }
                    }
                }else{
                    document.getElementById('msgEmergenteVerPassE').style.display = "block";
                    document.getElementById('msgEmergenteVerPassE').innerHTML = "La contraseña es diferente";
                }
            }

        }
    }
}

function registrarMunicipio(){
    
    var municipio = document.getElementById('municipio').value;
    
    if(municipio === ""){
        document.getElementById("msgEmergenteMunicipio").style.display = "block";
        document.getElementById("msgEmergenteMunicipio").innerHTML = "Ingrese un municipio";
    }else{
        document.getElementById("msgEmergenteMunicipio").style.display = "none";
        if (municipio.length > 22) {
            document.getElementById("msgEmergenteMunicipio").style.display = "block";
            document.getElementById("msgEmergenteMunicipio").innerHTML = "Máximo 22 caracteres";
        } else {
            document.getElementById("msgEmergenteMunicipio").style.display = "none";
            $("body").css({'cursor':'wait'});
            
            if (window.XMLHttpRequest) {  
            // Navegadores que siguen los estándares
                xhttp = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {  // Navegadores obsoletos
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == READY_STATE_COMPLETE && xhttp.status == OK) {
                    var mensaje = xhttp.responseText;
                    if(mensaje.indexOf('exito')>-1){
                        $("#municipio").val("");
                        
                        $("#contFilas").remove();
                        cargarTablaMunicipios();
                    }else{
                        $("#msgRespuesta").css({
                                'display':'block',
                                'background': '#F2DEDE',
                                'color': '#B94A48'
                            });
                        if(mensaje.indexOf('Duplicate')>-1){
                            document.getElementById('msgRespuesta').innerHTML = "El municipio ya existe";
                        }else{
                            document.getElementById('msgRespuesta').innerHTML = mensaje;
                        }
                    }
                    $("body").css({'cursor':'default'});
                    $("#msgRespuesta").fadeOut(6000);
                    $("html, body").animate({scrollTop:"0px"});
                }
            }
            xhttp.open("POST", "../back/procesar.jsp", true);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var queryString = "municipio=" + (municipio) + "&option=" + ("registrarMunicipio") + "&nocache=" + Math.random();
            xhttp.send(queryString);
        }
    }
}

function modificarMunicipio(){
    
    var municipioVer = document.getElementById('muni').value;
    var municipioMod = document.getElementById('municipio').value;
    
    if(municipioMod === ""){
        document.getElementById("msgEmergenteMunicipio").style.display = "block";
        document.getElementById("msgEmergenteMunicipio").innerHTML = "Ingrese un municipio";
    }else{
        document.getElementById("msgEmergenteMunicipio").style.display = "none";
        if (municipioMod.length > 22) {
            document.getElementById("msgEmergenteMunicipio").style.display = "block";
            document.getElementById("msgEmergenteMunicipio").innerHTML = "Máximo 22 caracteres";
        } else {
            document.getElementById("msgEmergenteMunicipio").style.display = "none";
            $("body").css({'cursor':'wait'});
            if (window.XMLHttpRequest) {  
            // Navegadores que siguen los estándares
                xhttp = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {  // Navegadores obsoletos
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == READY_STATE_COMPLETE && xhttp.status == OK) {
                    var mensaje = xhttp.responseText;
                    if(mensaje.indexOf('exito')>-1){
                        $("#municipio").val("");
                        $("#btn-crearMunicipio").css({'display':'block'});
                        $("#btn-modificarMunicipio").css({'display':'none'});
                        $("#municipioVer").css({'display':'none'});
                        $("#contFilas").remove();
                        cargarTablaMunicipios();
                    }else{
                        $("#msgRespuesta").css({
                                'display':'block',
                                'background': '#F2DEDE',
                                'color': '#B94A48'
                            });
                        if(mensaje.indexOf('Duplicate')>-1){
                            document.getElementById('msgRespuesta').innerHTML = "El municipio ya existe";
                        }else{
                            document.getElementById('msgRespuesta').innerHTML = mensaje;
                        }
                    }
                    $("body").css({'cursor':'default'});
                    $("#msgRespuesta").fadeOut(6000);
                    $("html, body").animate({scrollTop:"0px"});
                }
            }
            xhttp.open("POST", "../back/procesar.jsp", true);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var queryString = "municipioV=" + (municipioVer) + "&municipioM=" + (municipioMod) + "&option=" + ("modificarMunicipio") + "&nocache=" + Math.random();
            xhttp.send(queryString);
        }
    }
}

function cargarTablaMunicipios(){
    $("body").css({'cursor':'wait'});
    if (window.XMLHttpRequest) {  
    // Navegadores que siguen los estándares
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {  // Navegadores obsoletos
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == READY_STATE_COMPLETE && xhttp.status == OK) {
            var mensaje = xhttp.responseText;
            cargaTablaMuni(mensaje);
            escucharAccionOpciones();
            document.getElementById("municipioVer").disabled = true;
        }
    }
    xhttp.open("POST", "../back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "option=" + ("consultarMunicipios") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function escucharAccionOpciones(){
    $("body").on("click", "#contFilas #iconEdit", function(event){
        event.preventDefault();
        var fila = $(this).parent().parent();
        var nombre = fila.children("td:eq(0)").text();
        $("#municipioVer").val(nombre);
        $("#muni").val(nombre);
        $("#btn-crearMunicipio").css({'display':'none'});
        $("#btn-modificarMunicipio").css({'display':'block'});
        $("#municipioVer").css({'display':'block'});
    });
    $("body").on("click", "#contFilas #iconEliminar", function(event){
        event.preventDefault();
        var fila = $(this).parent().parent();
        var nombre = fila.children("td:eq(0)").text();
        $("body").css({'cursor':'wait'});
        
        if (window.XMLHttpRequest) {  
            // Navegadores que siguen los estándares
                xhttp = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {  // Navegadores obsoletos
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == READY_STATE_COMPLETE && xhttp.status == OK) {
                    var mensaje = xhttp.responseText;
                    if(mensaje.indexOf('exito')>-1){
                        $("body").css({'cursor':'default'});
                        $("#contFilas").remove();
                        cargarTablaMunicipios();
                    }
                }
            }
            xhttp.open("POST", "../back/procesar.jsp", true);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var queryString = "municipio=" + (nombre) + "&option=" + ("eliminarMunicipio") + "&nocache=" + Math.random();
            xhttp.send(queryString);
        
    });
}
//FIN - metodos que interactuan con la base de datos