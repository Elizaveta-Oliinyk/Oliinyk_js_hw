

Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

    let hamburger = 2;
    let fries = 1;
    if (hamburger >= 4 && fries >= 1){
        console.log("Ми поїли")
    } else {
        console.log("Ми йдемо в інше кафе")};

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

    let price = 2000;
    if (price >= 1000 && price <=1900){
        console.log(true)
    } else {
        console.log(false)};  

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

//  V1 
    let price = 1901;
    if (price < 1000 || price > 1900){
        console.log(true) ////значення ціни товару не знаходиться між 1000 та 1900 включно
    } else {
        console.log(false)};

//  V2
    let price = 1000;
    if (!(price < 1000 || price > 1900)){
        console.log(false)
    } else {
        console.log(true)} ////значення ціни товару не знаходиться між 1000 та 1900 включно

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

    let season = 5
    if (season == 1){
        console.log("Winter")
    } else if(season == 2){
        console.log("Spring")
    } else if(season == 3){
        console.log("Summer")
    } else if(season == 4){
        console.log("Autumn")
    } else {console.log("You are in another world")}

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

    let a = 2;
    let b = 4;
    let c = 3;

    if (a>b && a<c || a>c && a<b){
        console.log(a)
    } else if (b>a && b<c || b>c && b<a) {
        console.log(b)
    } else if (c>b && c<a || c>a && c<b) {
        console.log(c)
    }

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

    let day = 8;
    switch(day){
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('You are on holiday')
            break;
    }

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

        let action = '*';
        let i = 10;
        let j = 5;
        let q;
        switch (action){
            case '+': q = i + j;
            break;
            case '-': q = i - j;
            break;
            case '*': q = i * j;
            break;
            case '/': q = i / j;
            break;
        }
        console.log(q)


// 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.

        let myArray = []
        for(let i = 1; i <= 5; i++){
            myArray.push(i)};
        console.log(myArray)

// 9. Напишіть 2 цикли.
//    За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
//    За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.

        let myArray = [];
        for(let i = 1; i <= 9; i++){
            if (i % 2 == 0) {myArray.push(i)}};
        console.log(myArray);

        let myArray = [];
        for(let i = 1; i <= 9; i++){
            if (i % 2 == 1) {myArray.push(i)}};
        console.log(myArray);

// 10. Оголоcіть та ініціалізуйте змінну total = 0.
//     Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
//     const myArr = [2, 3, 4, 5, 6];
        let total = 0;
        const myArr = [2, 3, 4, 5, 6];
        for (i = 0; i < myArr.length; i++){
            total += myArr[i]};
        console.log(total);

// 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

//     const arr = [ [1, 2], [3, 4], [5, 6] ];

//     Console output:
//     1
//     2
//     3
//     4
//     5
//     6
        const arr = [ [1, 2], [3, 4], [5, 6] ];
        for(i=0; i<arr.length; i++) {
            for(e=0; e<arr[i].length; e++) {
            console.log(arr[i][e]) }    
            }

// 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
//     Використайте для цього вкладені цикли for.

//     Наприклад:
//     const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
//     const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
//     const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

//     const arr = [[1, 2], [3, 4], [5, 6, 7]];

//     let product = 1;

//     // тут має бути ваше рішення

//     console.log(product);

            const arr = [[1, 2], [3, 4], [5, 6, 7]];
            let product = 1;

            for (i=0; i<arr.length; i++){
                for (e=0; e<arr[i].length; e++){
                product*=parseFloat(arr[i][e])}
            }
            console.log(product)

// 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

            let word = "Incomprehensibilities";
            console.log(word.replace(/[AaEeIiOoYyUu]/g, ''));

// 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

