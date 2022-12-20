
let myElement = document.querySelector("#menu-bar");
let arman = document.querySelector("#under-menu");
let size = document.querySelector("#main");
let section = document.querySelector("section");
let fit = document.querySelector(".fit");
let nav = document.querySelector("nav");
let header = document.querySelector("header");
let ism = document.querySelector(".name");
let p = document.querySelector("p");
let hover2 = document.querySelector(".img-hover2");
let hover3 = document.querySelector(".img-hover3");
let hover33 = document.querySelector(".img-hover33");
let hover1 = document.querySelector(".img-hover1");
let hover11 = document.querySelector(".img-hover11");
let hover0 = document.querySelector(".img-hover0");
let Aboutme= document.querySelector("#About-me");
let contactme= document.querySelector("#contact-me");
let li2 = document.querySelector(".li2");
let li1 = document.querySelector(".li1");
        arman.style.visibility = "visible";
        Aboutme.style.visibility = "visible";
        arman.style.visibility = "hidden";
        myElement.style.visibility = "hidden";
        myElement.addEventListener("click", (e)=>{
            if (arman.style.visibility === "hidden"){
                if (Aboutme.style.visibility === "visible"){
                hover1.style.visibility = "visible";
                hover2.style.visibility = "visible";
                arman.style.visibility = "visible";
                }else{
                    hover1.style.visibility = "hidden"
                    hover0.style.visibility = "visible"
                    hover2.style.visibility = "hidden";
                    hover3.style.visibility = "visible";
                    arman.style.visibility = "visible";
                }
            }
            else
            {
                hover1.style.visibility = "hidden";
                hover0.style.visibility = "hidden";
                hover2.style.visibility = "hidden";
                hover3.style.visibility = "hidden";
                arman.style.visibility = "hidden";
            }
                
            
        })

        
li1.addEventListener("click", (e)=>{
        contactme.style.visibility = "hidden";
        Aboutme.style.visibility = "visible";
        Aboutme.style.opacity = "1"
        hover11.style.visibility = "hidden"
         hover1.style.visibility = "visible"

})
li2.addEventListener("click", (e)=>{
   
         hover3.style.visibility = "visible"
         hover33.style.visibility = "hidden"
         hover1.style.visibility = "hidden"
         hover0.style.visibility = "visible"
         contactme.style.visibility = "visible";
         Aboutme.style.visibility = "hidden";
         contactme.style.opacity = "1"
         
    

})
li1.addEventListener("mouseover", (e)=>{
    if (Aboutme.style.visibility === "visible")
     {
        hover0.style.visibility = "hidden"
        hover1.style.visibility = "visible"
        hover11.style.visibility = "hidden"
        hover3.style.visibility = "hidden"
        hover2.style.visibility = "visible"
        Aboutme.style.visibility = "visible"
            }      
            else
            {
            hover0.style.visibility = "hidden"
            hover11.style.visibility = "visible"
            hover1.style.visibility = "hidden"
            hover2.style.visibility = "visible"
            hover3.style.visibility = "hidden"
            Aboutme.style.visibility = "visible";
            Aboutme.style.opacity = "1"
            contactme.style.opacity = "0"
            }
            
         
             
        })
        li1.addEventListener("mouseout", (e)=>{  
            if (contactme.style.visibility === "visible") {
                hover1.style.visibility = "hidden"
                hover11.style.visibility = "hidden"
                hover0.style.visibility = "visible"
                hover3.style.visibility = "visible"
                Aboutme.style.visibility = "hidden";
                Aboutme.style.opacity = "0"
                contactme.style.opacity = "1"


            }
            else{
            hover0.style.visibility = "hidden"
            hover1.style.visibility = "visible"
            hover11.style.visibility = "hidden"
            hover3.style.visibility = "hidden"   }})


            li2.addEventListener("mouseover", (e)=>{
                if (Aboutme.style.visibility === "visible") {
                    hover33.style.visibility = "visible"
                    hover3.style.visibility = "hidden"
                    hover1.style.visibility = "hidden"
                    hover2.style.visibility = "hidden"
                    hover0.style.visibility = "visible"
                    contactme.style.visibility = "visible"
                    Aboutme.style.opacity = "0"
                    contactme.style.opacity = "1"
                   
                   
                        }      
                        else
                        {
                        hover3.style.visibility = "visible"
                        hover33.style.visibility = "hidden"
                        hover2.style.visibility = "hidden"
                        
                        }
                         
                    })
                    li2.addEventListener("mouseout", (e)=>{  
                        if (Aboutme.style.visibility === "visible") {
                            hover1.style.visibility = "visible"
                            hover3.style.visibility = "hidden"
                            hover33.style.visibility = "hidden"
                            hover2.style.visibility = "visible"
                            contactme.style.visibility = "hidden"
                            Aboutme.style.opacity = "1"
            
                        }
                        else{
                        hover1.style.visibility = "hidden"
                        hover3.style.visibility = "visible"
                        

                     }})
                    
                

                     
                    
            
