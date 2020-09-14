function check(s){//Проверка ввода
var a = prompt(s);
while(isNaN(a)){
    alert("Вы ввели не допустимое значение!\nПопробуйте снова.");
    a = prompt(s);
}
return +a;
}

function f1(){
alert("Вычисление всех нечётных чисе, встечающихся в ряду от M до числа N включительно")
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
    alert("Вывод чётных чисел от a до b, разделённых запятыми");
    var a = check("Введите число a: ");
    var b = check("Введите число b: ");
    var sum = 0;

    if(a>b){
        for(var i = a;i>=b; i--){
            if(i%2==0){
                document.write(sum+=i+",");//,,,,,,,,,,,,,
            }
        }
    }
    else{//b>=a
        for(var i = a;i<=b; i++){
            if(i%2==0){
                document.write(sum+=i);//,,,,,,,,,,,,,
            }
        }
    }

}
function f3(){
    
}
function f4(){
    
}