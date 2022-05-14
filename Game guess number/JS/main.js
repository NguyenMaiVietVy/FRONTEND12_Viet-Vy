document.querySelector('#checkbox').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkmode', isDarkMode);
    // chang mobile status bar color
    document.querySelector('meta[name="theme-color"').setAttribute('content', isDarkMode ? '#1a1a2e' : '#fff');
});

const start_screen = document.querySelector('#start-screen');
const name_input = document.querySelector('#input-name');

let level_index = 0;
let level = CONSTANT.LEVEL[level_index];

document.querySelector('#btn-level').addEventListener('click', (e) =>{
    level_index = level_index + 1 > CONSTANT.LEVEL.length - 1 ? 0 : level_index + 1;
    level = CONSTANT.LEVEL[level_index];
    const SaveLevel = localStorage.setItem('Level',level_index);
    e.target.innerHTML = CONSTANT.LEVEL_NAME[level_index];
});

var max = 30;
var Random = Math.floor(Math.random()*max);


// var a=0;
function getValue(number)
{
    if(number==Random)
    {
        alert('Win');    
        return 0;
    }
    else {
        alert('Thua');
    }
    localStorage.setItem('number',number);        
}

document.querySelector('#btn-play').addEventListener('click', () => {
    if (name_input.value.trim().length > 0) {
    {
        var SaveName = document.getElementById('input-name').value;
        localStorage.setItem('Name', SaveName);
        let LevelSave = localStorage.getItem('Level');
        var temp = document.getElementById('main-number-grid');
        if(LevelSave == 0) 
        {
            temp.innerHTML="";
            const numberAdd = document.getElementById('main-number-grid');
            const lengthNumber = CONSTANT.NUMBER_EASY;
            for(let key of lengthNumber)
            {
                let newItem = document.createElement('div');
                newItem.textContent = key;
                newItem.setAttribute('onclick','getValue('+key+')');
                newItem.classList.add("main-grid-cell");
                numberAdd.appendChild(newItem);
            }
        }
        else if(LevelSave == 1) {
            temp.innerHTML="";
            const numberAdd = document.getElementById('main-number-grid');
            const lengthNumber = CONSTANT.NUMBER_MEDIUM;
            for(let key of lengthNumber)
            {
                let newItem = document.createElement('div');
                newItem.textContent = key;
                newItem.setAttribute('onclick','getValue('+key+')');
                newItem.classList.add("main-grid-cell");
                numberAdd.appendChild(newItem);
            }
        }
        else if(LevelSave == 2) {
            temp.innerHTML="";
            const numberAdd = document.getElementById('main-number-grid');
            const lengthNumber = CONSTANT.NUMBER_HARD;
            for(let key of lengthNumber)
            {
                let newItem = document.createElement('div');
                newItem.textContent = key;
                newItem.setAttribute('onclick','getValue('+key+')');
                newItem.classList.add("main-grid-cell");
                numberAdd.appendChild(newItem);
            }
        }
        console.log(Random);
    }
    } else {
        name_input.classList.add('input-err');
        setTimeout(() => {
            name_input.classList.remove('input-err');
            name_input.focus();
        }, 500);
    }
});


const init = () => {
    const darkmode = JSON.parse(localStorage.getItem('darkmode'));
    document.body.classList.add(darkmode ? 'dark' : 'light');
    document.querySelector('meta[name="theme-color"').setAttribute('content', darkmode ? '#1a1a2e' : '#fff');
    
}
init();


