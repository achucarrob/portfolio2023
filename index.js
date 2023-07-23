// function button(){
//     onclick="document.getElementById('cerrarMenu')";
// }

const target = document.getElementById('toggle')
const btn = document.querySelector('#cerrarMenu')

// btn.onclick = 
// function mostrar(){
//     target.style.display='block'
// };

btn.addEventListener("click", () => {
    console.log("hola")
    target.style.display = "none"
})