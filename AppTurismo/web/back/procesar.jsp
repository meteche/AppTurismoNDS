<%-- 
    Document   : procesar
    Created on : 20/05/2017, 05:19:02 PM
    Author     : Ruben D
--%>

<jsp:useBean id="Controlador" class="Controlador.Controlador" scope="session"></jsp:useBean>

<%
    String rta = "";

    if (request.getParameter("option").equals("registrarCuenta")) {
        String correo = request.getParameter("correo");
        String password = request.getParameter("password");
        String tipoCuenta = request.getParameter("tipoCuenta");
        String tipoEmpresa = request.getParameter("tipoEmpresa");
        System.out.println(tipoEmpresa);
        rta = Controlador.agregarCuenta(correo, password, tipoCuenta, tipoEmpresa);
        System.out.println(rta);
        out.print(rta);
    }else{
        if(request.getParameter("option").equals("login")){
            String correo = request.getParameter("correo");
            String password = request.getParameter("password");
            rta = Controlador.validarSesion(correo, password);
            
            if (!rta.equals("no existe")) {
                HttpSession sesion = request.getSession();
                sesion.setAttribute("correoLogueado", correo);
            }
            System.out.println(rta);
            out.print(rta);
        }else{
            if (request.getParameter("option").equals("cerrarSesion")) {
                HttpSession sesion = request.getSession();
                sesion.removeAttribute("correoLogueado");
            }else{
                if (request.getParameter("option").equals("registrarMunicipio")) {
                    String municipio = request.getParameter("municipio");
                    rta = Controlador.agregarMunicipio(municipio);
                    System.out.println(rta);
                    out.print(rta);
                }else{
                    if (request.getParameter("option").equals("consultarMunicipios")) {
                        rta = Controlador.consultarMunicipios();
                        System.out.println(rta);
                        out.print(rta);
                    }else{
                        if (request.getParameter("option").equals("eliminarMunicipio")) {
                            String municipio = request.getParameter("municipio");
                            rta = Controlador.eliminarMunicipio(municipio);
                            System.out.println(rta);
                            out.print(rta);
                        }else{
                            if (request.getParameter("option").equals("modificarMunicipio")) {
                                String municipioV = request.getParameter("municipioV");
                                String municipioM = request.getParameter("municipioM");
                                rta = Controlador.modificarMunicipio(municipioV, municipioM);
                                System.out.println(rta);
                                out.print(rta);
                            }else{
                                if (request.getParameter("option").equals("modificarCuenta")) {
                                    String correoV = request.getParameter("correoV");
                                    String correoM = request.getParameter("correoM");
                                    String pass = request.getParameter("passM");
                                    rta = Controlador.modificarCuenta(correoV, correoM, pass);
                                    if(rta.equals("exito")){
                                        HttpSession sesion = request.getSession();
                                        sesion.setAttribute("correoLogueado", correoM);
                                    }
                                    System.out.println(rta);
                                    out.print(rta);
                                }else{
                                    if (request.getParameter("option").equals("consultarCuentas")) {
                                        rta = Controlador.consultarCuentas();
                                        System.out.println(rta);
                                        out.print(rta);
                                    }else{
                                        if (request.getParameter("option").equals("eliminarCuenta")) {
                                            String correo = request.getParameter("correo");
                                            rta = Controlador.eliminarCuenta(correo);
                                            System.out.println(rta);
                                            out.print(rta);
                                        }else{
                                            if (request.getParameter("option").equals("cargarSelectores")) {
                                                rta = Controlador.consultarMunicipios();
                                                System.out.println(rta);
                                                out.print(rta);
                                            }else{
                                                if (request.getParameter("option").equals("consultarSitiosTuristicos")) {
                                                    rta = Controlador.consultarSitiosTuristicos();
                                                    System.out.println(rta);
                                                    out.print(rta);
                                                }else{
                                                    if (request.getParameter("option").equals("consultarSTporID")) {
                                                        String nombre = request.getParameter("nombreST");
                                                        String municipio = request.getParameter("municipio");
                                                        rta = Controlador.consultarSitioTuristicoPorID(nombre, municipio);
                                                        System.out.println(rta);
                                                        out.print(rta);
                                                    }else{
                                                        if (request.getParameter("option").equals("consultarSitioTuristicoPorMunicipio")) {
                                                            String municipio = request.getParameter("municipio");
                                                            rta = Controlador.consultarSitioTuristicoPorMunicipio(municipio);
                                                            if(rta.equals("")){
                                                                rta = "sinRespuesta";
                                                            }
                                                            System.out.println(rta);
                                                            out.print(rta);
                                                        }else{
                                                            if (request.getParameter("option").equals("eliminarST")) {
                                                                String nombre = request.getParameter("nombreST");
                                                                String municipio = request.getParameter("municipio");
                                                                rta = Controlador.eliminarSitioTuristico(nombre, municipio);
                                                                System.out.println(rta);
                                                                out.print(rta);
                                                            }else{
                                                                if (request.getParameter("option").equals("consultarEmpresa")) {
                                                                    String correo = request.getParameter("correo");
                                                                    rta = Controlador.consultarEmpresaPorID(correo);
                                                                    String[] tratarCamposVacios = rta.split("&");
                                                                    rta="";
                                                                    for(int i=0;i<tratarCamposVacios.length;i++){
                                                                        if(tratarCamposVacios[i].equals("null")){
                                                                            rta += "vacio&";
                                                                        }else{
                                                                            rta += tratarCamposVacios[i]+"&";
                                                                        }
                                                                    }
                                                                    System.out.println(rta);
                                                                    out.print(rta);
                                                                }else{
                                                                    if (request.getParameter("option").equals("consultarServicios")) {
                                                                        String correo = request.getParameter("correo");
                                                                        rta = Controlador.consultarServiciosPorID(correo);
                                                                        System.out.println(rta);
                                                                        out.print(rta);
                                                                    }else{
                                                                        if (request.getParameter("option").equals("consultarInfoServicio")) {
                                                                            String correo = request.getParameter("correo");
                                                                            String nombre = request.getParameter("nombre");
                                                                            rta = Controlador.consultarServicioPorID(correo, nombre);
                                                                            System.out.println(rta);
                                                                            out.print(rta);
                                                                        }else{
                                                                            if (request.getParameter("option").equals("eliminarServicio")) {
                                                                                String correo = request.getParameter("correo");
                                                                                String nombre = request.getParameter("nombre");
                                                                                rta = Controlador.eliminarServicio(correo, nombre);
                                                                                System.out.println(rta);
                                                                                out.print(rta);
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
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
%>
