let addbtn=document.getElementById("addbtn");
let main=document.getElementById("main");




function addnote(){
    let note=document.createElement("div");
    note.classList.add("note")
    note.innerHTML=` 
            <div class="tool">
                <i class="save fa-solid fa-save">
                    <i class="trash fa-solid fa-trash"></i>
                </i>
               
            </div>
            <textarea></textarea>
            `;

    let trashicon=note.querySelector(".trash");
    let saveicon=note.querySelector(".save");
    let textarea=note.querySelector("textarea");

    trashicon.addEventListener("click",()=>{
        note.remove();
        savenote();
    })

    saveicon.addEventListener("click",savenote)
    textarea.addEventListener("input",savenote)

    main.appendChild(note);

}

function savenote(){
    const notes=document.querySelectorAll(".note textarea");
    let data=[];
    for(let i=0;i<notes.length;i++){
        data.push(notes[i].value)
    }
    if(notes.length===0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }

}


function loadnote(){
    const lsnotes=JSON.parse(localStorage.getItem("notes"));
    if(lsnotes!=null){
    lsnotes.forEach(notetext => {
       
            addnote();
        
        const notes=document.querySelectorAll(".note textarea");
        const lastnote=notes[notes.length-1];
        lastnote.value=notetext;
    });
}
else{
    addnote();
}
}



addbtn.addEventListener("click",addnote)
loadnote();