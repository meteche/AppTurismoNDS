<%-- 
    Document   : registrar-cuenta
    Created on : 19/05/2017, 03:43:54 PM
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
        <header class="front">
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
        <div class="front contenedorPrincipal">
            <div id="msgRespuesta" class="msgRespuesta"></div>
            <div id="sub-menu" class="menu-desplegable">
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
            <div class="cont-form-reg centrar">
                <div class="registrar centrar">
                    <div>
                        <img src="img/turista.png">
                    </div>
                    <div class="titulo">¿Eres turista?</div>
                    <div class="descripcion">
                        Registrandote podrás guardar los servicios turisticos que te interesen y nosotros te avisaremos cuando estos bajen de precio.
                    </div>
                    <div class="btn input">
                        <input id="btn-registrarmeT" class="btn-secundario" type="button" value="Resgitrarme">
                    </div>
                    <div id="form-registroT" class="form-registro">
                        <p id="msgEmergenteCorreoT" class="msgEmergente"></p>
                        <div class="input">
                            <input id="correoT" class="campo" type="text" placeholder="Correo">
                        </div>
                        <p id="msgEmergentePassT" class="msgEmergente"></p>
                        <div class="input">
                            <input id="passT" class="campo" type="password" placeholder="Contraseña">
                        </div>
                        <p id="msgEmergenteVerPassT" class="msgEmergente"></p>
                        <div class="input">
                            <input id="verpassT" class="campo" type="password" placeholder="Verificar contraseña">
                        </div>
                        <div class="input">
                            <input id="regCuentaT" class="btn-secundario" type="button" value="Registrar Cuenta">
                        </div>
                    </div>
                </div>

                <div class="registrar centrar">
                    <div>
                        <img src="img/empresa.png">
                    </div>
                    <div class="titulo">¿Eres empresa?</div>
                    <div class="descripcion">
                        Registrate y publica tus servicios. Es así de fácil. 
                    </div>
                    <div class="btn input">
                        <input id="btn-registrarmeE" class="btn-secundario" type="button" value="Resgitrarme">
                    </div>
                    <div id="form-registroE" class="form-registro">
                        <p id="msgEmergenteCorreoE" class="msgEmergente"></p>
                        <div class="input">
                            <input id="correoE" class="campo1" type="text" placeholder="Correo">
                        </div>
                        <p id="msgEmergentePassE" class="msgEmergente"></p>
                        <div class="input">
                            <input id="passE" class="campo1" type="password" placeholder="Contraseña">
                        </div>
                        <p id="msgEmergenteVerPassE" class="msgEmergente"></p>
                        <div class="input">
                            <input id="verpassE" class="campo1" type="password" placeholder="Verificar contraseña">
                        </div>
                        <p id="msgEmergenteSelTipoEmp" class="msgEmergente"></p>
                        <div class="input">
                            <select id="tipoEmpresa" name="tipoEmpresa">
                                <option>Tipo de empresa</option>
                                <option>Hospedaje</option>
                                <option>Restaurantes, bares</option>
                                <option>Ocio y diversion</option>
                                <option>Transporte</option>
                                <option>Deporte</option>
                                <option>Naturaleza</option>
                                <option>Cultura</option>
                                <option>Espectaculo y negocio</option>
                                <option>Espacios religiosos</option>
                                <option>Servicios asistenciales</option>
                            </select>
                        </div>
                        <p id="msgEmergenteSelMun" class="msgEmergente"></p>
                        <div class="input">
                            <select id="municipioLabora" name="municipioLabora">
                                <option>Municipio donde ofrece sus servicios</option>
                            </select>
                        </div>
                        <div class="input">
                            <input id="regCuentaE" class="btn-secundario" type="button" value="Registrar Cuenta">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="img-fondo">
            <img src="img/colombia.jpg">
        </div>
    </body>
</html>
