import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('👌 Se generando el proceso para el cambio de contraseña');

// Obtener el URI completo
var uri = window.location.href;

// Obtener la parte del path de la URL
var path = window.location.pathname;

// Obtener los parámetros de la URL
var params = window.location.search;

console.log("URI"+uri);

console.log("PATH"+path);

console.log("PARAMS"+params);
const PasswordChange = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // As explained in the Login page.
 const { emailPasswordChange } = useContext(UserContext);
 const [form, setForm] = useState({
   email: ""
 });
 
 // As explained in the Login page.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 
 // As explained in the Login page.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }
 
 // As explained in the Login page.
 const onSubmit = async () => {
   try {
     const user = await emailPasswordChange(form.password);
     if (user) {
    
       redirectNow();
     }
   } catch (error) {
     alert(error);
   }
 };
 
 return <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
   <h1>Ingrese Contraseña</h1>
   <TextField
     label="Password"
     type="password"
     variant="outlined"
     name="password"
     value={form.password}
     onInput={onFormInputChange}
     style={{ marginBottom: "1rem" }}
   />
   
   <Button variant="contained" color="success" onClick={notify}>
   Cambiar la contraseña
   </Button>
   <Toaster />
   
   {/*<p>¿Ya tienes una cuenta?<Link to="/login">Entra</Link></p>*/}
 </form>
}
 
export default PasswordChange;