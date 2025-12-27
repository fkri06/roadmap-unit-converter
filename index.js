const myButton = document.getElementById("myButton");

const colors = ["pink", "lightgreen", "cyan"]

myButton.addEventListener("click", () => {
    const getRandomColor = colors[Math.floor(Math.random() * 3)];
    document.body.style.backgroundColor = `${getRandomColor}`;
})