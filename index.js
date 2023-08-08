function onLoad(){
    let x = document.getElementById("root-arrow");
    x.style.cursor="pointer"
    x.addEventListener("click" , function(){
        let liTag = x.parentNode.parentNode.parentNode
        let innerContent = liTag.lastElementChild;
        
        let arrow = x.parentElement.firstElementChild

        console.log(arrow)
        if(innerContent.classList.length == 0){
            innerContent.classList.add("collapse");
            arrow.classList.remove("rotate");
            arrow.classList.add("normal")
            
        }
        else{
            innerContent.classList.remove("collapse");
            arrow.classList.remove("normal");
            arrow.classList.add("rotate")
        }
    })
}

let operation = 0;
let parent = 0;

function OnclickEvent(event){
   let inputtag = document.getElementById("InputValueId");
   let x = event.id;
//    console.log(x)
   if(inputtag.value.length <= 10){
    if(x == "addFolder"){
        make_Folder(inputtag.value , event);
    }
    else if(x == "addFile"){
        make_File(inputtag.value , event);
    }
    else {
        delete_file_folder(event);
    }
  
   }
   else{
    alert("please do not enter file more than 10 character");
   }
   inputtag.value = "";
}

function make_Folder(value , event){
   
    let li =  event.parentNode.parentNode.parentNode
    let ulTag = li.lastElementChild; 
    // console.log(li)
//    console.log(li)

    let list_item = document.createElement("li");
    list_item.style.listStyleType = "none";
    
    // making FileList
    let list = document.createElement("ul");
  
    list_item.appendChild(Arrow_An_Titl_Function(value));
    list_item.appendChild(list)
    
   
    ulTag.appendChild(list_item);
}

function make_File(value , event){
    // let main_ul = document.getElementsByClassName("main-list");

    let li =  event.parentNode.parentNode.parentNode
    let ulTag = li.lastElementChild; 
    // console.log(li)

    let list_item = document.createElement("li");
    list_item.classList.add("file-name");

    let divtag1 = document.createElement("div")
    let fileName = document.createElement("span")
    fileName.innerHTML = value;
    divtag1.appendChild(fileName);
    // bigdiv.appendChild(divtag1);
    
    let divtag2 = document.createElement("div")
    let deleteicon = document.createElement("button")
    deleteicon.classList.add("sub-icon")
    deleteicon.innerHTML = "&#x2715;"
    deleteicon.setAttribute("onclick"  , "OnclickEvent(this)");
    deleteicon.style.cursor = "pointer";
    divtag2.appendChild(deleteicon)
    
   let bigdiv = document.createElement("div");
   bigdiv.classList.add("box")
   bigdiv.appendChild(divtag1);
   bigdiv.appendChild(divtag2);

    list_item.appendChild(bigdiv);
    // console.log(list_item);
    ulTag.appendChild(list_item);

}

function delete_file_folder(event){
    let liTag = event.parentNode.parentNode.parentNode;
    liTag.remove();
 
}

function Arrow_An_Titl_Function(value){
    let folder_div = document.createElement("div")
    folder_div.classList.add("box");
   
    folder_div.style.display = "flex";
    // importing header class
    
    
    let main_box = document.createElement("div");
    main_box.classList.add("folder-name");
    
    folder_div.appendChild(main_box);
   
    // setting icon and name
    let x = document.createElement("span");
    x.innerHTML = "&#10148;";
    x.style.cursor=  "pointer"

    x.addEventListener("click" , function(){
        let liTag = x.parentNode.parentNode.parentNode
        let innerContent = liTag.lastElementChild;

        let arrow = x.parentElement.firstElementChild
        
        console.log(liTag)
        if(innerContent.classList.length == 0){
            innerContent.classList.add("collapse");
            arrow.classList.remove("rotate");
            arrow.classList.add("normal")
            
        }
        else{
            innerContent.classList.remove("collapse");
            arrow.classList.remove("normal");
            arrow.classList.add("rotate")
        }
    })
    
    main_box.appendChild(x);
    
    let name = document.createElement("span");
    name.innerHTML = value;
    
    main_box.appendChild(name);
 
    // creating icons of folder file and delete
    folder_div.append(Make_icons());
    return folder_div;
}

function Make_icons(){
    let main_box = document.createElement("div")
    let folder = document.createElement("button")
    let file = document.createElement("button")
    let deleteicon = document.createElement("button")

    folder.id = "addFolder";
    file.id = "addFile";
    deleteicon.id = "deletebutton";
    
    folder.classList.add("sub-icon")
    file.classList.add("sub-icon")
    deleteicon.classList.add("sub-icon")

    folder.innerHTML = "&#128193;"
    file.innerHTML = "&#128196;"
    deleteicon.innerHTML = "&#x2715;"

    folder.style.cursor = "pointer";
    file.style.cursor = "pointer";
    deleteicon.style.cursor = "pointer";

    folder.setAttribute("onclick" , "OnclickEvent(this)");
    file.setAttribute("onclick"  ,"OnclickEvent(this)");
    deleteicon.setAttribute("onclick"  , "OnclickEvent(this)");

    main_box.appendChild(folder);
    main_box.appendChild(file);
    main_box.appendChild(deleteicon);
    
    return main_box
}


