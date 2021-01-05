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