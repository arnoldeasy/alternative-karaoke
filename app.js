import { db } from "./firebase.js";

import {

collection,

addDoc,

serverTimestamp

}

from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const form=document.getElementById("songForm");

const message=document.getElementById("message");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=document.getElementById("name").value;

const youtube=document.getElementById("youtube").value;

await addDoc(collection(db,"queue"),{

name,

youtube,

time:serverTimestamp()

});

message.innerHTML="✅ Song added!";

form.reset();

});
