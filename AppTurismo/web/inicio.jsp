<%-- 
    Document   : index
    Created on : 2/05/2017, 08:14:27 PM
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
        <header>
            <div class="centrar logo">
                <img id="logo" class="img-logo" src="img/logo.png">
            </div>
            <div class="cuenta">
                <ul>
                    <li id="mRegistrar" class="subM">Registrarme</li>
                    <li id="m-login" class="subM">Iniciar Sesión</li>
                    <li id="iconMenu" class="icon-menu"><span class="icon-bars"></span></li>
                </ul>
            </div>
        </header>
        <div>
            <div id="msgRespuesta" class="msgRespuesta margen-top2"></div>
            <div id="login2" class="login">
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
            <div id="sub-menu" class="sub-menu">
                <ul>
                    <li id="smRegistrar">Registrarme</li>
                    <li id="subM-Login">Iniciar Sesión</li>
                </ul>
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
            </div>
            <div class="centrar contBusqueda">
                <center>
                    <div class="busqueda">
                        <div class="titulo">
                            <center><h1>Seleccione<br>el municipio de interés</h1></center>
                        </div>
                        <div class="select">
                            <select name="municipios">
                                <option>Seleccione un municipio</option>
                            </select>
                        </div>
                        <div class="input2 margen-top">
                            <input class="btn-secundario" type="button" value="Buscar sitios  turisticos">
                        </div>
                    </div>
                </center>
            </div>
            <div class="img-slider">
                <img src="img/Travel.jpeg">
            </div>
        </div>
    </body>
</html>
