import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('👌 Se envio el correo para el cambio de contraseña');
 
const Passwordreset = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // As explained in the Login page.
 const { emailPasswordReset } = useContext(UserContext);
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
     const user = await emailPasswordReset(form.email);
     if (user) {
       redirectNow();
     }
   } catch (error) {
    toast('📧Ingrese el Email');
   }
 };
 
 return <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
   <h1>Ingrese Correo</h1>
   <TextField
     label="Email"
     type="email"
     variant="outlined"
     name="email"
     value={form.email}
     onInput={onFormInputChange}
     style={{ marginBottom: "1rem" }}
   />
   
   <Button variant="contained" color="primary" onClick={onSubmit} onFocus={notify}>
   Cambiar Contraseña
   </Button>
   <Toaster />
   {/*<p>¿Ya tienes una cuenta?<Link to="/login">Entra</Link></p>*/}
 </form>
}
 
export default Passwordreset;