<%-- 
    Document   : sitios_turisticos
    Created on : 7/06/2017, 07:21:59 AM
    Author     : Ruben D
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <title>Viajando al Norte con Santander</title>
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        <script type="text/javascript" src="js/modernizr-custom.js"></script>
        <script type="text/javascript" src="js/scripts.js"></script>
        <script type="text/javascript" src="js/jquery-1.10.2.js"></script>
    </head>
    <body>
        <%
            HttpSession sesion = request.getSession();
            String correoL = "";
            String ulLogueado = "";
            String ulNoLogueado = "";

            if (sesion.getAttribute("correoLogueado") != null) {
                correoL = (String) sesion.getAttribute("correoLogueado");
                ulNoLogueado = "ocultar";
            } else {
                ulLogueado = "ocultar";
            }
        %>
        <header class="front colTransFuerte">
            <div class="centrar logo">
                <img id="logo" class="img-logo" src="img/logo.png">
            </div>
            <div class="cuenta <%=ulNoLogueado%>">
                <ul >
                    <li id="mRegistrar" class="subM">Registrarme</li>
                    <li id="m-login" class="subM">Iniciar Sesión</li>
                    <li id="iconMenu1" class="icon-menu"><span class="icon-bars"></span></li>
                </ul>
            </div>
            <div class="cuenta <%=ulLogueado%>">
                <ul>
                    <li id="m-logout" class="subM">Cerrar Sesión</li>
                    <li id="iconMenu2" class="icon-menu"><span class="icon-bars"></span></li>
                </ul>
            </div>
        </header>
        <div class="paddingTop1">
            <div id="msgRespuesta" class="msgRespuesta"></div>
            <div id="sub-menu1" class="menu-desplegable">
                <ul>
                    <li id="smRegistrar">Registrarme</li>
                    <li id="subM-Login">Iniciar Sesión</li>
                </ul>
            </div>
            <div id="sub-menu2" class="menu-desplegable">
                <ul>
                    <li id="smLogout">Cerrar Sesión</li>
                </ul>
            </div>
            <div id="login" class="login">
                <div class="contenedor-login centrar">
                    <p id="msgEmergenteCorreoL" class="msgEmergente"></p>
                    <div class="input">
                        <input id="correoL" type="text" placeholder="Usuario">
                    </div>
                    <p id="msgEmergentePassL" class="msgEmergente"></p>
                    <div class="input">
                        <input id="passL" type="password" placeholder="Contraseña">
                    </div>
                    <div class="input">
                        <input id="btn-login" class="btn-primario" type="button" value="Iniciar Sesión">
                    </div>
                </div>
            </div>
            <div id="login2" class="login cont-login">
                <div class="contenedor-login centrar">
                    <p id="msgEmergenteCorreoL2" class="msgEmergente"></p>
                    <div class="input">
                        <input id="correoL2" type="text" placeholder="Usuario">
                    </div>
                    <p id="msgEmergentePassL2" class="msgEmergente"></p>
                    <div class="input">
                        <input id="passL2" type="password" placeholder="Contraseña">
                    </div>
                    <div class="input">
                        <input id="btn-login2" class="btn-primario" type="button" value="Iniciar Sesión">
                    </div>
                </div>
            </div>
            
            <div class="container">
                <div class="menu-busquedas">
                    <div id="menu-lateral" class="colTransFuerte">
                        <ul>
                            <li><span class="icon-home"></span><label class="smAccion">Hospedaje</label></li>
                            <li><span class="icon-food"></span><label class="smAccion">Restaurantes, bares</label></li>
                            <li><span class="icon-child"></span><label class="smAccion">Ocio y diversion</label></li>
                            <li><span class="icon-bus"></span><label class="smAccion">Transporte</label></li>
                            <li><span class="icon-futbol-o"></span><label class="smAccion">Deporte</label></li>
                            <li><span class="icon-squirrel"></span><label class="smAccion">Naturaleza</label></li>
                            <li><span class="icon-institution"></span><label class="smAccion">Cultura</label></li>
                            <li><span class="icon-calendar"></span><label class="smAccion">Espectaculo y negocio</label></li>
                            <li><span class="icon-cross"></span><label class="smAccion">Espacios religiosos</label></li>
                            <li><span class="icon-ambulance"></span><label class="smAccion">Servicios asistenciales</label></li>
                        </ul>
                    </div>
                </div>
                <div id="contenedorST" class="contenedor-busquedas">
                    <h1>Sitios Turisticos: Ciudad</h1>
                    <div id="tarjetaST" class="tarjeta margen-top">
                        <div id="foto" class="foto">
                            <img src="img/imagenNoDisponible.png">
                        </div>
                        <div id="descTarjeta" class="descTarjeta">
                            <h3 class="tituloDesc">El patio de mi casa</h3>
                            <div class="descripcionDesc">Descripcion</div>
                        </div>
                    </div>
                    <div id="tarjetaST" class="tarjeta margen-top">
                        <div id="foto" class="foto">
                            <img src="img/imagenNoDisponible.png">
                        </div>
                        <div id="descTarjeta" class="descTarjeta">
                            <h3 class="tituloDesc">El patio de mi casa</h3>
                            <div class="descripcionDesc">Descripcion</div>
                        </div>
                    </div>
                    <div id="tarjetaST" class="tarjeta margen-top">
                        <div id="foto" class="foto">
                            <img src="img/imagenNoDisponible.png">
                        </div>
                        <div id="descTarjeta" class="descTarjeta">
                            <h3 class="tituloDesc">El patio de mi casa</h3>
                            <div class="descripcionDesc">Descripcion</div>
                        </div>
                    </div>
                    <div id="tarjetaST" class="tarjeta margen-top">
                        <div id="foto" class="foto">
                            <img src="img/imagenNoDisponible.png">
                        </div>
                        <div id="descTarjeta" class="descTarjeta">
                            <h3 class="tituloDesc">El patio de mi casa</h3>
                            <div class="descripcionDesc">Descripcion</div>
                        </div>
                    </div>
                    <div id="tarjetaST" class="tarjeta margen-top">
                        <div id="foto" class="foto">
                            <img src="img/imagenNoDisponible.png">
                        </div>
                        <div id="descTarjeta" class="descTarjeta">
                            <h3 class="tituloDesc">El patio de mi casa</h3>
                            <div class="descripcionDesc">Descripcion</div>
                        </div>
                    </div>
                    <div id="tarjetaST" class="tarjeta margen-top">
                        <div id="foto" class="foto">
                            <img src="img/imagenNoDisponible.png">
                        </div>
                        <div id="descTarjeta" class="descTarjeta">
                            <h3 class="tituloDesc">El patio de mi casa</h3>
                            <div class="descripcionDesc">Descripcion</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
