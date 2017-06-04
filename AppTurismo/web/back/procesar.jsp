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
        rta = Controlador.agregarCuenta(correo, password, tipoCuenta);
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
                        rta = Controlador.consultarSelecciones();
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
%>
