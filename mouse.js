console.clear();
 const div=document.querySelector("div");
// div.addEventListener("click",()=>{
//     console.log("clicked");
// });
// div.addEventListener("mousedown",()=>{
//     console.log("mouse is down");
// });
// div.addEventListener("mouseup",()=>{
//     console.log("mouse is upped");
// });
// div.addEventListener("click",()=>{
//     console.log("clicked");
// });
// div.addEventListener("dblclick",()=>{
//     console.log("mouse is double clicked clicked");
// });
// div.addEventListener("click",()=>{
//     console.log("clicked");
// });
// div.addEventListener("mouseenter",()=>{
//     console.log("mouse is entereed ");
// });
// div.addEventListener("mousemove",(e)=>{
//     console.log("clientX="+e.clientX+"  clientY="+e.clientY);
// });

// div.addEventListener("mousemove",(e)=>{
//     console.log("offsetX="+e.offsetX+"  offsetY="+e.offsetY);
// });
// div.addEventListener("mouseleave",()=>{
//     console.log("mouse is leaved");
// })
// div.addEventListener("click",(e)=>{
//     console.log(e.target.innerText);
// })
// var buttons=document.querySelectorAll(".btn");
// Array.from(buttons).map((button)=>{
//     button.addEventListener("click",(e)=>{
//         var text=e.target.innerText;
//         console.log(text +" is clicked");
//     })
// })
console.clear();
var textarea=document.querySelector("textarea");
 textarea.addEventListener("keydown",(e)=>{
   if(e.repeat){
       alert (' please no repeat')
   }
    
   
})

// textarea.addEventListener("keypress",()=>{
//     console.log("key is pressed"); 
//  });

//  textarea.addEventListener("keyup",(e)=>{
//     console.log(e.code); 
//  });