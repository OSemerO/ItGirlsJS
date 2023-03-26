'use strict'

function showMe () {
console.log("Я учу JavaScript!");
}

showMe();

const show = () => console.log("Я учу JavaScript!");

show();

const blockFoto = document.getElementByClass("image");

const nextShow = () => {
  blockFoto.style.backgroundImage = "url('https://old.bigenc.ru/media/2016/10/27/1235153355/3761.jpg')";
  console.log(block);
};

const backShow = () => {
  blockFoto.style.backgroundImage = "url('https://sun9-76.userapi.com/impg/c_XdhklPf_RfWuTQr1I1wS8v7pSKkpW4hOMDwQ/UV3H6kXmZIY.jpg?size=807x534&quality=96&sign=138f5aca1360f4b1f3bc82a758a3e8cc&type=album')";
  console.log(block);
};


let year = 2023;
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log('Високосный');
} else {
    console.log('Не високосный');
};