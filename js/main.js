function addElement(){
	//Texto desde textarea
    var ul = document.getElementById('ulList'); 
    var li = document.createElement('li');
    var inputText= document.getElementById("toDoText").value;
    var task = document.createTextNode(inputText);

    //Checkbox
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "all[]";

    //Ícono delete/trash
    var span_delete = document.createElement("span");
	var icon_delete = document.createElement("i");
	icon_delete.classList.add("fa", "fa-trash");
	span_delete.className = "delete";
	span_delete.appendChild(icon_delete);

	//ícono love
	var span_love = document.createElement("span");
	var icon_love = document.createElement("i");
	icon_love.classList.add("fa", "fa-heart");
	span_love.className = "love";
	span_love.appendChild(icon_love);
    
    li.appendChild(checkbox);
    li.appendChild(task);    
    li.appendChild(span_delete);
    li.appendChild(span_love);
    
    //Si textarea está vacía o tiene algo
    if(inputText == ""){
		alert("Debes escribir alguna tarea");
	}else{
	    ul.appendChild(li);
	}

	//Colorear diferente el background de la li con cada click al botón
	var backgroundColors = ["#8378f4", "#59d9a4", "#f478b8", "#59d4d9"];
                
	function clickMe(){
	  var randomize = Math.floor(Math.random()*backgroundColors.length);
	  $('li').css("background-color", backgroundColors[randomize]);
	}
	clickMe();

	//Se deja en blanco la textarea una vez que se añada la tarea
	document.getElementById("toDoText").value = "";	


	//Click en el ícono "delete" y que se esconda el elemento de la lista
	var delete_element = document.getElementsByClassName("delete");
	for(var i= 0; i < delete_element.length; i++){
		delete_element[i].onclick = function(){
			var trash = this.parentElement;
			trash.style.display = "none";
		}
	}

	//Colorear rojo ícono corazón
	span_love.addEventListener("click", function(){
		span_love.classList.toggle("love-color");
	})

	//Agregar tachado
	checkbox.addEventListener("click", function(){
		li.classList.toggle("checked");
	})
}



