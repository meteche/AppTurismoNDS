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
    var cuentasSistema = window.location.pathname.indexOf("admin/cuentas_sistema.jsp");
    var sitioTuristico = window.location.pathname.indexOf("admin/sitio_turistico.jsp");
    var sitiosTuristicos = window.location.pathname.indexOf("sitios_turisticos.jsp");
    var servicios = window.location.pathname.indexOf("empresa/servicios.jsp");
    var miCuentaEmpresa = window.location.pathname.indexOf("empresa/mi_cuenta.jsp");
    
    if(inicio >= 0){
        cargaSelectorMunicipio("municipios");
        cargaScriptsBasicos();
        cargarScriptsInicio();
    }else{
        if(registrarCuenta >= 0){
            cargaScriptsBasicos();
            cargaScriptsRegistrarCuenta();
            cargaSelectorMunicipio("municipioLabora");
        }else{
            if(municipios >= 0){
                cargaScriptsBasicosLogueado();
                cargaScriptsMunicipios();
                cargarTablaMunicipios();
            }else{
                if(miCuenta >= 0){
                    cargaScriptsBasicosLogueado();
                    cargaScriptsMiCuenta();
                }else{
                    if(cuentasSistema >= 0){
                        cargaScriptsBasicosLogueado();
                        cargaTablaCuentas();
                    }else{
                        if(sitioTuristico >= 0){
                            cargaScriptsBasicosLogueado();
                            cargarScriptsST();
                            cargarSelectores();
                        }else{
                            if(sitiosTuristicos >= 0){
                                cargarScriptsSitiosTuristicos();
                                mostrarSitiosTuristicos();
                            }else{
                                if(servicios >= 0){
                                    cargaScriptsBasicosEmpresaLogueada();
                                    cargarScriptsServicios();
                                    cargarTablaServicios();
                                }else{
                                   if(miCuentaEmpresa >= 0){
                                        cargaScriptsBasicosEmpresaLogueada();
                                        cargarScriptsEmpresa();
                                    } 
                                }
                            }
                        }
                    }
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

function cargarScriptsInicio(){
    var btnBuscar = document.getElementById('btn-buscar');
    btnBuscar.onclick = function(){busquedaPrincipalSitios();};
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
    
    var btnMCuentasSistema = document.getElementById('m-cuentasSistema');
    btnMCuentasSistema.onclick = function(){redirigir("", "cuentas_sistema.jsp");};
    
    var btnMMiCuenta = document.getElementById('m-miCuenta');
    btnMMiCuenta.onclick = function(){redirigir("", "mi_cuenta.jsp");};
    
    var btnMSitioTuristico = document.getElementById('m-sitioTuristico');
    btnMSitioTuristico.onclick = function(){redirigir("", "sitio_turistico.jsp");};
}

function cargaScriptsBasicosEmpresaLogueada(){
    
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
    
    var btnMMiCuenta = document.getElementById('m-miCuenta');
    btnMMiCuenta.onclick = function(){redirigir("", "mi_cuenta.jsp");};
    
    var btnMServicios = document.getElementById('m-servicios');
    btnMServicios.onclick = function(){redirigir("", "servicios.jsp");};
}

function cargaScriptsMunicipios(){
    
    var btnCrearMunicipio = document.getElementById('btn-crearMunicipio');
    btnCrearMunicipio.onclick = function(){registrarMunicipio();};
    
    var btnModificarMunicipio = document.getElementById('btn-modificarMunicipio');
    btnModificarMunicipio.onclick = function(){modificarMunicipio();};
}

function cargaScriptsMiCuenta(){
    
    var btnGuardarCambios = document.getElementById('btn-guardarCambios');
    btnGuardarCambios.onclick = function(){modificarCuenta();};
}

function cargarScriptsST(){
    validarDatosSubirImagen();
    respuestaSistema();
    
    var btnBuscarSTMunicipio = document.getElementById('btn-buscarST');
    btnBuscarSTMunicipio.onclick = function(){buscarPorMunicipio();};
    
    var btnCancelar = document.getElementById('btn-cancelar');
    btnCancelar.onclick = function(){redirigir("","sitio_turistico.jsp")};
}

function cargarScriptsSitiosTuristicos(){
    var btnInicio = document.getElementById('logo');
    btnInicio.onclick = function(){redirigir("", "index.jsp");};
    
    var btnMRegistrar = document.getElementById('mRegistrar');
    btnMRegistrar.onclick = function(){redirigir("", "registrar-cuenta.jsp");};
    
    var btnMenu1 = document.getElementById('iconMenu1');
    btnMenu1.onclick = function(){desplegar("#sub-menu1");};
    
    var btnMenu2 = document.getElementById('iconMenu2');
    btnMenu2.onclick = function(){desplegar("#sub-menu2");};
    
    var iconLogout = document.getElementById('smLogout');
    iconLogout.onclick = function(){exit("cerrarSesion", "inicio.jsp");};
    
    var btnSMRegistrar = document.getElementById('smRegistrar');
    btnSMRegistrar.onclick = function(){redirigir("", "registrar-cuenta.jsp");};
    
    var btnLogout = document.getElementById('m-logout');
    btnLogout.onclick = function(){exit("cerrarSesion", "index.jsp");};
    
    var btnSMLogin = document.getElementById('subM-Login');
    btnSMLogin.onclick = function(){desplegar('#login');};
    
    var btnMLogin = document.getElementById('m-login');
    btnMLogin.onclick = function(){desplegar('#login2');};
    
    var btnLogin2 = document.getElementById('btn-login2');
    btnLogin2.onclick = function(){login(2);};
    
    var btnLogin = document.getElementById('btn-login');
    btnLogin.onclick = function(){login(1);};
    
    var menuHospedaje = document.getElementById('mHospejade');
    menuHospedaje.onclick = function(){buscarEmpresas($("#txtHospedaje").text());};
    
    var menuRestaurantes = document.getElementById('mRestaurantes');
    menuRestaurantes.onclick = function(){buscarEmpresas($("#txtRestaurantes").text());};
    
    var menuOcio = document.getElementById('mOcio');
    menuOcio.onclick = function(){buscarEmpresas($("#txtOcio").text());};
    
    var menuTransporte = document.getElementById('mTransporte');
    menuTransporte.onclick = function(){buscarEmpresas($("#txtTransporte").text());};
    
    var menuDeporte = document.getElementById('mDeporte');
    menuDeporte.onclick = function(){buscarEmpresas($("#txtDeporte").text());};
    
    var menuEspectaculo = document.getElementById('mEspectaculo');
    menuEspectaculo.onclick = function(){buscarEmpresas($("#txtEspectaculo").text());};
    
    var menuAsistencia = document.getElementById('mAsistencia');
    menuAsistencia.onclick = function(){buscarEmpresas($("#txtAsistencia").text());};
    
    //ajustarAltoDiv();
}

function cargarScriptsServicios(){
    respuestaSistema();
    
    var btnCrearServicio = document.getElementById('btn-crearServicio');
    btnCrearServicio.onclick = function(){registrarServicio();};
    
    var btnModificarServicio = document.getElementById('btn-modificarServicio');
    btnModificarServicio.onclick = function(){registrarServicio()};
    
    var btnCancelar = document.getElementById('btn-cancelar');
    btnCancelar.onclick = function(){redirigir("","servicios.jsp")};
}

function cargarScriptsEmpresa(){
    cargaSelectorMunicipio2("selMuniSitioTuristico");
    
    var btnGuardarCambios = document.getElementById('btn-guardarCambios');
    btnGuardarCambios.onclick = function(){actualizarInfoEmpresa();};
    
    var btnModContraseña = document.getElementById('btn-guardarCambiosAcceso');
    btnModContraseña.onclick = function(){modificarCuenta();};
}

//FIN - carga scripts  del sitio

/*
 * INICIO - funciones que permiten la interaccion del sitio
 */

function desplegar(div){
    $(div).toggle();
}

function redirigir(opcion, pagina){
    if(opcion !== ""){
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

function exit(opcion, pagina){
    if(opcion !== ""){
        if (window.XMLHttpRequest) {  
        // Navegadores que siguen los estándares
            xhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {  // Navegadores obsoletos
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("POST", "back/procesar.jsp", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var queryString = "option=" + (opcion) + "&nocache=" + Math.random();
        xhttp.send(queryString);
        window.location = pagina;
    }
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
        if(losDatos[i].indexOf("1 campo no valido")<0){
            Copciones.appendChild(iconEditar);
            Copciones.appendChild(iconEliminar);
        }else{
            fila.setAttribute("class","ocultar");
        }
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

function cargaTablaCuent(mensaje){
    var losDatos = mensaje.split("/");
    
    var tabla = document.getElementById('tabla');
    var tbody = document.createElement('tbody');
    
    for(var i=0; i<(losDatos.length - 1); i++){
        
        var datos = losDatos[i].split("-");
        
        var fila = document.createElement("tr");
        var Ccuenta = document.createElement("td");
        var Cnombre = document.createElement("td");
        var Ctipocuenta = document.createElement("td");
        var Copciones = document.createElement("td");
        var iconEliminar = document.createElement("span"); 
        
        Ccuenta.innerHTML = datos[0];
        Cnombre.innerHTML = datos[1];
        Ctipocuenta.innerHTML = datos[2];
        
        if(datos[2]==="Administrador"){
            iconEliminar.setAttribute("id","iconEdit");
            iconEliminar.setAttribute("class","icon-edit");
        }else{
            iconEliminar.setAttribute("id","iconEliminar");
            iconEliminar.setAttribute("class","icon-trash-o");
        }
        Copciones.appendChild(iconEliminar);
        Copciones.setAttribute("class","opciones");
        fila.appendChild(Ccuenta);
        fila.appendChild(Cnombre);
        fila.appendChild(Ctipocuenta);
        fila.appendChild(Copciones);
        tbody.appendChild(fila);
        tbody.setAttribute("id","contFilas");
        tabla.appendChild(tbody);
    }
    $("body").css({'cursor':'default'});
}

function cargaTablaST(mensaje){
    var losDatos = mensaje.split("/");
    
    var tabla = document.getElementById('tabla');
    var tbody = document.createElement('tbody');
    
    for(var i=0; i<(losDatos.length - 1); i++){
        
        var datos = losDatos[i].split("-");
        
        var fila = document.createElement("tr");
        var Cnombre = document.createElement("td");
        var Cmunicipio = document.createElement("td");
        var Copciones = document.createElement("td");
        var iconEditar = document.createElement("span"); 
        var iconEliminar = document.createElement("span"); 
        
        Cnombre.innerHTML = datos[0];
        Cmunicipio.innerHTML = datos[1];
        
        iconEditar.setAttribute("id","iconEdit");
        iconEditar.setAttribute("class","icon-edit");
        iconEliminar.setAttribute("id","iconEliminar");
        iconEliminar.setAttribute("class","icon-trash-o");
        Copciones.appendChild(iconEditar);
        Copciones.appendChild(iconEliminar);
        Copciones.setAttribute("class","opciones");
        fila.appendChild(Cnombre);
        fila.appendChild(Cmunicipio);
        fila.appendChild(Copciones);
        if(datos[0].indexOf("no valido")>-1){
            fila.setAttribute("class","ocultar");
        }
        tbody.appendChild(fila);
        tbody.setAttribute("id","contFilas");
        tabla.appendChild(tbody);
    }
    $("body").css({'cursor':'default'});
}

function agregarMunicipiosSelectores(selectorid, mensaje){
    
    var municipios = mensaje.split("/");
    
    var sel = document.getElementById(selectorid);
    
    for(var i=0; i<(municipios.length - 1); i++){
        var opcion = document.createElement('option');
        opcion.innerHTML = municipios[i];
        if(municipios[i].indexOf("1 campo no valido")<0){
            sel.appendChild(opcion);
        }
    }
    $("body").css({'cursor':'default'});
}

function validarDatosSubirImagen(){
    $("#form-regST").submit(function() {
        if(document.getElementById('nombreST').value === ""){
            document.getElementById("msgEmergenteST").style.display = "block";
            document.getElementById("msgEmergenteST").innerHTML = "Ingrese el nombre del sitio turistico";
            return false;
        }else{
            document.getElementById("msgEmergenteST").style.display = "none";
            if(document.getElementById('selMuniSitioTuristico').value === "Seleccione un municipio"){
                document.getElementById("msgEmergenteSelMunST").style.display = "block";
                document.getElementById("msgEmergenteSelMunST").innerHTML = "Seleccione un municipio";
                return false;
            }else{
                document.getElementById("msgEmergenteSelMunST").style.display = "none";
                if(document.getElementById('txtDesc').value === ""){
                    document.getElementById("msgEmergenteDescST").style.display = "block";
                    document.getElementById("msgEmergenteDescST").innerHTML = "Ingrese una descripción";
                    return false;
                }else{
                    document.getElementById("msgEmergenteDescST").style.display = "none";
                    var nombreImg = document.getElementById('imagenST').files[0].name;
                    var nombre = nombreImg.split(".");
                    if(nombreImg !== ""){
                        if (/.(gif|jpeg|jpg|png)$/i.test(document.getElementById("imagenST").value)){
                            document.getElementById("msgEmergenteImgST").style.display = "none";
                            var fileSize = $('#imagenST')[0].files[0].size;
                            var sizeImg = fileSize / 1024;
                            if(sizeImg > 1024){
                                document.getElementById("msgEmergenteImgST").style.display = "block";
                                document.getElementById("msgEmergenteImgST").innerHTML = "La imagen no debe superar mas de 1MB de peso";
                                return false;
                            }else{
                                document.getElementById("msgEmergenteImgST").style.display = "none";
                                return true;
                            }
                        }else{
                            document.getElementById("msgEmergenteImgST").style.display = "block";
                            document.getElementById("msgEmergenteImgST").innerHTML = "Comprueba la extensión de tus imagenes, recuerda que los formatos aceptados son .gif, .jpeg, .jpg y .png";
                            return false;
                        }
                    }
                }
            }
        }
    });
}

function respuestaSistema(){
    if($("#respuestaSistema").text() === "ningun mensaje"){
        
    }else{
        $("#msgRespuesta").css({
                'display':'block',
                'background': '#F2DEDE',
                'color': '#B94A48'
            });
            document.getElementById("msgRespuesta").innerHTML = $("#respuestaSistema").text();
            $("#msgRespuesta").fadeOut(6000);
            $("html, body").animate({scrollTop:"0px"});
    }
}

function ajustarAltoDiv(){
    ajustarAltoDivTarjeta();
    ajustarAltoContenedorPrincipal();
}

function ajustarAltoDivTarjeta(){
    var anchoVentana = $(window).width();
    if(anchoVentana >= 750){
        var alto = $("#foto").height();
        $(".tarjeta").height(alto);
    }
}

function ajustarAltoContenedorPrincipal(){
    var anchoVentana = $(window).width();
    var altoVentana = $(window).height();
    if(anchoVentana > 1000){
        $("#menu-lateral").height(altoVentana-69);
        $("#contenedorST").height(altoVentana-122);
    }else{
        $("#menu-lateral").height(altoVentana);
        $("#contenedorST").height(altoVentana);
    }   
    $("#contenedorST").css({'overflow-y':'scroll'});
}

function cargaST(mensaje){
    
    var losDatos = mensaje.split("/");
    
    var contenedorTarjetas = document.getElementById('contenedorST');
    
    for(var i=0; i<(losDatos.length - 1); i++){
        
        var datos = losDatos[i].split("-");
        
        var tarjetaST = document.createElement('div');
        var foto = document.createElement('div');
        var descTarjeta = document.createElement('div');
        var imagen = document.createElement('img');
        var tituloDesc = document.createElement('h3');
        var descripcionDesc = document.createElement('div');
        
        imagen.setAttribute("src","imagenesBD/"+datos[3]);
        foto.appendChild(imagen);
        foto.setAttribute("id","foto");
        foto.setAttribute("class","foto");
        tituloDesc.setAttribute("class","tituloDesc");
        tituloDesc.innerHTML = datos[0];
        descripcionDesc.setAttribute("class","descripcionDesc");
        descripcionDesc.innerHTML = datos[2];
        descTarjeta.appendChild(tituloDesc);
        descTarjeta.appendChild(descripcionDesc);
        descTarjeta.setAttribute("id","descTarjeta");
        descTarjeta.setAttribute("class","descTarjeta");
        tarjetaST.appendChild(foto);
        tarjetaST.appendChild(descTarjeta);
        tarjetaST.setAttribute("id","tarjetaST");
        tarjetaST.setAttribute("class","tarjeta margen-top");
        
        contenedorTarjetas.appendChild(tarjetaST);
    }
    ajustarAltoDiv();
}

function cargaTablaServicios(mensaje){
    var losDatos = mensaje.split("/");
    
    var tabla = document.getElementById('tabla');
    var tbody = document.createElement('tbody');
    
    for(var i=0; i<(losDatos.length - 1); i++){
        
        var datos = losDatos[i].split("&");
        
        var fila = document.createElement("tr");
        var Cnombre = document.createElement("td");
        var Cprecio = document.createElement("td");
        var Copciones = document.createElement("td");
        var iconEditar = document.createElement("span"); 
        var iconEliminar = document.createElement("span"); 
        
        Cnombre.innerHTML = datos[1];
        Cprecio.innerHTML = datos[2];
        
        iconEditar.setAttribute("id","iconEdit");
        iconEditar.setAttribute("class","icon-edit");
        iconEliminar.setAttribute("id","iconEliminar");
        iconEliminar.setAttribute("class","icon-trash-o");
        Copciones.appendChild(iconEditar);
        Copciones.appendChild(iconEliminar);
        Copciones.setAttribute("class","opciones");
        fila.appendChild(Cnombre);
        fila.appendChild(Cprecio);
        fila.appendChild(Copciones);
        if(datos[1].indexOf("no valido")>-1){
            fila.setAttribute("class","ocultar");
        }
        tbody.appendChild(fila);
        tbody.setAttribute("id","contFilas");
    }
    tabla.appendChild(tbody);
}

function cargarServicios(mensaje, empresa, municipio){
    
    $("#contenedorST").remove();
    var contenedor = document.getElementById('container');
    var contenedorST = document.createElement('div');
    var tituloEmpresa = document.createElement('h1');
    var tituloMunicipio = document.createElement('em');
    contenedorST.setAttribute('id','contenedorST');
    contenedorST.setAttribute('class','contenedor-busquedas');
    tituloEmpresa.innerHTML = empresa+": ";
    tituloMunicipio.innerHTML = municipio;
    tituloMunicipio.setAttribute('id','tituloMS');
    tituloEmpresa.appendChild(tituloMunicipio);
    contenedorST.appendChild(tituloEmpresa);
    
    if(mensaje.indexOf('sinRespuesta')>-1){
        var tarjetaST = document.createElement('div');
        tarjetaST.innerHTML = "No exiten empresas relacionadas a <em>"+empresa+"</em> en este municipio.";
        tarjetaST.setAttribute("class","tarjeta margen-top centrarContenido");
        contenedorST.appendChild(tarjetaST);
        contenedor.appendChild(contenedorST);
    }else{
        var losDatos = mensaje.split("/");
        for(var i=0; i<(losDatos.length - 1); i++){

            var datos = losDatos[i].split("&");

            var tarjetaST = document.createElement('div');
            var foto = document.createElement('div');
            var descTarjeta = document.createElement('div');
            var descEmpresa = document.createElement('div');
            var tituloEmpresa = document.createElement('div');
            var precio = document.createElement('div');
            var irUrl = document.createElement('div');
            var imagen = document.createElement('img');
            var tituloDesc = document.createElement('h3');
            var descripcionDesc = document.createElement('div');

            imagen.setAttribute("src","imagenesBD/"+datos[0]);
            foto.appendChild(imagen);
            foto.setAttribute("id","foto");
            foto.setAttribute("class","foto");
            tituloDesc.setAttribute("class","tituloDesc");
            tituloDesc.innerHTML = datos[1];
            descripcionDesc.setAttribute("class","descripcionDesc");
            descripcionDesc.innerHTML = datos[2];
            descTarjeta.appendChild(tituloDesc);
            descTarjeta.appendChild(descripcionDesc);
            descTarjeta.setAttribute("id","descTarjeta");
            descTarjeta.setAttribute("class","descTarjeta");
            descEmpresa.setAttribute('class', 'centrar2');
            tituloEmpresa.innerHTML = datos[5];
            precio.innerHTML = datos[3];
            irUrl.innerHTML = datos[4];
            descEmpresa.appendChild(tituloEmpresa);
            descEmpresa.appendChild(precio);
            descEmpresa.appendChild(irUrl);
            tarjetaST.appendChild(foto);
            tarjetaST.appendChild(descTarjeta);
            tarjetaST.appendChild(descEmpresa);
            tarjetaST.setAttribute("id","tarjetaST");
            if(datos[1].indexOf("1 campo no valido")>-1){
                tarjetaST.setAttribute("class","tarjeta margen-top ocultar");
            }else{
                tarjetaST.setAttribute("class","tarjeta margen-top");
            }
            contenedorST.appendChild(tarjetaST);
        }
        contenedor.appendChild(contenedorST);
        ajustarAltoDiv();
    }
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
                    if(mensaje.indexOf('Empresa')>-1){
                        redirigir("", "empresa/servicios.jsp");
                    }else{
                        alert(mensaje);
                    }
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
                var queryString = "correo=" + (correo) + "&password=" + (pass) + "&tipoCuenta=" + (tipoCuenta) + "&tipoEmpresa=" + (tipoEmpresa) + "&option=" + ("registrarCuenta") + "&nocache=" + Math.random();
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
                                        $(".campo1").val("");
                                        $("#tipoEmpresa").val("");
                                        $("#municipioLabora").val("");
                                        $("#tipoEmpresa").val("Tipo de empresa");
                                        $("#municipioLabora").val("Municipio donde ofrece sus servicios");
                                        $("#form-registroE").css({'display':'none'});
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
                            var queryString = "correo=" + (correoE) + "&password=" + (passE) + "&tipoCuenta=" + (tipoCuenta) + "&tipoEmpresa=" + (tipoEmpresa) + "&option=" + ("registrarCuenta") + "&nocache=" + Math.random();
                            xhttp.send(queryString);
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

function cargaTablaCuentas(){
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
            cargaTablaCuent(mensaje);
            escucharAccionOpcionesTablaCuentas();
        }
    }
    xhttp.open("POST", "../back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "option=" + ("consultarCuentas") + "&nocache=" + Math.random();
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

function escucharAccionOpcionesTablaCuentas(){
    $("body").on("click", "#contFilas #iconEliminar", function(event){
        event.preventDefault();
        var fila = $(this).parent().parent();
        var correo = fila.children("td:eq(0)").text();
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
                        cargaTablaCuentas();
                    }
                }
            }
            xhttp.open("POST", "../back/procesar.jsp", true);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var queryString = "correo=" + (correo) + "&option=" + ("eliminarCuenta") + "&nocache=" + Math.random();
            xhttp.send(queryString);
        
    });
    $("body").on("click", "#contFilas #iconEdit", function(event){
        event.preventDefault();
        window.location = "mi_cuenta.jsp";
    });
}

function modificarCuenta(){
    
    var correoVer = document.getElementById("correoVer").value;
    var correo = document.getElementById("correo").value;
    var pass = document.getElementById("newPass").value;
    var passVer = document.getElementById("verPass").value;
       
    if(verificarCorreoContraseña(correo, pass, 'msgEmergenteCorreo', 'msgEmergenteNewPass')){
        if(passVer === ""){
            document.getElementById("msgEmergenteVerPass").style.display = "block";
            document.getElementById("msgEmergenteVerPass").innerHTML = "Ingrese una contraseña";
        }else{
            if(pass === passVer){
                document.getElementById("msgEmergenteVerPass").style.display = "none";
                
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
                            window.location = "mi_cuenta.jsp";
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
                        $("body").css({'cursor':'default'});
                        $("#msgRespuesta").fadeOut(6000);
                        $("html, body").animate({scrollTop:"0px"});
                    }
                }
                xhttp.open("POST", "../back/procesar.jsp", true);
                xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var queryString = "correoV=" + (correoVer) + "&correoM=" + (correo) + "&passM=" + (pass) + "&option=" + ("modificarCuenta") + "&nocache=" + Math.random();
                xhttp.send(queryString);
                
            }else{
                document.getElementById("msgEmergenteVerPass").innerHTML = "La contraseña es diferente";
            }
        }
    }
}

function cargarSelectores(){
    
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
            agregarMunicipiosSelectores("selMunicipio", mensaje);
            agregarMunicipiosSelectores("selMuniSitioTuristico", mensaje);
            cargarTablaSitiosTuristicos();
        }
    }
    xhttp.open("POST", "../back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "option=" + ("cargarSelectores") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function cargaSelectorMunicipio(IdSelector){
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
            agregarMunicipiosSelectores(IdSelector, mensaje);
        }
    }
    xhttp.open("POST", "back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "option=" + ("cargarSelectores") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function cargaSelectorMunicipio2(IdSelector){
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
            agregarMunicipiosSelectores(IdSelector, mensaje);
            cargarInformacionEmpresa();
        }
    }
    xhttp.open("POST", "../back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "option=" + ("cargarSelectores") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function cargarTablaSitiosTuristicos(){
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
            cargaTablaST(mensaje);
            escucharAccionOpcionesTablaST();
            $("body").css({'cursor':'default'});
        }
    }
    xhttp.open("POST", "../back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "option=" + ("consultarSitiosTuristicos") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function escucharAccionOpcionesTablaST(){
    $("body").on("click", "#contFilas #iconEdit", function(event){
        event.preventDefault();
        $("body").css({'cursor':'wait'});
        var fila = $(this).parent().parent();
        var nombreST = fila.children("td:eq(0)").text();
        var municipio = fila.children("td:eq(1)").text();
        $("#accion").val("mr");
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
                var datos = mensaje.split("-");
                $("#verNameST").val(datos[0]);
                $("#nombreST").val(datos[0]);
                $("#verMuniST").val(datos[1]);
                $("#selMuniSitioTuristico").val(datos[1]);
                $("#txtDesc").val(datos[2]);
                $("#nameST").val(nombreST);
                $("#nameST").css({'display':'block'});
                $("#imgCargada").css({'display':'block'});
                $("#imgCargada").val(datos[3]);
                $("#img").val(datos[3]);
                document.getElementById("nameST").disabled = true;
                document.getElementById("imgCargada").disabled = true;
                $("#btn-crearSitioTuristico").css({'display':'none'});
                $("#btn-modificarSitioTuristico").css({'display':'block'});
                $("#btn-cancelar").css({'display':'block'});
                $("body").css({'cursor':'default'});
            }
        }
        xhttp.open("POST", "../back/procesar.jsp", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var queryString = "nombreST=" + (nombreST) + "&municipio=" + (municipio) + "&option=" + ("consultarSTporID") + "&nocache=" + Math.random();
        xhttp.send(queryString);
    });
    $("body").on("click", "#contFilas #iconEliminar", function(event){
        event.preventDefault();
        $("body").css({'cursor':'wait'});
        var fila = $(this).parent().parent();
        var nombreST = fila.children("td:eq(0)").text();
        var municipio = fila.children("td:eq(1)").text();
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
                if(mensaje.indexOf("exito")>-1){
                    window.location = "sitio_turistico.jsp";
                }else{
                    $("#msgRespuesta").css({
                            'display':'block',
                            'background': '#F2DEDE',
                            'color': '#B94A48'
                        });
                    document.getElementById('msgRespuesta').innerHTML = mensaje;
                }
            }
        }
        xhttp.open("POST", "../back/procesar.jsp", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var queryString = "nombreST=" + (nombreST) + "&municipio=" + (municipio) + "&option=" + ("eliminarST") + "&nocache=" + Math.random();
        xhttp.send(queryString);
    });
}

function escucharAccionOpcionesTablaServicios(){
    $("body").on("click", "#contFilas #iconEdit", function(event){
        event.preventDefault();
        var fila = $(this).parent().parent();
        var nombre = fila.children("td:eq(0)").text();
        var correo = document.getElementById('correoEmpresa').value;
        
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
                var datos = mensaje.split("&");
                
                $("#nombreS").val(datos[1]);
                $("#nombreSVer").val(datos[1]);
                $("#precioS").val(datos[2]);
                $("#txtDesc").val(datos[3]);
                $("#urlS").val(datos[4]);
                $("#img").val(datos[5]);
                $("#imgCargada").val(datos[5]);
                $("#accion").val("mr");
                
                $("#btn-crearServicio").css({'display':'none'});
                $("#btn-modificarServicio").css({'display':'block'});
                $("#btn-cancelar").css({'display':'block'});
                $("#imgCargada").css({'display':'block'});
                $("body").css({'cursor':'default'});
            }
        }
        xhttp.open("POST", "../back/procesar.jsp", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var queryString = "correo=" + (correo) + "&nombre=" + (nombre) + "&option=" + ("consultarInfoServicio") + "&nocache=" + Math.random();
        xhttp.send(queryString);
    });
    $("body").on("click", "#contFilas #iconEliminar", function(event){
        event.preventDefault();
        var fila = $(this).parent().parent();
        var nombre = fila.children("td:eq(0)").text();
        var correo = document.getElementById('correoEmpresa').value;
        
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
                window.location = "servicios.jsp";
            }
        }
        xhttp.open("POST", "../back/procesar.jsp", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var queryString = "correo=" + (correo) + "&nombre=" + (nombre) + "&option=" + ("eliminarServicio") + "&nocache=" + Math.random();
        xhttp.send(queryString);
    });
}

function buscarPorMunicipio(){
    var municipio = document.getElementById('selMunicipio').value;
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
            $("#contFilas").remove();
            cargaTablaST(mensaje);
            escucharAccionOpcionesTablaST();
            $("body").css({'cursor':'default'});
        }
    }
    xhttp.open("POST", "../back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "municipio=" + (municipio) + "&option=" + ("consultarSitioTuristicoPorMunicipio") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function busquedaPrincipalSitios(){
    var selector = document.getElementById('municipios').value;
    if(selector === "Seleccione un municipio"){
        document.getElementById("msgEmergenteBusqueda").style.display = "block";
        document.getElementById("msgEmergenteBusqueda").innerHTML = "Seleccione un municipio";
    }else{
        document.getElementById("msgEmergenteBusqueda").style.display = "none";
        window.location = "sitios_turisticos.jsp?"+selector;
    }
} 

function mostrarSitiosTuristicos(){
    var url = window.location+"";
    var urldecode = decodeURIComponent(url);
    var municipio = urldecode.split("?");
    document.getElementById("tituloMS").innerHTML = municipio[1];
    
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
            //$("#contFilas").remove();
            if(mensaje.indexOf("sinRespuesta")>-1){
                var contenedor = document.getElementById('contenedorST');
                var vacio = document.createElement('div');
                vacio.innerHTML = "No exite ningun sitio turistico registrado";
                vacio.setAttribute("class","tarjeta margen-top centrarContenido");
                contenedor.appendChild(vacio);
            }else{
                cargaST(mensaje);
            }
            $("body").css({'cursor':'default'});
        }
    }
    xhttp.open("POST", "back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "municipio=" + (municipio[1]) + "&option=" + ("consultarSitioTuristicoPorMunicipio") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function registrarServicio(){
    
    $("#form-regS").submit(function() {      
        if(document.getElementById('nombreS').value === ""){
            document.getElementById("msgEmergenteS").style.display = "block";
            document.getElementById("msgEmergenteS").innerHTML = "Ingrese el nombre del servicio";
            return false;
        }else{
            document.getElementById("msgEmergenteS").style.display = "none";
            if(document.getElementById('precioS').value === ""){
                document.getElementById("msgEmergentePrecio").style.display = "block";
                document.getElementById("msgEmergentePrecio").innerHTML = "Ingrese un valor";
                return false;
            }else{
                document.getElementById("msgEmergentePrecio").style.display = "none";
                if(document.getElementById('txtDesc').value === ""){
                    document.getElementById("msgEmergenteDescS").style.display = "block";
                    document.getElementById("msgEmergenteDescS").innerHTML = "Ingrese un valor";
                    return false;
                }else{
                    document.getElementById("msgEmergenteDescS").style.display = "none";
                    if(document.getElementById('urlS').value === ""){
                        document.getElementById("msgEmergenteUrl").style.display = "block";
                        document.getElementById("msgEmergenteUrl").innerHTML = "Ingrese la url del sitio web donde se encuentra publicado el servicio";
                        return false;
                    }else{
                        document.getElementById("msgEmergenteUrl").style.display = "none";
                        return true;
                    }
                }
            }
        }
    });
}

function cargarInformacionEmpresa(){
    $("body").css({'cursor':'wait'});
    var correo = document.getElementById('correoVer').value;
    
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
            
            var datos = mensaje.split("&");
            
            if(datos[8].indexOf("vacio")<=-1){
                $("#nombreEmp").val(datos[8]);
            }
            if(datos[1].indexOf("vacio")<=-1){
                $("#selMuniSitioTuristico").val(datos[1]);
            }
            if(datos[2].indexOf("vacio")<=-1){
                $("#tipoDeEmpresa").val(datos[2]);
            }
            if(datos[3].indexOf("vacio")<=-1){
                $("#txtDesc").val(datos[6]);
            }
            if(datos[4].indexOf("vacio")<=-1){
                $("#telEmpresa").val(datos[3]);
            }
            if(datos[5].indexOf("vacio")<=-1){
                $("#dirEmpresa").val(datos[4]);
            }
            if(datos[6].indexOf("vacio")<=-1){
                $("#imgCargada").val(datos[5]);
                $("#img").val(datos[5]);
            }
            $("body").css({'cursor':'default'});
        }
    }
    xhttp.open("POST", "../back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "correo=" + (correo) + "&option=" + ("consultarEmpresa") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function actualizarInfoEmpresa(){
    
    $("#form-regS").submit(function() {
        if(document.getElementById('nombreEmp').value === ""){
            document.getElementById("msgEmergenteNombreE").style.display = "block";
            document.getElementById("msgEmergenteNombreE").innerHTML = "Ingrese el nombre de la empresa";
            return false;
        }else{
            document.getElementById("msgEmergenteNombreE").style.display = "none";
            if(document.getElementById('selMuniSitioTuristico').value === "Municipio donde se encuntra ubicado"){
                document.getElementById("msgEmergenteSelMunEmp").style.display = "block";
                document.getElementById("msgEmergenteSelMunEmp").innerHTML = "Selecciones el municipio donde va a ofertar sus servicios";
                return false;
            }else{
                document.getElementById("msgEmergenteSelMunEmp").style.display = "none";
                if(document.getElementById('tipoDeEmpresa').value === "Tipo de empresa"){
                    document.getElementById("msgEmergenteSelTipoE").style.display = "block";
                    document.getElementById("msgEmergenteSelTipoE").innerHTML = "Selecciones el tipo de empresa";
                    return false;
                }else{
                    document.getElementById("msgEmergenteSelTipoE").style.display = "none";
                    if(document.getElementById('txtDesc').value === ""){
                        document.getElementById("msgEmergenteDescEmpresa").style.display = "block";
                        document.getElementById("msgEmergenteDescEmpresa").innerHTML = "Ingrese una descripción";
                        return false;
                    }else{
                        document.getElementById("msgEmergenteDescEmpresa").style.display = "none";
                        if(document.getElementById('telEmpresa').value === ""){
                            document.getElementById("msgEmergenteTelEmp").style.display = "block";
                            document.getElementById("msgEmergenteTelEmp").innerHTML = "Ingrese un telefono";
                            return false;
                        }else{
                            document.getElementById("msgEmergenteTelEmp").style.display = "none";
                            if(document.getElementById('dirEmpresa').value === ""){
                                document.getElementById("msgEmergenteDir").style.display = "block";
                                document.getElementById("msgEmergenteDir").innerHTML = "Ingrese una direccion";
                                return false;
                            }else{
                                document.getElementById("msgEmergenteDir").style.display = "none";
                                return true;
                            }
                        }
                    }
                }
            }
        }
    });
}

function cargarTablaServicios(){
    var correo = document.getElementById('correoEmpresa').value;
    
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
            cargaTablaServicios(mensaje);
            escucharAccionOpcionesTablaServicios();
            $("body").css({'cursor':'default'});
        }
    }
    xhttp.open("POST", "../back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "correo=" + (correo) + "&option=" + ("consultarServicios") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

function buscarEmpresas(empresa){
    var municipio = (window.location.search).split("?");
    
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
            
            cargarServicios(mensaje, empresa, municipio[1]);
//            escucharAccionOpcionesTablaServicios();
            $("body").css({'cursor':'default'});
        }
    }
    xhttp.open("POST", "back/procesar.jsp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var queryString = "empresa=" + (empresa) + "&municipio=" + (municipio[1]) + "&option=" + ("consultarServiciosPorTipoEmpresaMunicipio") + "&nocache=" + Math.random();
    xhttp.send(queryString);
}

//FIN - metodos que interactuan con la base de datos