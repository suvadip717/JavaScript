const form = document.querySelector("form");

// console.log(form)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
//   console.log(height)

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }else
  if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  }
  else{
    const bmi=(weight/((height/100)**2)).toFixed(2)
    results.innerHTML=`BMI is ${bmi} kg/m2`
  }
});
