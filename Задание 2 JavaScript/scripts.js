function check(s){//Проверка ввода
var a = prompt(s);
while(isNaN(a)){
    alert("Вы ввели не допустимое значение!\nПопробуйте снова.");
    a = prompt(s);
}
return +a;
}

function f1(){
// alert("Вычисление всех нечётных чисел, встечающихся в ряду от M до числа N включительно")
var M = check("Введите значение для М");
var N = check("Введите значение для N");
var sum = 0;

if(M>N){
    for(var i = M;i>=N; i--){
        if(i%2!=0){
            sum+=i;
        }
    }
}
else{//N>=M
    for(var i = M;i<=N; i++){
        if(i%2!=0){
            sum+=i;
        }
    }
}

document.write("Сумма всех нечётных чисел от "+M+" до "+N+": "+sum);
}
function f2(){
    // alert("Вывод чётных чисел от a до b, разделённых запятыми");
    var a = check("Введите число a: ");
    var b = check("Введите число b: ");
    var sum = 0;

    document.write("Строка с чётными числами от "+a+" до "+b+": ");
    if(a>b){
        for(var i = a;i>=b; i--){
            if(i%2 == 0){
                if(i == b || i == b+1){
                document.write(i);
                continue;
                }
                document.write(i+", ");
            }
        }
    }else{//b>=a
        for(var i = a;i<=b; i++){
            if(i%2 == 0){
                if(i == b || i == b-1){
                document.write(i);
                continue;
                }
                document.write(i+", ");
            }
        }
    }

}
function f3(){
    var sum = 0;
    var celing = check("Введите ограничение для максимально возможного случайноло числа");
    var rndMax = Math.floor(Math.random()*(celing-0)+0);

    for(var i = 0; i <= rndMax; i++){
        sum+= i;
    }

    document.write("Сумма цифр случайного числа (потолок = "+celing+") от 0 до RandMax = "+rndMax+": "+sum);
}
function f4(){
    var div_w = "<div class = 'cell_white'></div>";
    var div_b = "<div class = 'cell_black'></div>";
    
    for(var i = 0; i<4; i++){
        document.write(div_w, div_b);
    }
    
}