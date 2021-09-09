const _= require('lodash');

const numbers = [12,122,1222,12222,456];
_.each(numbers, function(number, i){
    console.log(number);
})