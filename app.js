
const menuCollapseEl = document.querySelector(".menu-collapse");
const linksCotainerEl = document.querySelector (".app-links-container");
const purpleLogoEl = document.querySelector(".purple__logo");
if (menuCollapseEl && linksCotainerEl) ;
{menuCollapseEl.addEventListener ("click", () => 
{linksCotainerEl.classList.toggle ("active");

    if (linksCotainerEl.classList.contains ("active")) {
        menuCollapseEl.src = "assets/images/menu-close-ıcon.svg";
        purpleLogoEl.src ="assets/images/close-the-door.svg"; } 
        else {   menuCollapseEl.src = "assets/images/menu-open-ıcon.svg";
    purpleLogoEl.src = "assets/images/hire-me.svg";

}
    });  
 
}
