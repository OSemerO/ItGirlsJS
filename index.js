const urlElement = document.getElementById("url");
const textElement = document.getElementById("text");
const commentElement = document.getElementById("comment");
let comment = commentElement.textContent;

const buttonElement = document.querySelector(".send");
const blockElement = document.querySelector(".comments__block");
const arr = [
  "https://disney-classic.ru/wp-content/uploads/2022-06-14_15-12-53-300x290.png",
  "https://upload.wikimedia.org/wikipedia/ru/thumb/f/fe/James_P_Sullivan.jpg/280px-James_P_Sullivan.jpg",
  "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg",
  "https://img.rl0.ru/afisha/-x-q85i/s2.afisha.ru/mediastorage/39/15/4d6179bcd85c4ea5a7c564111539.jpg",
  "https://kartinkof.club/uploads/posts/2022-04/1649784841_1-kartinkof-club-p-rzhachnie-kartinki-osel-iz-shreka-1.jpg",
];

buttonElement.addEventListener("click", () => {
  let url = "";
  console.log(!urlElement.value);
  if (!urlElement.value) {
    const indexArr = Math.floor(Math.random() * 5);
    console.log();
    url = arr[indexArr];
  } else {
    url = urlElement.value;
  };

  const text = textElement.value;
  const arrFio = text.split(" ");

  function checkedWord(word) {
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;
  };
  
  let surname = checkedWord(arrFio[0]);
  let nameUser = checkedWord(arrFio[1]);
  let patronim = checkedWord(arrFio[2]);
  console.log(surname);

  const totalString = `${surname} ${nameUser} ${patronim}`;

  blockElement.innerHTML = `
      <div class="border">
        <img
          src=${url}
          alt="картинка"
          class="imgUserAvatar"
        />
        <p class="text">${totalString}</p>
        <p class="text>${comment}</p>
      </div>
    `;
});

