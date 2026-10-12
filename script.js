const navbar=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
 if(window.scrollY>50){navbar.style.padding="10px 0";navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";}
 else{navbar.style.padding="18px 0";navbar.style.boxShadow="0 10px 35px rgba(0,0,0,.05)";}
 const total=document.documentElement.scrollHeight-window.innerHeight;
 const progress=document.getElementById("progressBar");
 if(progress) progress.style.width=(total>0?(window.scrollY/total)*100:0)+"%";
});
const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
 let current="";
 sections.forEach(section=>{if(window.scrollY>=section.offsetTop-150) current=section.id;});
 navLinks.forEach(link=>{link.classList.toggle("active",link.getAttribute("href")==="#"+current);});
});
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>{
 const menu=document.getElementById("navbar");
 if(menu && menu.classList.contains("show") && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));
