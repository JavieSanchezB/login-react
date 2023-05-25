import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Se envio el correo para cambio');
const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
toast.promise(
    resolveAfter3Sec,
    {
      pending: 'Promise is pending',
      success: 'Promise resolved 👌',
      error: 'Promise rejected 🤯'
    }
)
const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve("world"), 3000));
toast.promise(
    resolveAfter3Sec,
    {
      pending: 'Promise is pending',
      success: {
        render({data}){
          return `Hello ${data}`
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({data}){
          // When the promise is rejected, data will contain the error
          return <MyErrorComponent message={data.message} />
        }
      }
    }
)
const id = toast.loading("Please wait...")
//do something else
toast.update(id, { render: "All is good", type: "success" });
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