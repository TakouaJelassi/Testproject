let menus = ['Pizza Salami', 'Pizza Fonghi', 'Pizza Margherita', 'Pizza Tonno']; 
let prices = [12.95, 11.70 , 10.99, 15.60 ];
let amounts = [1 , 3 , 5 , 2];

function getValueFromInput(index){
  return document.getElementById(index).value;
} 

function getMenuFromInput(){
  return getValueFromInput('menu').trim();
}

function getPriceFromInput(){
  return + getValueFromInput('price');
} 

function onAddMenu(){
    let value = getMenuIndex(getMenuFromInput());
    if(value ===-1){
        menus.push(getMenuFromInput());
        prices.push(getPriceFromInput());
        amounts.push(1);
    }
   else{
    amounts[value]++;
   }
}

function getMenuIndex(index){
    let menu = menus.indexOf(index);
    return menu;
  }