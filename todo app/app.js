var enterBtn = document.getElementById("enter");
var input = document.getElementById("item");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";



    function cross(){
        if(li.classList != "edit")
            li.classList.toggle("done");
    
    }

    li.addEventListener("click", cross);

    var del = document.createElement("button");
    del.appendChild(document.createTextNode("X"));
    li.appendChild(del);
    del.addEventListener("click", deleteListItem);

    


    function deleteListItem(){
        li.classList.add("delete");
    }

    var edit = document.createElement("button");
    edit.appendChild(document.createTextNode("..."));
    //edit.innerHTML = '<i class="fas fa-pencil-square-o"></i>';
    li.appendChild(edit);
    edit.addEventListener("click", editListItem);


    function editListItem(){
        li.classList.add('edit');
        li.innerHTML = '<input id="edit" type="text" placeholder="Edit Task..." autofocus>';
        var task = document.getElementById("edit");
        var done = document.createElement("button");
        li.appendChild(del);
        done.appendChild(document.createTextNode("Done"));
        li.appendChild(done);
        done.addEventListener("click", setInput);

        function setInput(){
            if(task.value.length > 0){
                li.appendChild(document.createTextNode(task.value));
                li.innerHTML = task.value;
                li.appendChild(del);
                li.appendChild(edit);
                li.classList.remove('edit');
                cross();
            }
            
        }
        
    }


}
    


    function addListAfterClick(){
        if(inputLength() > 0) {
            createListElement();
        }
    }

   

    function addListAfterKeypress(event){
        if(inputLength() > 0 && event.which === 13){
            createListElement();
        }
    }

   

enterBtn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
