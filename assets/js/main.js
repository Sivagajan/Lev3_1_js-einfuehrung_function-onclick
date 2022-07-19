console.log('funzt')

let background = document.getElementById('background')
let heading = document.getElementById('h1')

function change1(){
    document.getElementById('background').style.backgroundColor = 'green';
    document.getElementById('h1').style.color = 'blueviolet'
}
function change2(){
    document.getElementById('background').style.backgroundColor = 'rgb(59, 60, 67)';
    document.getElementById('h1').style.color = 'rgb(200, 165, 5)'
}
function change3(){
    document.getElementById('background').style.backgroundColor = 'rgb(0, 0, 0)';
    document.getElementById('h1').style.color = 'rgb(254, 135, 0)'
}
function change4(){
    document.getElementById('background').style.backgroundColor = 'rgb(29, 0, 220)';
    document.getElementById('h1').style.color = 'rgb(23, 197, 245)'
}