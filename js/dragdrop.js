limpiarArray();
fitxers = [];
let dropArea = document.getElementById("areadrop");

dropArea.addEventListener("dragover", function(e){
    prevDefault(e);  
    dropArea.style.backgroundColor = "#dedede";
});

dropArea.addEventListener("dragleave", function(e){
    prevDefault(e);  
    dropArea.style.backgroundColor = "white";
});

dropArea.addEventListener("drop", (e)=>{
    prevDefault(e);
    //Lista de files introduides
    console.log(e.dataTransfer.files);
    fitxers = fitxers.concat(Array.from(e.dataTransfer.files))
    //Array de tots els fitxers
    console.log(fitxers)
    showFiles();
});

function showFiles(){
    document.getElementById("filesguardadas").innerHTML="";
    document.getElementById("fitxersbaby").innerHTML="";
    if (fitxers.length != 0){
        fitxers.forEach(file =>{
            processFile(file);
        })
    }
}

function processFile(file, index){
    console.log(file.type);
    const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    if (validExtensions.includes(file.type)){
        console.log("File type correct");
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener("load", function () {
            url = reader.result;
            //let newdiv = document.createElement("div");
            let div = `<div class="filesguardadas"><img src="${url}"/>
                            <span style="text-overflow: ellipsis; max-width: 20vh; width: auto; overflow: hidden;">${file.name}<br></span>
                            <span onclick="deleteFile(${index})" class="removeButton">X</span></div>`;
            document.getElementById("filesguardadas").innerHTML += div;
        });        
    }else{
        console.log("Error file type");
        borrarFile(index, false);
    }
}

function prevDefault (e) {
    e.preventDefault();
}

function deleteFile(index) {
    fitxers.splice(index, 1);
    showFiles();
    document.getElementById("filesguardadas").textContent = "";
}

function limpiarArray() {
    fitxers = [];
}
