import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'
require("dotenv").config();
const URI = process.env.URL_API_MONGO;

// Connection URL
const url = URI;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DBNAME;

 
export default function Home() {
 const { logOutUser } = useContext(UserContext);
 
 // This function is called when the user clicks the "Logout" button.
 const logOut = async () => {
   try {
     // Calling the logOutUser function from the user context.
     const loggedOut = await logOutUser();
     // Now we will refresh the page, and the user will be logged out and
     // redirected to the login page because of the <PrivateRoute /> component.
     if (loggedOut) {
       window.location.reload(true);
     }
   } catch (error) {
     alert(error)
   }
 }
 
 
 return (
   <>
     <h1>Bienvenido,Primera vista</h1>
     
     <Button variant="contained" onClick={logOut}>Cerrar Sesión</Button>
     <Button variant="contained" onClick={}>Consultar</Button>
   </>
 )
}