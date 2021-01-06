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
   function read(){
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