function check(s){//проверка ввода
    var a = prompt(s);
    while(isNaN(a)){
        alert("Вы ввели не допустимое значение!\nПопробуйте снова.");
        a = prompt(s);
    }
    return +a;
}

function f1(){
    var day = /*+*/check("Введите день месяца");//+prompt("Введите день месяца");
    var month = /*+*/check("Введите номер месяца");//parseInt(prompt("Введите номер месяца"));
    var dayOFweek = /*parseInt(*/check("Введите номер дня недели");/*prompt("Введите номер дня недели")*///);
    
    switch(month){
        case 1: month = "январь"; break;
        case 2: month = "февраль"; break;
        case 3: month = "март"; break;
        case 4: month = "апрель"; break;
        case 5: month = "май"; break;
        case 6: month = "июнь"; break;
        case 7: month = "июль"; break;
        case 8: month = "август"; break;
        case 9: month = "сентябрь"; break;
        case 10: month = "октябрь"; break;
        case 11: month = "ноябрь"; break;
        case 12: month = "декарбрь"; break;
    }

    switch(dayOFweek){
        case 1: dayOFweek = "понедельник"; break;
        case 2: dayOFweek = "вторник"; break;
        case 3: dayOFweek = "среда"; break;
        case 4: dayOFweek = "четверг"; break;
        case 5: dayOFweek = "пятница"; break;
        case 6: dayOFweek = "суббота"; break;
        case 7: dayOFweek = "воскресенье"; break;
    }

    document.write("<p style = 'color:red'>Сегодня - "+day+" "+month+", "+dayOFweek+"</p>");
}
function f2(){
    var num = check("Введите 5-ое число");//+prompt("Введите 5-ое число");
    var sum = 0;
    var mult = 1;
    var delitel = 10000

    document.writeln("Введённое число "+ num);
    for(i = 0; i<5; i++){
        var n = Math.floor(num/delitel);
        sum += n;
        mult *=n;
        num %=delitel;
        delitel /=10;
    }

    document.writeln("<p style = 'color:red'>Cумма числа = "+sum+"\n\n"+
    "Произведение числа = "+mult+"</p>");
}
function f3(){
    var min = check("Введите минимально возможное случайное число");//+prompt("Введите минимальное возможное случайное число");
    var max = check("Введите максимально возможное случайное число");//+prompt("Введите максимально возможное случайное число");
    
    document.writeln("Диапозон случайного числа:"+min+"-"+max);

    var rnd = Math.floor(Math.random() * (max - min)+min);

    document.writeln("<p style='color:red'>Случайное число: "+ rnd+"</p>");
}