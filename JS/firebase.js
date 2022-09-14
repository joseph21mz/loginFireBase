import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function insert(item){
  try{
    const response = await db.collection("todos").add(item);
    return response;
  }catch(error){
    throw new Error(error);
  }
}

/*
export async function getItems(uid){
  try{
    let items =[];
    const response = await db.collection("todos").where("user")
  }catch(error){

  }

}*/