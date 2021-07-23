

let calculate = (percent) => {
  let bill = document.getElementById("bill").value;
  let people = document.getElementById('numberPeople').value;

  if (people != 0) {
    document.getElementById('error-span').classList.remove('error-span');
    document.getElementById('numberPeople').classList.remove('error-input');
  
    let totalTip = (parseFloat(bill) * parseFloat(percent)) / parseFloat(people);
    document.getElementById('tip-amount').innerHTML = formatter.format(totalTip);
  
    let total = (parseFloat(bill) + parseFloat(totalTip)) / parseInt(people);
    document.getElementById('total').innerHTML = formatter.format(total); 
    
  } else {
    document.getElementById('error-span').classList.add('error-span');
    document.getElementById('numberPeople').classList.add('error-input');
    document.getElementById('numberPeople').classList.add('animate__animated');
    document.getElementById('numberPeople').classList.add('animate__shakeX');
  }

  console.log(percent)
};


let numberValidation = (event) => {
  if(event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46){
    return true;
   }
   return false;        
}



let reset = () => {
  document.getElementById("bill").value = 0;
  document.getElementById('numberPeople').value = 0;
  document.getElementById("tip-amount").innerHTML = "$0.00";
  document.getElementById('total').innerHTML = "$0.00";
  document.getElementById('custom-input').value = '';

}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2 
});