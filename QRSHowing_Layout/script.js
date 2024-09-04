

const images = document.querySelectorAll(".im");
const hyperlinks=document.querySelectorAll(".hyper")



images.forEach((item,index) => {
    
   
    item.addEventListener("mouseover", () => {
       
        item.src = "./assets/Logo.jpg"
        item.style.borderRadius = "25px";
        item.parentElement.style.borderRadius="25px"
  
     
    });

    item.addEventListener("mouseout", () => {
        item.src = `./assets/${index+1}.png`;
        item.style.borderRadius = "5%";
        item.parentElement.style.borderRadius="5%"
    });
});



hyperlinks.forEach((item,index)=>{
    const names=["Discord","Instagram","LinkedIn","Whatsapp"];
    
    item.parentElement.addEventListener("mouseover", () => {
       item.textContent="Click Here"
       item.style.fontSize="25px"

    });

    item.parentElement.addEventListener("mouseout", () => {
       item.textContent=names[index]
        item.style.fontSize="20px"
    });
})
