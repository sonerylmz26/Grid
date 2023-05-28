const close = document.getElementById("mark");
console.log(mark);
const gridArea = document.getElementById("grid__area")
console.log(gridArea)
const minus = document.getElementById("minus")
const close2 = document.getElementById("mark2");
console.log(mark);
const gridArea2 = document.getElementById("grid__area2")
console.log(gridArea)
const minus2 = document.getElementById("minus2")

close.addEventListener("click", ()=>{
gridArea.style.display = "inline-block"
gridArea.style.margin = "1rem 11.8rem"
close.style.display = "none"
minus.style.display = "inline-block"

})
minus.addEventListener("click", ()=>{
gridArea.style.display = "none"
gridArea.style.margin = "1rem 11.8rem"
close.style.display = "inline-block"
minus.style.display = "none" 

})
close2.addEventListener("click", ()=>{
gridArea2.style.display = "inline-block"
gridArea2.style.margin = "1rem 11.8rem"
close2.style.display = "none"
minus2.style.display = "inline-block"

})
minus2.addEventListener("click", ()=>{
gridArea2.style.display = "none"
gridArea2.style.margin = "1rem 11.8rem"
close2.style.display = "inline-block"
minus2.style.display = "none" 

})



