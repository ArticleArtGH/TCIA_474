function check(s){
    var a = prompt(s);
    while(isNaN(a)){
        alert("Вы ввели недопустимое значение!\nПопробуйте снова.");
        a = prompt(s);
    }
    return +a;
}

function f1(){
var num = 0;
var div_w = "<div style='display:inline-block; width:100px; height:100px;"+
"border:1px solid black; background-color:white; color:red;'>"+num+"</div>";
var div_b = "<div style='display:inline-block; width:100px; height:100px;"+
"border:1px solid black; background-color:black; color:red;'>"+(num++)+"</div>";
var num_l = 8, num_r = 8;
var arr_AH_t = new Array("A","B","C","D","E","F","G","H");
var arr_AH_d = new Array("A","B","C","D","E","F","G","H");
var k = 0;

for(var i = 0;i<4;i++){
        // if(i==0){
        //     for(var i = 0;i<8;i++){
        //         document.write(arr_AH_t[i]);
        //     }
        //     document.write("<br>");
        // }
        for(var j = 0; j<4;j++){
            // if(j == 0){
            //     document.write("<div style='display:inline-block;'>"+num_l+"</div>",div_w,
            //     div_b);
            //     num_l--;
            // }else if(j==3){
            //     document.write(div_w,div_b,"<div style='display:inline-block;'>"+num_r+
            //     "</div>");
            //     num_r--;
            // }else{
                document.write("<div style='display:inline-block; width:100px; height:100px;"+
                "border:1px solid black; background-color:white; color:red; text-align:center;"+
                "vertical-align:middle;'><div style='display:flex; justify-content:center; align-items:center; width:100px; height:100px;'>"+(num++)+"</div></div>");
                document.write("<div style='display:inline-block; width:100px; height:100px;"+
                "border:1px solid black; background-color:black; color:red; text-align:center;"+
                "vertical-align:middle;'><div style='display:flex; justify-content:center; align-items:center; width:100px; height:100px;'>"+(num++)+"</div></div>");
                //num++;
            //}
        }
        document.write("<br>");
        for(var j = 0;j<4;j++){
            // if(j==0){
            //     document.write("<div style='display:inline-block;'>"+num_l+"</div>",div_b,
            //     div_w);
            //     num_l--;
            // }else if(j==3){
            //     document.write(div_b,div_w,"<div style='display:inline-block;'>"+num_r+
            //     "</div>");
            //     num_r--;
            // }else{
                document.write("<div style='display:inline-block; width:100px; height:100px;"+
                "border:1px solid black; background-color:black; color:red; text-align:center;"+
                "vertical-align:middle;'><div style='display:flex; justify-content:center; align-items:center; width:100px; height:100px;'>"+(num++)+"</div></div>");
                document.write("<div style='display:inline-block; width:100px; height:100px;"+
                "border:1px solid black; background-color:white; color:red; text-align:center;"+
                "vertical-align:middle;'><div style='display:flex; justify-content:center; align-items:center; width:100px; height:100px;'>"+(num++)+"</div></div>");
                //num++;
            //}
        }
        document.write("<br>");
        // if(i==3){
        //     // document.write("<br>");
        //     for(var i = 0; i<8;i++){
        //         document.write(arr_AH_d[i]);
        //     }
        // }
    }
}
function f2(){
    var min = check("Введите минимальное число таблицы: ");
    var max = check("Введите максимальное число таблицы: ");

    var table = "<table border='1px' cellpadding='4px' cellspacing='0px'>";
    for(var i = 1; i<=2; i++){
    table +="<tr>";
    for(var j = 1; j<=10; j++){
        if(i == 1){
        table += "<td style='width:20px; height:25px;'><div style='width:20px; height:25px; display:flex; justify-content:center; align-items:center;'>"+j+"</div></td>";
        }else{
        table +="<td style='width:20px; height:25px;'><div style='width:20px; height:25px; display:flex; justify-content:center; align-items:center;'>"+Math.floor(Math.random()*(max-min)+min);+"</div></td>";
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