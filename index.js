let cal = document.getElementById(`calculator`);
cal.style.border = `2px solid black`;
cal.style.padding = `10px`;
cal.style.width = `500px`;
cal.style.textAlign = `center`;

let interface = document.createElement(`div`);
interface.style.border = `2px solid black`;
interface.style.padding = `20px`;
interface.style.margin = `auto`;
cal.append(interface);

let bb = document.createElement(`button`);
let obj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};
// let arr = [`one`,`two`,`three`,`four`,`five`,
//     `six`,`seven`,`eight`,`nine`,`zero`]

// let arra =[]

for (let number of Object.keys(obj)) {
  let aa = number;
  number = document.createElement(`button`);
  // number.setAttribute(`data`,`${[aa]}`)
  // arra.push(number.getAttribute(`data`))
  number.innerText = obj[aa];
  number.style.margin = `10px`;
  number.style.padding = `5px`;
  number.style.width = `25%`;
  number.style.textAlign = `center`;
  cal.append(number);
  number.addEventListener(`click`, (event) => {
    event.preventDefault();
    interface.innerHTML += obj[aa];
  });
}
