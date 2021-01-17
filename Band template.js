document.getElementById("btn_toggol").addEventListener("click",function(){
    var box1 = document.getElementById("navbar-links");
    var search1 = document.getElementById("Search");
    if(box1.style.display=="none")
    {
        box1.style.display="grid" ;
        search1.style.display="block"
    }
    else
   {
       box1.style.display="none"; 
       search1.style.display="none"
   }
   })

   var more = document.getElementById('more');
   var dot = document.getElementById('dot');
   var read_more = document.getElementById('read_more');
   read_more.onclick =  function read(){
    if(more.style.display=="none"){
        more.style.display="inline";
        dot.style.display="none";
        document.getElementById("read_more").innerHTML="Read Less <<" ;
    }
    else {
         more.style.display="none";
         dot.style.display="inline";
         document.getElementById("read_more").innerHTML="Read More >>" ; 
    }
}
let i=5;

const bg= document.querySelector(".cover");
setInterval(() => {
     i++;
     bg.style.backgroundImage ='url(' + (i) + '.jpg)' ;
     
     if(i==12){
         i=5;
     }
}, 4000);