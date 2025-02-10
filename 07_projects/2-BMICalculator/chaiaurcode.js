const form = document.querySelector('form');

// This use case will give you empty values from text boxes

/* const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value); */

form.addEventListener('submit', function (event){
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter valid height";
    } else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter valid weight";
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        // show the result

        result.innerHTML = `<span>${bmi}</span>`
    }
});