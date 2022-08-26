import { getAuth, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
const auth = getAuth();
const provider = new GoogleAuthProvider();

auth.languageCode ="es";

 export async function logIn() {
    try{
      const response = await signInWithPopup(auth,provider);
      console.log(response);
      return response.user;
    }catch(error){
      console.log(error);
      throw new Error(error);
      

    }
 }
  

 export function logOut(){
    auth.signOut();
 };