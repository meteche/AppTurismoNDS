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
            System.out.println(rta);
            out.print(rta);
        }
    }
    
%>
