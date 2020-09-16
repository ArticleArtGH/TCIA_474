function check(s){
    var a = prompt(s);
    while(isNaN(a)){
        alert("Вы ввели недопустимое значение!\nПопробуйте снова.");
        a = prompt(s);
    }
    return +a;
}

function f1(){

}
function f2(){
    var min = check("Введите минимальное число таблицы: ");
    var max = check("Введите максимальное число таблицы: ");

    var table = "<table cellpadding = '4' cellspacing = '1'>";
    for(var i = 1; i<=2; i++){
    table +="<tr>";
    for(var j = 1; j<=10; j++){
        if(i == 1){
        table += "<td>"+j+"</td>";
        }else{
        table +="<td>"+Math.floor(Math.random()*(max-min)+min);+"</td>";
        }
    }
    table +="</tr>";
    }
    table += "</table>";

    document.write(table);

}
function f3(){
    var a = check("Введите число: ");
    var n = check ("Введите степень: ");

    document.write("Число "+a+" в "+n+" степени равно: "+Math.pow(a,n));
}