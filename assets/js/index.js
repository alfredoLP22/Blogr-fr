document.addEventListener("DOMContentLoaded",()=>{
    let btn_ham = document.querySelector('.btn-ham'),
    nav_links = document.querySelector(".nav-links"),
    nav_links_content = document.querySelector(".nav-links-content"),
    close_icon = document.querySelector(".close"),
    ham_icon = document.querySelector(".ham"),
    close_menu = true;

    ham_icon.addEventListener("click",()=>{
        if(!nav_links.classList.contains("nav-links-open")){
            nav_links.classList.add("nav-links-open");
            close_icon.classList.add("close-open");
            ham_icon.classList.add("ham-close");
        }
    });
    close_icon.addEventListener("click",()=>{
        if(nav_links.classList.contains("nav-links-open")){
            nav_links.classList.remove("nav-links-open");
            close_icon.classList.remove("close-open");
            ham_icon.classList.remove("ham-close");
        }
    });
    nav_links.addEventListener("click",()=>{
        if(close_menu && nav_links.classList.contains("nav-links-open")){
            nav_links.classList.remove("nav-links-open");
            close_icon.classList.remove("close-open");
            ham_icon.classList.remove("ham-close");
        }
        close_menu = true;
    });
    nav_links_content.addEventListener("click",()=>{
        close_menu = false;
    });

    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        //this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.classList.contains("content-active")) {
        content.classList.remove("content-active");
        } else {
            content.classList.add("content-active");
        }
    });
    }

    /*Rezise*/
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
})