const body = document.querySelector("body");
const main_page_box = document.querySelector(".main_page_box");
const sticky_number = document.querySelector(".sticky_number");
const sticky_info = document.querySelector(".sticky_info");

const midLine = document.querySelector("hr"); ///////

const contentNumber = document.querySelector(".content_number")
const contentTitle = document.querySelector(".content_title")
const contentInfo = document.querySelector(".content_info")

const content_1 = document.querySelector(".content_1")
const content_2 = document.querySelector(".content_2")
const content_3 = document.querySelector(".content_3")
const content_4 = document.querySelector(".content_4")

window.onload = () => {
    window.scrollTo(0,0)
}


const pos1 = content_1.getBoundingClientRect(); //- get Div position
const pos2 = content_2.getBoundingClientRect();
const pos3 = content_3.getBoundingClientRect();
const pos4 = content_4.getBoundingClientRect();

const pos1_mid = pos1.y + (pos1.height/2)
const pos2_mid = pos2.y + (pos2.height/2)
const pos3_mid = pos3.y + (pos3.height/2)
const pos4_mid = pos4.y + (pos4.height/2)



let contentInfoArray = [
    {   
        number: "01",
        title: "Study Hub",
        info: "Co-working space"
    },
    {
        number: "02",
        title: "Photo Studio",
        info: "Photography"
    },
    {
        number: "03",
        title: "Home Furniture",
        info: "Couches and stuffs"
    },
    {
        number: "04",
        title: "Tutorial Center",
        info: "Tutors"
    }

];

let pos;
let currentPos;
let middleScreen;

midLine.style.top = `${window.innerHeight/2}px`
sticky_info.style.top = `${(window.innerHeight/2)-120}px`





//////////////////////////- SCROLL- //////////////////////////////
window.addEventListener('scroll', () => {
    middleScreen = (window.innerHeight/2) + window.scrollY

    currentPos = window.scrollY //- scroll position Y


    if((middleScreen >= window.innerHeight) && (middleScreen <= window.innerHeight + ((window.innerHeight*0.8)*4))){
        sticky_number.style.transform = "translateX(00%)";
        sticky_number.style.opacity = "1";
        sticky_info.style.transform = "translateX(00%)";
        sticky_info.style.opacity = "1";
    } else {
        sticky_number.style.transform = "translateX(-100%)";
        sticky_number.style.opacity = "0";
        sticky_info.style.transform = "translateX(-100%)";
        sticky_info.style.opacity = "0";

    }


    console.log(window.scrollY)

    if((middleScreen >= window.innerHeight) && (middleScreen <= window.innerHeight + ((window.innerHeight*0.8)*1))){
        console.log("mid of 1")

        contentNumber.textContent = `${contentInfoArray[0].number}`
        contentTitle.textContent = `${contentInfoArray[0].title}`
        contentInfo.textContent = `${contentInfoArray[0].info}`
    }
    if((middleScreen >= window.innerHeight + ((window.innerHeight*0.8)*1)) && (middleScreen <= window.innerHeight + ((window.innerHeight*0.8)*2))){
        console.log("mid of 2")

        contentNumber.textContent = `${contentInfoArray[1].number}`
        contentTitle.textContent = `${contentInfoArray[1].title}`
        contentInfo.textContent = `${contentInfoArray[1].info}`
    }
    if((middleScreen >= window.innerHeight + ((window.innerHeight*0.8)*2)) && (middleScreen <= window.innerHeight + ((window.innerHeight*0.8)*3))){
        console.log("mid of 3")

        contentNumber.textContent = `${contentInfoArray[2].number}`
        contentTitle.textContent = `${contentInfoArray[2].title}`
        contentInfo.textContent = `${contentInfoArray[2].info}`
    }
    if((middleScreen >= window.innerHeight + ((window.innerHeight*0.8)*3)) && (middleScreen <= window.innerHeight + ((window.innerHeight*0.8)*4))){
        console.log("mid of 4")

        contentNumber.textContent = `${contentInfoArray[3].number}`
        contentTitle.textContent = `${contentInfoArray[3].title}`
        contentInfo.textContent = `${contentInfoArray[3].info}`
    }


}); //////////////////////////-END-///////////////////////////



const clicker = document.querySelector(".intro_container")

clicker.addEventListener("click", e => {
    clicker.style.transform = "rotateX(90deg)"
})

const my_name = document.querySelector(".my_name");
const my_title = document.querySelector(".my_title");

my_name.style.transform = "translate(0%)"
my_title.style.transform = "translate(0%)"

// setInterval(()=> {
//     console.log("Loaded")
//     setTimeout(()=> {
//         console.log("Loaded 2")
//     }, 3000)
// }, 3000)

