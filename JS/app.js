import {logIn,logOut}  from "./auth.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
const buttonLogin = document.querySelector("#btn-login");
const buttonLoguot = document.querySelector("#btn-logout");

let currentUser;
const auth = getAuth();
auth.onAuthStateChanged(user =>{
    if (user){
        currentUser = user;
        console.log("Usuario Loguado", currentUser.displayName);
        init();
    }else{
        console.log("No hay Usuario logueado");
    }
});


buttonLogin.addEventListener("click", async (e) =>{
    try {
        await logIn();
        
    } catch (error) {
        
    }
});

buttonLoguot.addEventListener("click", e =>{
     logOut();
});

function init(){

}