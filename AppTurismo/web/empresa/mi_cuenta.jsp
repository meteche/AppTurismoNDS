<%-- 
    Document   : mi_cuenta
    Created on : 11/06/2017, 08:25:06 AM
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
                        <li id="m-servicios">Servicios</li>
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
                        <form id="form-regS" method="POST" action="../back/actualizar.jsp" enctype="multipart/form-data">
                            <div>
                                <h1>Informacion de la empresa</h1>
                            </div>
                            <div  class="input">
                                <input id="correoV" name="correoV" class="campo ocultar" type="text" value="<%=correoL%>">
                            </div>
                            <p id="msgEmergenteNombreE" class="msgEmergente"></p>
                            <div  class="input">
                                <input id="nombreEmp" name="nombreEmp" class="campo" type="text" placeholder="Nombre de la empresa">
                            </div>
                            <p id="msgEmergenteSelMunEmp" class="msgEmergente"></p>
                            <div class="input">
                                <select id="selMuniSitioTuristico" name="selMuniSitioTuristico">
                                    <option>Municipio donde se encuntra ubicado</option>
                                </select>
                            </div>
                            <p id="msgEmergenteSelTipoE" class="msgEmergente"></p>
                            <div  class="input">
                                <select id="tipoDeEmpresa" name="tipoDeEmpresa">
                                    <option>Tipo de empresa</option>
                                    <option>Hospedaje</option>
                                    <option>Restaurantes, bares</option>
                                    <option>Ocio y diversion</option>
                                    <option>Transporte</option>
                                    <option>Deporte</option>
                                    <option>Espectaculo y negocio</option>
                                    <option>Servicios asistenciales</option>
                                </select>
                            </div>
                            <p id="msgEmergenteDescEmpresa" class="msgEmergente"></p>
                            <div class="input">
                                <textarea id="txtDesc" class="txtDesc" name="txtDesc"></textarea>
                            </div>
                            <p id="msgEmergenteTelEmp" class="msgEmergente"></p>
                            <div  class="input">
                                <input id="telEmpresa" name="telEmpresa" class="campo" type="text" placeholder="Telefono">
                            </div>
                            <p id="msgEmergenteDir" class="msgEmergente"></p>
                            <div  class="input">
                                <input id="dirEmpresa" name="dirEmpresa" class="campo" type="text" placeholder="Dirección">
                            </div>
                            <p id="msgEmergenteImgEmpresa" class="msgEmergente"></p>
                            <div>
                                <input id="imagenEmpresa" class="input" name="uploadfile" type="file">
                            </div>
                            <div  class="input">
                                <input id="img" name="img" class="ocultar" type="text" placeholder="Imagen">
                                <input id="imgCargada" name="imgCargada" type="text"  disabled>
                            </div>
                            <div  class="inputBtn centrar">
                                <input id="btn-guardarCambios" class="btn-primario" type="submit" value="Guardar cambios">
                            </div>
                        </form>
                    </div>
                    <div class="muniOpcion">
                        <div>
                            <h1>Datos de acceso</h1>
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
                            <input id="btn-guardarCambiosAcceso" class="btn-primario" type="button" value="Guardar cambios">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
