<%-- 
    Document   : mi_cuenta
    Created on : 4/06/2017, 10:27:34 AM
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
                        <li id="m-sitioTuristico">Sitios Turisticos</li>
                        <li id="m-cuentasSistema">Cuentas del sistema</li>
                        <li id="m-miCuenta" class="itemMenu-seleccionado">Mi cuenta</li>
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
                            <h1>Mi cuenta</h1>
                        </div>
                        <p id="msgEmergenteCorreo" class="msgEmergente"></p>
                        <div  class="input">
                            <input id="correoVer" type="text" class="ocultar" value=<%='"'+correoL+'"'%>>
                            <input id="correo" type="text" placeholder="Correo" value=<%='"'+correoL+'"'%>>
                        </div>
                        <p id="msgEmergenteNewPass" class="msgEmergente"></p>
                        <div  class="input">
                            <input id="newPass" class="campo" type="password" placeholder="Nueva Contraseña">
                        </div>
                        <p id="msgEmergenteVerPass" class="msgEmergente"></p>
                        <div  class="input">
                            <input id="verPass" class="campo" type="password" placeholder="Verificar Contraseña">
                        </div>
                        <div  class="inputBtn centrar">
                            <input id="btn-guardarCambios" class="btn-primario" type="button" value="Guardar cambios">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
