<%-- 
    Document   : sitio_turistico
    Created on : 4/06/2017, 02:16:00 PM
    Author     : Ruben D
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <title>Viajando al Norte con Santander</title>
        <link rel="stylesheet" href="../css/normalize.css">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        <script type="text/javascript" src="../js/modernizr-custom.js"></script>
        <script type="text/javascript" src="../js/scripts.js"></script>
        <script type="text/javascript" src="../js/jquery-1.10.2.js"></script>
    </head>
    <body>
        <%
            HttpSession sesion = request.getSession();
            String correoL ="";

            if(sesion.getAttribute("correoLogueado") != null){
                correoL = (String) sesion.getAttribute("correoLogueado");
            }else{
                response.sendRedirect("../inicio.jsp");
            }
        %>
        <header class="front colTransFuerte">
            <div class="centrar logo">
                <img id="logo" class="img-logo" src="../img/logo.png">
            </div>
            <div class="cuenta">
                <ul>
                    <li id="m-logout" class="subM">Cerrar Sesión</li>
                    <li id="iconMenu" class="icon-menu"><span class="icon-bars"></span></li>
                </ul>
            </div>
        </header>
        <div class="paddingTop1">
            <div class="contenedor-acciones ">
                <div id="acciones" class="acciones colTransFuerte">
                    <ul>
                        <li id="m-municipio">Municipios</li>
                        <li id="m-sitioTuristico" class="itemMenu-seleccionado">Sitios Turisticos</li>
                        <li id="m-cuentasSistema">Cuentas del sistema</li>
                        <li id="m-miCuenta">Mi cuenta</li>
                    </ul>
                </div>
                <div id="mostrarMenu" class="mostrarMenu"><span class="icon-caret-right"><br></span><span class="icon-caret-left"></span></div>
            </div>
            <div>
                <div id="sub-menu" class="menu-desplegable">
                    <ul>
                        <li id="smLogout">Cerrar Sesión</li>
                    </ul>
                </div>
                <div id="msgRespuesta" class="msgRespuesta"></div>
                <div class="contenedor">
                    <div class="muniPrincippal">
                        <div>
                            <div>
                                <h1>Sitios turisticos</h1>
                            </div>
                            <div>
                                <legend>Municipio:</legend>
                            </div>
                            <div class="input margenInferior">
                                <select id="tipoEmpresa" name="tipoEmpresa">
                                    <option>Seleccione un municipio</option>
                                </select>
                            </div>
                            <div class="inputBtn centrar margenInferior">
                                <input id="btn-crearMunicipio" class="btn-primario" type="button" value="Buscar">
                            </div>
                        </div>
                        <div class="margen-top">
                            <div class="contenedor-tabla">
                                <table id="tabla">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Municipio</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="muniOpcion">
                        <div>
                            <div>
                                <legend>Sitio turistico</legend>
                            </div>
                            <div  class="input">
                                <input id="muni" class="ocultar" type="text">
                                <input id="municipioVer" class="ocultar" type="text" placeholder="Municipio">
                            </div>
                            <p id="msgEmergenteMunicipio" class="msgEmergente"></p>
                            <div  class="input">
                                <input id="municipio" type="text" placeholder="Municipio">
                            </div>
                            <div  class="inputBtn centrar">
                                <input id="btn-crearMunicipio" class="btn-primario" type="button" value="Crear">
                                <input id="btn-modificarMunicipio" class="btn-primario ocultar" type="button" value="Modificar">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
