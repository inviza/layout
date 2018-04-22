"use strict"
let sharm = 15;
let hurgada = 25;
let taba = 6;
let resort;

let places = prompt('What amout of places you need for this trip?');

if( isNaN(places)||places<0){
        alert('Ошибка ввода');
}
else{
    
    if(places<=taba){
        resort = 'Taba';
        let decision= confirm(`Согласны ли вы быть в этой групе:<${resort}>?`);
            if(decision===true){
                alert(`Приятного путешествия в группе <${resort}>`);
                taba= taba-places;
            } else{
                alert("Нам очень жаль, приходите еще!");
            }
    } else if(places<=sharm){
        resort = 'Sharm';
        let decision= confirm(`Согласны ли вы быть в этой групе:<${resort}>?`);
            if(decision===true){
                alert(`Приятного путешествия в группе <${resort}>`);
                sharm = sharm - places;
            } else{
                alert("Нам очень жаль, приходите еще!");
            }
    } else if(places<=hurgada){
        resort = 'Hurgada';
        let decision= confirm(`Согласны ли вы быть в этой групе:<${resort}>?`);
            if(decision===true){
                alert(`Приятного путешествия в группе <${resort}>`);
                hurgada = hurgada-places;
            } else{
                alert("Нам очень жаль, приходите еще!");
            }
    } else {
        alert('Извините, мест нет.')
    }
}


