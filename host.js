import { db } from "./firebase.js";

import {

collection,

query,

orderBy,

onSnapshot,

deleteDoc,

doc

}

from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const queue=document.getElementById("queue");

const q=query(collection(db,"queue"),orderBy("time"));

onSnapshot(q,(snapshot)=>{

queue.innerHTML="";

snapshot.forEach((song)=>{

const data=song.data();

const div=document.createElement("div");

div.className="song";

div.innerHTML=`

<h2>${data.name}</h2>

<p>${data.youtube}</p>

<button>Done</button>

`;

div.querySelector("button").onclick=async()=>{

await deleteDoc(doc(db,"queue",song.id));

};

queue.appendChild(div);

});

});
