<%-- 
    Document   : servicios
    Created on : 10/06/2017, 09:51:13 PM
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
            String msg = "ningun mensaje";

            if(sesion.getAttribute("correoLogueado") != null){
                correoL = (String) sesion.getAttribute("correoLogueado");
                if(sesion.getAttribute("msgErrorSubir") != null){
                    msg = (String) sesion.getAttribute("msgErrorSubir");
                }
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
                        <li id="m-servicios" class="itemMenu-seleccionado">Servicios</li>
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
                <div id="respuestaSistema" class="ocultar"><%=msg%></div>
                <div id="msgRespuesta" class="msgRespuesta"></div>
                <div class="contenedor">
                    <div class="muniPrincippal">
                        <div>
                            <div>
                                <h1>Servicio</h1>
                            </div>
                        </div>
                        <div class="margen-top">
                            <div class="contenedor-tabla">
                                <table id="tabla">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="muniOpcion">
                        <form id="form-regS" method="POST" action="../back/subir2.jsp" enctype="multipart/form-data">
                            <div>
                                <legend>Servicios</legend>
                            </div>
                            <div  class="input">
                                <input id="correoEmpresa" name="correoEmpresa" type="text" class="ocultar" value="<%=correoL%>">
                                <input id="accion" name="accion" class="ocultar" type="text" value="cr">
                            </div>
                            <p id="msgEmergenteS" class="msgEmergente"></p>
                            <div  class="input">
                                <input id="nombreS" name="nombreS" type="text" placeholder="Nombre">
                            </div>
                            <p id="msgEmergentePrecio" class="msgEmergente"></p>
                            <div  class="input">
                                <input id="precioS" name="precioS" type="number" placeholder="Precio">
                            </div>
                            <p id="msgEmergenteDescS" class="msgEmergente"></p>
                            <div class="input">
                                <textarea id="txtDesc" class="txtDesc" name="txtDesc"></textarea>
                            </div>
                            <p id="msgEmergenteUrl" class="msgEmergente"></p>
                            <div  class="input">
                                <input id="urlS" name="urlS" type="text" placeholder="Url">
                            </div>
                            <p id="msgEmergenteImgST" class="msgEmergente"></p>
                            <div>
                                <input id="imagenS" class="input" name="uploadfile" type="file">
                            </div>
                            <div  class="input">
                                <input id="img" name="img" class="ocultar" type="text" placeholder="Imagen">
                                <input id="imgCargada" name="imgCargada" class="ocultar" type="text">
                            </div>
                            <div  class="inputBtn centrar">
                                <input id="btn-crearServicio" class="btn-primario" type="submit" value="Crear">
                                <input id="btn-modificarServicio" class="btn-primario ocultar" type="submit" value="Modificar">
                                <input id="btn-cancelar" class="btn-primario ocultar margen-top" type="button" value="Cancelar">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
                <%
                    sesion.setAttribute("msgErrorSubir", "ningun mensaje");
                %>
    </body>
</html>
