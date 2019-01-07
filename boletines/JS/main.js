//DOM - ver tema de JavaScript-SELECCIONAR ELEMENTOS DEL DOM del Curso Profesional Desarrollo Web
//querySelector nos devuelve solo un elemento / querySelectorAll nos devuelve todos los elementos que cumplan el criterio de busqueda
/*
let links = document.querySelectorAll("a"); //busca el elemento que se coloca dentro de los () y se almacena en let container

//ver tema de JavaScript-Seleccionar múltiples elementos y recorrerlos, del curso profesional de desarrollo web
//ejecuta uno por uno los elementos, y se imprime dependiendo el numero de elementos existentes, en este caso "a"
links.forEach(function(link){
	console.log(link);

})
*/

//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//recorrerlos
links.forEach(function(link){
	//agregar un eveno click a cada uno de ellos
	link.addEventListener("click",function(ev){
		ev.preventDefault();
		let content = document.querySelector(".content");

		//ver tema de javascript-Quitar y Agregar clases a un elemento con JavaScript-del curso profesional de desarrollo web
		//le quitamos la clases de animacion que tiene la clase content
		content.classList.remove("fadeInUp");
		content.classList.remove("animated");

		//agregamos clases a content para animar su salida
		content.classList.add("fadeOutUp");
		content.classList.add("animated");

		//retrasamos el redireccionamiento con el tiempo que le agregamos y así se alcanza a ver la animacion que le agregamos
		setTimeout(function(){
			location.href = "/boletines";	
		}, 600);
		
		return false;
	});
});

