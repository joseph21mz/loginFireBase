import {logIn,logOut}  from "./auth.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { insert } from "./firebase.js";
import { getUUID } from "./uuid.js";

const buttonLogin = document.querySelector("#btn-login");
const buttonLoguot = document.querySelector("#btn-logout");
const todoform = document.querySelector("#todoform");
const userInfo = document.querySelector("#user-info");
const todoInput = document.querySelector("#todo-input");


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

todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const text= todoInput.value;
    if (text !==""){
        addTodo(text);
    }
});

async function addTodo(text){
    try{
        const todo ={
            id: getUUID(),
            text: text,
            completed: false,
            userid: currentUser.uid,
        };
        const response = await insert(todo);
    }catch(error){
        console.log(error);
    }
}


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
    buttonLogin.classList.add("hidden");
    buttonLoguot.classList.remove("hidden");
    todoform.classList.remove("hidden");                                             
    userInfo.innerHTML=`<img src="${currentUser.photoURL}" width"152"/><span>${currentUser.displayName}</span>`; 

    
}


