let h1_array = Array.from(document.getElementsByTagName("h1"));
let block_array = Array.from(document.getElementsByTagName("blockquote"));
const body = document.querySelector("body");

for (let i = 0; i < h1_array.length; i++) {
  h1_array[i].addEventListener("click", () => {
    h1_array[i].classList.toggle("opened");
    block_array[i].classList.toggle("showAnswer");
  });
}


function setCookie(cookieName, cookieValue, valDays) {
  const date = new Date();
  date.setTime(date.getTime() + valDays * 24 * 3600 * 1000);
  document.cookie =
    cookieName +
    "=" +
    cookieValue +
    "; expires=" +
    date.toUTCString() +
    "; path=/";
}

function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    c = c.trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

bgcolor.addEventListener("change", () => {
  const color = bgcolor.value;
  setCookie("change_color", color, 2);
  body.style.background = color;
});

body.style.background = getCookie("change_color");
bgcolor.value = getCookie("change_color");
