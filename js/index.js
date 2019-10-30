// Your code goes here
// keydown
const docBody = document.getElementsByTagName("BODY")[0];
docBody.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        event.target.style.background = "green";
    }
  });

// mouseover
let mainHeader = document.getElementsByClassName('logo-heading')[0];
mainHeader.addEventListener('mouseover', (event) => {
  event.target.style.background = 'yellow';    
});

let foot = document.getElementsByClassName('footer')[0];
foot.addEventListener('mouseover', (event) => {
  event.target.style.background = 'blue';    
});

let contentDest = document.getElementsByClassName('content-destination')[0];
contentDest.addEventListener('mouseover', (event) => {
  event.target.style.background = 'gray';    
});

let contentSec = document.getElementsByClassName('content-section')[0];
contentSec.addEventListener('mouseover', (event) => {
  event.target.style.background = 'lavender';    
});
// // end mouseover code

// blur

// function blurImg() {
//     document.querySelector("body > div > section.content-section.inverse-content > div.img-content > img").blur();
//     return blur();
//   };
//   end blur code
  
// // // scroll
window.addEventListener('scroll', (event) =>{
    alert('you are scrolling bro')
})
// end scroll code 

// stop propigation code
function func1(event) {
    alert("scroll");
    event.stopPropagation();
  }


// // load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

// // end load code


// // dblclick
document.getElementsByClassName('btn')[0].style.color = '#E6E6FA';
window.addEventListener('dblclick', (event)=>{
    document.getElementsByClassName('btn')[0].style.color = 'white';
})
document.getElementsByClassName('btn')[1].style.color = '#483D8B';
window.addEventListener('dblclick', (event)=>{
    document.getElementsByClassName('btn')[0].style.color = '#6A5ACD';
})
document.getElementsByClassName('btn')[2].style.color = '#7B68EE';
window.addEventListener('dblclick', (event)=>{
    document.getElementsByClassName('btn')[0].style.color = '#DDA0DD';
})

// prevent default code
let navLinks = document.querySelector('nav').addEventListener('dblclick', function (event){
    alert('Sorry bro, you cant click this'); 
    event.preventDefault();
})

