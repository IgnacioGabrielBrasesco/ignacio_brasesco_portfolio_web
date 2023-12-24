const menuHamburguesa = document.querySelector("ul");

const botonHamburguesa = document.querySelector(".menu_hamburguesa");



botonHamburguesa.addEventListener("click", (e)=>{
   if(!menuHamburguesa.className.includes("active")){
    menuHamburguesa.classList.add("active");
   } else{
    menuHamburguesa.classList.remove("active");
   }   
});


//el codigo esta bien pero addEventListener no se puede usar con querySelectorAll y querySelector solo funciona con el primero, investigar..

// const click_li = document.querySelector("li");

// click_li.addEventListener("click", (e)=>{
//     if(menuHamburguesa.className.includes("active")){
//         menuHamburguesa.classList.remove("active");
//     }

// })

const click_li = document.querySelectorAll("li");

click_li.forEach((elementoAncla) =>{
elementoAncla.addEventListener("click", (e)=>{
    if(menuHamburguesa.className.includes("active")){
        menuHamburguesa.classList.remove("active");
    }

   })
});
