const gradients = [
  {
    key: "violent-green",
  },
  {
    key: "red-green",
  },
  {
    key: "blue-white",
  },
  {
    key: "black-brown",
  },
  {
    key: "toxicGreen-yellow",
  },
  {
    key: "blue-pink",
  },
  {
    key: "green-yellow",
  },
];

const font = [
  { key: "lato" },
  { key: "mont-serrat" },
  { key: "open-sans" },
  { key: "roboto" },
  { key: "ubuntu" },
];

const classEdit = (array, tag, target) => {
  if (tag.classList[0] !== target) {
    array.forEach((el) => {
      tag.classList.remove(el.key);
      tag.classList.add(target);
    });
  }
};

const html = document.querySelector("html");
const body = document.querySelector("body");

export { font, gradients, classEdit, html, body };
