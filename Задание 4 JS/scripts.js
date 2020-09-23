function check(s){
    var a = prompt(s);
    while(isNaN(a)){
        alert("Вы ввели недопустимое значение!\nПопробуйте снова.");
        a = prompt(s);
    }
    return +a;
}

function task_1(){
    var arrRnd = new Array();
    var count_el = check("Введите количество элементов массива");
    var min = check("Введите нижний диапозон возможного числа");
    var max = check("Введите верхний диапозон возможного числа");
    
    var table = "<table border='1px' cellspacing='0px' cellpadding='5px'"+
    "style='text-align:center; vertical-align:middle;'>"+
    "<tr>";
    for(var i = 1; i<=count_el;i++){
        table += "<td>"+i+"</td>";
    }
    table += "</tr>";

    for(var i = 0; i<count_el;i++){
        arrRnd[i] = +Math.floor(Math.random()*(max-min)+(min));
    }
    //не отсортированный массив
    table += "<tr>";
    for(var i = 0;i<arrRnd.length;i++){
        table += "<td>"+arrRnd[i]+"</td>";
    }
    table += "</tr>"+
    "</tabel>";
    //отсортированны массив
    arrRnd.sort(function(a, b){
        return a-b;
    });
    //arrRnd = arrRnd.sort();
    var tableSort = "<table border='1px' cellspacing='0px'"+
    "cellpadding='5px' style='text-align:center; vertical-align:middle;'>"+
    "<tr>";
    for(var i = 1; i<=arrRnd.length;i++){
        tableSort+="<td>"+i+"</td>";
    }
    tableSort+="</tr>"+
    "<tr>";
    for(var i = 0; i<arrRnd.length;i++){
        tableSort+="<td>"+arrRnd[i]+"</td>";
    }
    tableSort+="</tr>"+
    "</table>";

    document.write("<h2>Создание массива</h2> <br> <hr width='100%'> <br>"+
    table+"<br>"+
    "<h2>Сортировка массива</h2> <br> <hr width='100%'> <br>"+
    tableSort+"<br>");
    
    //Как сделать одинакового размера ячейки таблицы ?
}

function task_2(){
    var arrDayOfWeek = new Array("Понедельник - Жёлтый","Вторник - Розовый",
    "Среда - Зелёный","Четверг - Оранжевый","Пятница - Синий",
    "Суббота - Фиолетовый","Воскресенье - Красный");
    var arrColorOfWeek = new Array("yellow","pink","green","orange","blue",
    "violet","red");
    var numOfWeek = check("Введите номер дня недели.");
    while(numOfWeek<1||numOfWeek>7){
        alert("Такой номер недели не существует!\nПопробуйте снова.");
        numOfWeek = check("Введите номер дня недели.");
    }

    document.write("<div style='width:200px; height:50px;"+ 
    "background-color:"+arrColorOfWeek[numOfWeek-1]+"; text-align:center;"+
    "vertical-align:middle; display:inline-block;'>"+
    arrDayOfWeek[numOfWeek-1]+"</div>");
}