"use strict";

//Если строку прибавит к числу, то всёравно выйдет строка - это называется конкатинация

console.log('arr' + " - object ");
console.log( 4 + + "5"); // это пример унарого плюса, и заметка унарного плюса, 
//называется плюс, который ставится перед чем-то(использует только один аргумент)

//Также есть два оператора инкримент и дикримент
//Они существуют для укорочения кода(уменьшают и увеличивают на единиицу(1))


//Оператор incr - т.е. инкримент увеличивает на единицу
//Оператор decr - т.е. дикримент уменьшает на единицу

//Когда мы ставим операторы перед значением, то такая форма называется префикстной
//Когда мы ставим операторы после значения, то такая форма называется посфикстной


let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

//Когда мы используем incr and decr в посфикстной форме, прямо сразу, то в таком случаи посфик-форма
//сначала возвращает старое значение, а после либо увеличивает или уменьшает


console.log( 5 % 2);

console.log( 5 + 5 * 5 != 31 );

const isRealMadridChampion = true,
      isBarcelonaLosers = false;
      
console.log(isRealMadridChampion || isBarcelonaLosers);      

//Это был процентовый оператор

//Также есть два логические операторы И и ИЛИ

// && - это оператор И. Он работает только тогда, когда у нас два или больше подопытных являются правдивыми
// выражениями, т.е. по сути и это и другое правда(просто надо запомнить)

// || - это оператор ИЛИ. Он работает точно также, но не обязательно чтобы два или больше подопытных,
// являлись правдивыми выраженями

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);

//Оператор &&, возвращает нам правду, только тогда, когда два подопытных будут правдивыми

// ! - это оператор отрицания и обращает значения в обратное, т.е. ложь в правду и наоборот

