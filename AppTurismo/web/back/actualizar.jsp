<%-- 
    Document   : actualizar
    Created on : 12/06/2017, 06:46:19 AM
    Author     : Ruben D
--%>

<%@page import="javazoom.upload.UploadException"%>
<%@page import="java.util.Random"%>
<%@page import="java.util.Hashtable"%>
<%@page import="javazoom.upload.UploadFile"%>
<%@page import="javazoom.upload.UploadBean"%>
<%@page import="javazoom.upload.MultipartFormDataRequest"%>
<jsp:useBean id="Controlador" class="Controlador.Controlador" scope="session"></jsp:useBean>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    MultipartFormDataRequest mrequest = null;
    UploadBean upBean = null;
            
    String correo = null;
    String nombreEmp = null;
    String municipioEmp = null;
    String tipoEmp = null;
    String descripcion = null;
    String telefono = null;
    String direccion = null;
    String imagen = null;
    UploadFile file = null;
    String urlDestino = "C:\\Users\\Ruben D\\Documents\\NetBeansProjects\\AppTurismoNDS\\AppTurismo\\web\\imagenesBD";
    //String urlDestino = "/usr/share/apache-tomcat-7.0.27/webapps/ufps_22-AppTurismo/imagenesDB";
    //para obtener la url de almacenamiento de archivos
    //String direccion = request.getSession().getServletContext().getRealPath("imagenesDB/");
    
    try{
            /**
             * Aqui estamos confirmando el MultipartFormDataRequest y le indicamos que recoga todo lo que
             * nos esta mandando la pagina sitio_turistico.
             */
                mrequest=   new MultipartFormDataRequest(request);
                if (mrequest != null) {
                    /**
                     * Usamos el "mrequest" por que como dije al comienzo, el request normal no funciona
                     * cuando usamos un FORM MULTIPART / FORM-DATA
                     */
                    correo = mrequest.getParameter("correoV");
                    nombreEmp = mrequest.getParameter("nombreEmp");
                    municipioEmp = mrequest.getParameter("selMuniSitioTuristico");
                    tipoEmp = mrequest.getParameter("tipoDeEmpresa");
                    descripcion = mrequest.getParameter("txtDesc");
                    telefono = mrequest.getParameter("telEmpresa");
                    direccion = mrequest.getParameter("dirEmpresa");
                }
                /**
                 * Usamos un HashTable que es un directorio, se podria usar como una tabla pequeña.
                 * mrequest.getFiles() = recoger todos los archivos de la imagen.
                 */
                Hashtable files = mrequest.getFiles();
                if ((files != null) && (!files.isEmpty())) {
                    /**
                     * si UploadBean sirve para que podamos subir al servidor objetos, entonces 
                     * UploadFile sirve para poder subir Archivos al servidor.
                     * 
                     * En este caso, al usar el comando GET, le estamos diciendo a lo que
                     * tenga dentro de sus parentecis se vaya al objeto file, pero como 
                     * el objeto que obtenemos es de tipo Hashtable le colocamos un cast
                     * para que podamos recuperar la informacion si problemas.
                     */
                    file = (UploadFile) files.get("uploadfile");
                    upBean = new UploadBean();
                    upBean.setFolderstore(urlDestino);
                    /**
                     * Empezamos a utilizar el UploadBean y colocamos la opcion setFolderstore
                     * para poder indicar en que direcion vamos a guarda todo archivo que nos mande.
                     */ 
                    
                        
                        /**
                         * Con el Store le decimos al MultipartFormRequest que obtenta tambien la imagen.
                         */
                        if (file != null) {
                            if(file.getFileName()!=null){
                                Random rnd = new Random();
                                file.setFileName(rnd.nextLong()+".jpg");
                            }
                            upBean.store(mrequest, "uploadfile");
                            imagen = file.getFileName();
                        
                            request.setAttribute("imagen", urlDestino+"\\"+imagen);
                            request.setAttribute("nombre", imagen);
                            request.setAttribute("tipo",file.getContentType() );
                            request.setAttribute("tamanio", file.getFileSize());
                        }
                } else {
                    System.out.println("<h1>No uploaded files</h1>");
                }
                
            }catch( UploadException exc){
                System.out.println("Error en lo primero: "+exc.getMessage());
            }
    //out.print(correo+"/"+nombreEmp+"/"+municipioEmp+"/"+tipoEmp+"/"+descripcion+"/"+telefono+"/"+direccion+"/"+imagen);
    
    String rta = "";
    
    if(file.getFileName() == null){
        imagen = mrequest.getParameter("img");
    }
    rta = Controlador.modificarEmpresa(correo, nombreEmp, municipioEmp, tipoEmp, descripcion, telefono, direccion, imagen);
    if(rta.equals("exito")){
        
    }else{
        if(rta.indexOf("error")>-1){
            HttpSession sesion = request.getSession();
            sesion.setAttribute("msgErrorSubir", "Ha ocurrido un error a la hora de registrar la cuenta.");
        }
    }
    response.sendRedirect("../empresa/mi_cuenta.jsp");
    
%>
