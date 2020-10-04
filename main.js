/*-----TASK 1-----*/
let countryList = [
    {
        country: "Україна",
        capital:"Київ",
        count: 40000000,
    },
    {
        country: "Грузія",
        capital:"Тбілісі",
        count: 10000000
    },
    {
        country: "Великобританія",
        capital:"Лондон",
        count: 100000000

    },
    {
        country: "США",
        capital:"Вашингтон",
        count: 300000000
    },
    {
        country: "Англія",
        capital:"Лондон",
        count: 80000000
    },
    {
        country: "Франція",
        capital:"Париж",
        count: 85000000
    }
    ];

let divOutTask1 = document.getElementById('div_Out_Task1');
let tableTask1 = document.createElement('table');

let OutCountryList = (e,domE1,domE2) => {
    e.forEach((elem,num) => {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = num + 1 +')';
        for (let i = 0; i < elem.length; i++) {

        }
        tr.appendChild(td);

        for (let key in elem) {
            let td = document.createElement('td');
            td.innerHTML = elem[key];
            if (elem[key] === 'Україна') {
                td.style.color = 'blue';
            }
            if (elem[key] === 'Київ') {
                td.style.color = 'yellow';
            }
            if (key === 'count') {
                td.innerHTML = (elem.count / 1000000 + ' mil');
            }
            tr.appendChild(td);
        }
        domE1.appendChild(tr);
    })
    domE2.appendChild(domE1)
}

OutCountryList(countryList,tableTask1,divOutTask1);


/*-----TASK 2-----*/

let squareColors = [];
let hotColors = ["#CC0605", "#FFB940", "#FFFF00", "#99FF99", "#FDBCB4"];
let coldColors = ["#926DAD", "#324AB2", "#1F75FE", "#00BFFF","#1BAB76"];

const BUTTON_COLOR_CHANGE = document.getElementById('btn-change-color');
const RADIO_COLOR_INPUT = document.getElementsByName('colRadio');
const BUTTON_ADD_SQUARE = document.getElementById('btn-add-square');
const BUTTON_REMOVE_SQUARE = document.getElementById('btn_remove_square');
const BUTTON_SELECT_FIRST_SQUARE = document.getElementById('btn_select_first_square');
const BUTTON_SELECT_NEXT_SQUARE = document.getElementById('btn_select_next_square');

let change_color = ChangeColor();

BUTTON_COLOR_CHANGE.addEventListener('click',RadioCheck);
BUTTON_COLOR_CHANGE.addEventListener('click',change_color);
BUTTON_ADD_SQUARE.addEventListener('click',AddSquare);
BUTTON_REMOVE_SQUARE.addEventListener('click',RemoveSquare);
BUTTON_SELECT_FIRST_SQUARE.addEventListener('click',SelectFirstSquare);
BUTTON_SELECT_NEXT_SQUARE.addEventListener('click',SelectNextSquare);



//Функція зміни кольору на рандомний
function ChangeColor() {
    let counter = 0;
    let square = document.getElementById('square');
    return function() {
        if (RADIO_COLOR_INPUT[2].checked) {
            let randomColor = Math.floor(0 - 0.5 + Math.random() * 16777217);
            randomColor = parseInt(randomColor, 10).toString(16);
            square.style.background = '#' + randomColor;
        }
        else {
            if (counter < squareColors.length) {
                square.style.background = squareColors[counter];
            }
            else {
                counter = 0;
                square.style.background = squareColors[counter];
            }
            counter++;
        }
    }
}

//Функція яка дозволяє змінити колір на той в залежності від вибраного радіобатона
function RadioCheck() {
    if (RADIO_COLOR_INPUT[0].checked) {
        squareColors = hotColors;
    }
    else if (RADIO_COLOR_INPUT[1].checked) {
        squareColors = coldColors;
    }
}

let node = null;

//Функція що дозволяє додати квадрат
function AddSquare() {
    let squares = document.getElementById('id_squares');
    let divNewSquare = document.createElement('div');
    divNewSquare.classList.add('class_square');
    squares.appendChild(divNewSquare);
}

function RemoveSquare() {
    let squares = document.getElementById('id_squares');
    let item = squares.lastChild;
    if (item !== null) {
        squares.removeChild(item);
    }
}

function SelectFirstSquare() {
    let squares = document.getElementById('id_squares');
    let item = squares.firstChild
    if (item !== null) {
        item.classList.add('selected_square');
    }
}



