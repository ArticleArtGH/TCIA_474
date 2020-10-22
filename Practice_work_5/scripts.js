
//document.getElementById("p1").style.fontSize="20px";

// function Load(){
//     var h1_headline = document.getElementByName("h1_headline");
//     h1_headline.style.color="red";
// }

function fMouseOver(){
    //document.h1_headline.style.color="green";
    document.getElementById("h1_headline").style.color="green";
    //h1_headline.style.color="green";
}
function fMouseOut(){
    document.getElementById("h1_headline").style.color="red";
    //h1_headline.style.color="red";
}

function btn_date(){
    var dayOfWeek = new Array("понедельниык","вторник","среда","четверг",
    "пятница", "суббота", "воскресенье");
    var month = new Array("январь", "февраль", "март", "апрель", "май",
    "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь")
    var d = new Date();

    var s = "Сегодня "+d.getDate()+" "+(month[d.getMonth()])+" "+
    d.getFullYear()+", "+dayOfWeek[d.getDay()-1]+"\n";
    s+="С начала учебного года прошло: "+(d.setHours(d.getFullYear()-2020,
    d.getMonth()-8,d.getDate()-1)/24)+"\n";
    s+="До конца учебного года осталось: "+"\n";//Когда конец учебного 
    //года

    alert(s);
}

function btn_new_wnd(){
    document.write("<form>"+
        "<h1 style='color:red;'>Желаю удачи и счатсья!</h1>"+
        "<hr width='300px' text-align='left'>"+
        "<img src='img/4.png' width='400px' height='300px'>"+
        "<button href='index.html'>Назад</button>"+
    "</form>");
}

function btn_page(){
    var ls="";
    for(var i = 0; i<document.all.length;i++){
        ls+=String(i)+String(document.getElementsByTagName[i])+
        String(document.getElementById[i]);
    }
    alert(ls);
}

function btn_line(){
    var r = parseInt(Math.floor(Math.random()*(255 - 0)+0));
    var g = parseInt(Math.floor(Math.random()*(255 - 0)+0));
    var b = parseInt(Math.floor(Math.random()*(255 - 0)+0));
    return document.getElementById("hr1").style.color=rgb(r, g, b);
}

function btn_image(){
    var i = 5;
    if(i>7){
        i=4;
    }
    i++;
    document.getElementsById[i].style.border="1 solid gold";
}