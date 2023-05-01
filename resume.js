
// ---------------------------------Scroll Effect
let getAnchor = document.querySelectorAll("a");

for(let element of getAnchor){
    element.addEventListener("click",function(event){
        event.preventDefault();
        let targetSectionID = element.hash.replace("#","");
        let targetSection = document.getElementById(targetSectionID);
        let interval = setInterval(function(){
            let targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,20);
        },5);
    });
}

// ---------------------------- Auto Fill Skills on Scroll

// let progressBar = document.getElementsByClassName("percent");
// let skillsContainer = document.getElementById("skills-container")

// window.addEventListener("scroll",checkScroll);
// let animationDone = false;
// function initialiseBars(){
//     for(let bar of progressBar){
//         bar.style.width = 0 + "%";
//     }
// }

// initialiseBars();
// function fillBars(){
//     for(let bar of progressBar){
//         let targetWidth = bar.getAttribute("data-bar-width");
//         let currentWidth = 0;

//         let interval = setInterval(function(){
//             if(currentWidth > targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth + "%";
//         },1);
//     }
// }

// function checkScroll(){
//     let skillsContainerCoord = skillsContainer.getBoundingClientRect();
//     if(!animationDone && skillsContainerCoord.top <= window.innerHeight){
//         animationDone = true;
//         fillBars();
//     }
//     else if(skillsContainerCoord.top > window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }
// }

// Filling Individual bars--------------------

let progressBar = document.getElementsByClassName("percent");

window.addEventListener("scroll",checkScroll);

function initialiseBars(){
    for(let bar of progressBar){
        bar.style.width = 0 + "%";
        bar.setAttribute("data-visited", false)
    }
}
initialiseBars();

// Filling -----------
function fillBars(element){
    let currentWidth = 0;
    let targetWidth = element.getAttribute("data-bar-width");

    let interval = setInterval(function(){
    if(currentWidth > targetWidth){
        clearInterval(interval);
        return;
    }
    currentWidth++;
    element.style.width = currentWidth + "%";
},5);
}

function checkScroll(){

    for(let element of progressBar){
        let coords = element.getBoundingClientRect();
        if(element.getAttribute("data-visited")== "false" && (coords.top <= window.innerHeight)){
            element.setAttribute("data-visited", true);
            fillBars(element);
        }else if(coords.top > window.innerHeight){
            element.setAttribute("data-visited", false);
            element.style.width = 0 + "%";
        }
    }
}