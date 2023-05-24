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
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('usuarios');


const insertResult = await collection.insertMany([{ id: 1, nombres:"Jose" ,apellidos:"Mejia Bolaños", Rol:"Contador" }, { id: 2, nombres:"Fabian" ,apellidos:"Jimenez", Rol:"Administrador" }, { id: 3, nombres:"Fabian" ,apellidos:"Jimenez", Rol:"Caja"}]);
console.log('Inserted documents =>', insertResult);

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
 
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
     <Button variant="contained" onClick={main}>Consultar</Button>
   </>
 )
}