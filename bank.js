// lonin button event  handler
document.getElementById('login').addEventListener('click',function(){
    document.getElementById('login-area').style.display="none";
    document.getElementById('transaction-area').style.display="block";
})
// Deposit button event handler
document.getElementById('addDeposit').addEventListener('click',function(){
var depositNumber=getInputNumber('depositAmount');
 updateSpanText('currentDeposit',depositNumber);
 updateSpanText('currentBalance',depositNumber);
  document.getElementById('depositAmount').value='';
})
// withdraw button event handler
document.getElementById('addWithdraw').addEventListener('click',function(){
   var withdrawNumber=getInputNumber('withdrawAmount');
   updateSpanText('currentWithdraw',withdrawNumber);
   updateSpanText('currentBalance',-1 * withdrawNumber);
   document.getElementById('withdrawAmount').value='';
})

function getInputNumber(id){
    var amount=document.getElementById(id).value;
    var amountNumber=parseFloat(amount);
    return amountNumber;
}


function updateSpanText(id,addedNumber){
    var current=document.getElementById(id).innerText;
    var currentNumber=parseFloat(current);
    var totalAmount=addedNumber+currentNumber;
    document.getElementById(id).innerText=totalAmount;
}