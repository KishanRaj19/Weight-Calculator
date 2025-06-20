const poundsInput = document.getElementById("pounds");
const output = document.getElementById("output");
let timeoutId; 

poundsInput.addEventListener("input", () => {
    const pounds = parseFloat(poundsInput.value);

    if (!isNaN(pounds)) {
        const kilograms = (pounds * 0.45359237).toFixed(2);
        output.textContent = `Your weight in kg is: ${kilograms}`;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            poundsInput.value = "";
            output.textContent = "Your weight in kg is:";
        }, 10000);
    } else {
        output.textContent = "Your weight in kg is:";
        clearTimeout(timeoutId); 
    }
});
