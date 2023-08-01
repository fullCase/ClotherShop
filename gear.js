const menuContainer = document.querySelector("[data-menuUl]");
const navbarMenuBtn = document.querySelector("[data-navbarBtn]");
const navbarMenuBtnIcon = document.querySelector("[data-navbarBtn_span]");
const menuFog = document.querySelector("[data-fog]");

const changeClassName = (obj, className) =>{
   obj.classList.toggle(className);
};

navbarMenuBtn.addEventListener("click", () => {
   changeClassName(menuContainer, "active");
   changeClassName(navbarMenuBtn, "active");
   changeClassName(menuFog, "active");

   if(navbarMenuBtn.classList[1] == "active")
      navbarMenuBtnIcon.textContent = "close";
   else
      navbarMenuBtnIcon.textContent = "menu";
   
});





