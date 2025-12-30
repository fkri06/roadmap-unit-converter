const unitValue = document.getElementById("unitValue");
const unitFrom = document.getElementById("unitFrom");
const unitTo = document.getElementById("unitTo");
const button = document.getElementById("button");
const msg = document.getElementById("msg");

const unitFactors = {
    "millimeter": 0.001,
    "centimeter": 0.01,
    "meter": 1,
    "kilometer": 1000,
    "inch": 0.0254,
    "foot": 0.3048,
    "yard": 0.9144,
    "mile": 1609.344
}

button.addEventListener("click", () => {
    if (unitValue.value === "" || unitFrom.value === "" || unitTo.value === "") {
        msg.textContent = `Error: field empty`;
    } else {
        msg.textContent = ``;
    }

})
