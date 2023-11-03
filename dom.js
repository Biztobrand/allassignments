const el = document.querySelector('.myclass');
console.log(el);


const matches = document.querySelectorAll("p");
console.log(matches);

const fourthPara = document.getElementById("forthP").innerHTML = "Fourth Paragraph"
console.log(fourthPara);

const thirdP = document.getElementsByClassName("thirdPara").innerHTML = "Third Paragraph"
console.log(thirdP);


const attributeSet = document.querySelector('p');
attributeSet.setAttribute("class", "settingclass")
attributeSet.setAttribute("id", "settingId")

console.log(attributeSet)

// const thirdpa = document.querySelector(".thirdpara")
// thirdpa.setAttribute("id", "thrd")
// console.log(thirdpa)

document.getElementById("secondPara").style.color = "white"
document.getElementById("secondPara").style.backgroundColor = "blue"
document.getElementById("secondPara").style.fontSize = "24px"
document.getElementById("secondPara").style.border = "solid 5px black"



const colorChanging = document.querySelector('h1')
// do {
//     console.log(1)
//     setInterval(() =>  {
//         document.querySelector('h1').style.color = 'red'
        
//     },2000)
// }while(colorChanging.style.color=='black')


// const i = 0
// do {
//     console.log(1)
//     i++
// }while(i<=0)


let hau=true;
setInterval(() =>  {
   
              if(hau){
                  colorChanging.style.color = 'red'
                  hau=false;
              }else{
                colorChanging.style.color = 'black'
                hau=true;
              }
},1000)



     


