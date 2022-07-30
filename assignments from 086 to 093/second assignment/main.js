let dollarInput = document.querySelector("[name = 'dollar']");
let result = document.querySelector(".result");

dollarInput.addEventListener("input", function () {
    let egyption = dollarInput.value * 18.91;
    result.textContent = `{${dollarInput.value}} USD Dollar = {${egyption.toFixed(2)}} Egyption Pound`;
}) 