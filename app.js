/*Alapérték felvétele
let count = 0;
//Gombok és egyéb elemek eltárolása változóba
const value = document.getElementById("value");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

//Egyszerű, Lusta módszer

increase.addEventListener("click", ()=>{
    //növelem az alapértéket eggyel
    count++;
    //Megnézem, hogy az alapértékem nagyobb-e, mint 0
    if(count > 0){
//ha nagyobb hozzáadjuk  a zöldszínt
        value.style.color = "green"
    }
//majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek
    value.textContent = count;
})

decrease.addEventListener("click", ()=>{
    //növelem az alapértéket eggyel
    count--;
    //Megnézem, hogy az alapértékem nagyobb-e, mint 0
    if(count < 0){
//ha nagyobb hozzáadjuk  a zöldszínt
        value.style.color = "red"
    }
//majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek
    value.textContent = count;
})

reset.addEventListener("click", ()=>{
    //növelem az alapértéket eggyel
    count = 0;
    //Megnézem, hogy az alapértékem nagyobb-e, mint 0
    
//ha nagyobb hozzáadjuk  a zöldszínt
    value.style.color = "black"

//majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek
    value.textContent = count;
}) */

//Alapérték felvétele
let count = 0;
//Gombok és egyéb elemek eltárolása változóba
const value = document.getElementById("value");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");

const btns = document.querySelectorAll(".btn");

console.log(btns);
//Ciklussal végig lépkedek az eltárolt gombokon, amiken rajta van a btn Class

btns.forEach((btn)=>{

        btn.addEventListener("click", (e)=>{

            const style = e.currentTarget.classList;
            console.log(style);

            if(style.contains("decrease")){

                count--;
            }

            else if(style.contains("increase")){

                count++;
            }

            else{

                count = 0;
            }

            if(count > 0){

                value.style.color="green";
            }

            else if(count < 0){

                value.style.color="red";
            }
            
            else{

                value.style.color="black";
            }

            value.textContent = count;
        })


})