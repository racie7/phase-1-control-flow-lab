function scuberGreetingForFeet(ride){
  let message
  if (ride <= 400){
    message = 'This one is on me!';
   }
   if (ride > 200 && ride < 4000 ){
    message = 'That will be twenty bucks.';
   }
   if (ride > 2000 && ride <= 2500 ){
    message = 'I will gladly take your thirty bucks.';
   }
   if (ride > 2500 ){
    message = 'No can do.';
   }

   return message
}

function ternaryCheckCity(city){
  let message
  if(city == 'NYC'){
    message = 'Ok, sounds good.';
  }
  else {
    message = 'No go.';
  }
 
  return message
}


function switchOnCharmFromTip(tip){
  let message
  if(tip == 'generous'){
    message = 'Thank you so much.';
  }
  else if(tip == 'not as generous'){
    message = 'Thank you.';
  }
  else{
    message = 'Bye.'
  }
  return message;
}