import {logIn,logOut}  from "./auth.js";
const buttonLogin = document.querySelector("#btn-login");
const buttonLoguot = document.querySelector("#btn-logout");

buttonLogin.addEventListener("click", async (e) =>{
    try {
        await logIn();
        
    } catch (error) {
        
    }
});

buttonLoguot.addEventListener("click", e =>{
     logOut();
});