const morseCode = {
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":".",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    " ":" ",
    ".":".-.-.-",
    ",":"--..--",
    "?":"..--..",
    "'":".----.",
    "(":"-.--.",
    ")":"-.--.-",
    ":":"---...",
    "=":"-...-",
    "+":".-.-.",
    "-":"-....-",
    "_":"..--.-",
    "@":".--.-."
  };
  
  const textToMorse = document.getElementById("textToMorse");
  const morseToText = document.getElementById("morseToText");
  const clear = document.getElementById("clear");
  
  
  textToMorse.addEventListener("click",textMorse);
  morseToText.addEventListener("click",morseText);
  clear.addEventListener("click",function(){
    document.getElementById("code").value=" ";
    document.getElementById("result").textContent=" ";
  })
  
  function textMorse(){
      let text = document.getElementById("code").value;
      text = text.toLowerCase();
      console.log(text);
      let output = " ";
      for(let i = 0; i < text.length; i++){
        output += morseCode[text.charAt(i)];
        output += " ";
      }
      document.getElementById("result").textContent = output;
  }
  
  function morseText(){
    let text = document.getElementById("code").value;
    let output = " ";
    let arr = text.split(' ').map(function(val){
      for(var key in morseCode){
        if(val === morseCode[key]){
          output+=key;
        }
      }
      document.getElementById("result").textContent = output;
    });
  }