let userInput = document.querySelector('.container .userInput');
let barcode = document.querySelector('.container .barcode-box #barcode');
let generateBtn = document.querySelector('.container .generate-btn');
let barcodeBox = document.querySelector('.container .barcode-box');

let generateBarcode =()=>{
  barcodeBox.classList.add('active');
  JsBarcode("#barcode", userInput.value, {
          background: "white",
          lineColor: "black",
  });
}

generateBtn.addEventListener('click',()=>{
  if(userInput.value != ''){
      generateBarcode();   
  }     
})
