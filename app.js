const element = document.getElementById('box')
const doMagic = () =>{
    console.log(1);
    element.style.background = getRandomColor();

    let id = getNewID() || 'trythegame';
    element.id = id
    element.innerHTML = id;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const getNewID = () => `idis${Math.random().toString(36).substring(7)}`


setInterval(()=>{
    doMagic();
},200)
  