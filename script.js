let gooIndex = document.getElementById('goo-index');
let hoverEnter = index =>{
  gooIndex.style.top = 100*index+'px';
  let allScreens = document.querySelectorAll('.screen');
  allScreens.forEach(e=>{
    e.classList.remove('visible')
  })
  let nowVisible = document.getElementById('screen_'+index);
  nowVisible.classList.add('visible');
}

//? https://jcom619.github.io/WUIv2/
//? https://image-smart-brain.herokuapp.com/
//? https://jcom619.github.io/ConnecTrivia/
//? https://petite-lydian-idea.glitch.me/



// popup
