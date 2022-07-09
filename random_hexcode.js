document.querySelector("#submit").addEventListener("click", () => {
    //array of a hex code
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

    //variable that holds the hex code values
    var hexcode1 = "";
    var hexcode2 = "";
    var random_index = 0;
    
    //generate the random hex code, 5 times (5 digits per hex code)
    for(let i = 0; i < 6;i++){
      random_index = Math.floor(Math.random() * hex_numbers.length); //math.floor removes decimal points.
        hexcode1 += hex_numbers[random_index];
      random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode2 += hex_numbers[random_index];
    }
  
    document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
    document.querySelector("#hexcode1").textContent = hexcode1;
    document.querySelector("#hexcode2").textContent = hexcode2;
  });