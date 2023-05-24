import { Button } from '@mui/material'
import { useContext } from 'react';
<<<<<<< HEAD
import { UserContext } from '../contexts/user.context'
=======
import { UserContext } from '../contexts/user.context';
>>>>>>> 6d4c61fe016610d7fb99c15ab5f1e4a336ae9206
 
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
     
   </>
 )
}