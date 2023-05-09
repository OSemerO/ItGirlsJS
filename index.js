// переменные для получения данных, что ввел пользователь

let nameElement = document.getElementById("name_input").value;
let urlElement = document.getElementById("url_input").value;
let commentElement = document.getElementById("message").value;
let comment = commentElement.textContent;

console.log(nameElement);
console.log(urlElement);
console.log(commentElement);

// находим кнопку и место под вывод сообщений в чат
const buttonElement = document.querySelector(".button");
let chatElement = document.querySelector(".chat");

// работа с датой

const commentDate = () => { 
let date = new Date(); 
document.querySelector('.date').innerText = date;        
};
commentDate(); 


// работаем с данными, что ввел пользователь - делаем массив 
let userNameArr = nameElement.split(' ');   

// функция на проверку верхних/нижних регистров
function checkedWord(word) {
  return `${word.slice(0, 1).toUpperCase()} ${word.slice(1).toLowerCase()}`;
};

// заводим новые переменные для вытащенных из массива данных пользователя и приведенных к регистру

let surname = checkedWord(userNameArr[0]);
let nameUser = checkedWord(userNameArr[1]);
let patronim = checkedWord(userNameArr[2]);

// собираем общее ФИО

const totalName = `${surname} ${nameUser} ${patronim}`;
    
 // проверка на спам
let commentChecked = () => {
  let checkSpam = comment.replace(/viagra/gi, "цензура").replace(/xxx/gi, "цензура");
  return checkSpam;
};

// let re = /яблоки/gi;
// let str = 'Яблоки круглые и яблоки сочные.';
// let newstr = str.replace(re, 'апельсины');
// console.log(newstr); // апельсины круглые и апельсины сочные.

// собираем все элементы для чата 

document.querySelector('.username').innerText = `<div class="username">${checkedWord()}</div>`;

document.querySelector('.message').innerHTML = `<div class="message__wrap">${commentChecked()}</div>`;  

document.querySelector('.avatar').innerHTML = `<div class="avatar" img src="${avatar}">`; 

/* функция для рандомного вывода аватарки */

const avatarRandom = () => {
  const avatar = document.getElementById('url_input');
  const avatarValue = avatar.value;
  if (avatarValue == "")  {
    /* массив с аватарками для пользователя */
  const arr = [
  "https://disney-classic.ru/wp-content/uploads/2022-06-14_15-12-53-300x290.png",
  "https://upload.wikimedia.org/wikipedia/ru/thumb/f/fe/James_P_Sullivan.jpg/280px-James_P_Sullivan.jpg",
  "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg",
  "https://img.rl0.ru/afisha/-x-q85i/s2.afisha.ru/mediastorage/39/15/4d6179bcd85c4ea5a7c564111539.jpg",
  "https://kartinkof.club/uploads/posts/2022-04/1649784841_1-kartinkof-club-p-rzhachnie-kartinki-osel-iz-shreka-1.jpg",
  "https://cs13.pikabu.ru/post_img/2023/01/30/9/16750925851227285.jpg",
];
console.log(!urlElement.value);
if (!urlElement.value) {
  const indexArr = Math.floor(Math.random() * 6);
  console.log();
  url = arr[indexArr];
} else {
  url = urlElement.value;
}
}
};

/* обработчики событий на кнопку  */

button.addEventListener('click', avatarRandom());
button.addEventListener('click', commentChecked()); 
