
//document.getElementById("p1").style.fontSize="20px";

// function Load(){
//     var h1_headline = document.getElementByName("h1_headline");
//     h1_headline.style.color="red";
// }

window.onload = function(){
    document.getElementById("h1_headline").style.color="red";

    var hr1 = document.getElementById("hr1");
    hr1.style.height="5px";
    hr1.style.background="black";

    var img = document.getElementById("div_img");
    img.getElementsByTagName("img")[0].style.border="10px solid black";
    img.getElementsByTagName("img")[1].style.border="10px solid black";
    img.getElementsByTagName("img")[2].style.border="10px solid black";

    var p1 = document.getElementById("p1");
    p1.style.fontWeight="bold";
    p1.style.fontSize="20px";

}

function fMouseOver(){
    document.getElementById("h1_headline").style.color="green";
    //h1_headline.style.color="green";
}
function fMouseOut(){
    document.getElementById("h1_headline").style.color="red";
    //h1_headline.style.color="red";
}

function btn_date(){
    var d = new Date();
    var month = new Array("январь", "февраль", "март", "апрель", "май",
    "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь");
    var dayOfWeek = new Array("понедельниык","вторник","среда","четверг",
     "пятница", "суббота", "воскресенье");
    
    var dCurrent = new Date(d.getFullYear(),d.getMonth(),d.getDate());
    var dStart = new Date(2020,8,1);
    var datePast = (dCurrent-dStart)/1000/60/60/24;

    var dEnd = new Date(2020,11,15);
    var remainder = (dEnd - dCurrent)/1000/60/60/24;

    var s = "Сегодня "+d.getDate()+" "+month[d.getMonth()]+" "+
    d.getFullYear()+" "+dayOfWeek[d.getDay()-1]+"\n"+
    "С начала учебного года прошло: "+datePast+"\n"+
    "До конца учебного года осталось: "+remainder;

    alert(s);
}

function btn_new_wnd(){
    var newWnd = window.open("newWnd.html","New window", "width=500, height = 500");//url = "newWnd.html"//"newWnd.html", "New Window");

    // newWnd.document.write("<form>"+
    //     "<h1 style='color:red;'>Желаю удачи и счатсья!</h1>"+
    //     "<hr width='300px' text-align='left'>"+
    //     "<img src='img/4.png' width='400px' height='300px'>"+
    //     "<button>Назад</button>"+
    // "</form>");
}

function btn_page(){
    var ls="";
    var id;
    for(var i = 0; i<document.all.length;i++){
        ls+=i+" tagName = "+document.all[i].tagName+
        " id = "+document.all[i].id+"\n";//id(i)+"\n";
    }
    alert(ls);
}
// function id(i){
//     if(document.all[i].id!=null)
//     {return;
//     }else{
//     return null;
//     }

    var r; //= parseInt(Math.floor(Math.random()*(255 - 0)+0));
    var g; //= parseInt(Math.floor(Math.random()*(255 - 0)+0));
    var b; //= parseInt(Math.floor(Math.random()*(255 - 0)+0));
function btn_line(){
    r = parseInt(Math.floor(Math.random()*(255 - 0)+0));
    g = parseInt(Math.floor(Math.random()*(255 - 0)+0));
    b = parseInt(Math.floor(Math.random()*(255 - 0)+0));
    
    var hr1 = document.getElementById("hr1").style;
    hr1.height="5px";
    hr1.background="rgb("+r+","+g+","+b+")";

    //return[r,g,b];
}

var el=+2;
function btn_image(){
    // var img = document.getElementById("div_img").img[0].style.border="1px solid red"
    //var hr1 = document.getElementById("hr1");
    //var bgColor = hr1.style.background;//window.getComputedStyle(hr1).background;
    //console.log(bgColor); 
    // var r = btn_line()[0];//parseInt(hr1.style.background.r);//bgColor[0];//parseInt(Math.floor(Math.random()*(255 - 0)+0));
    // var g = btn_line()[1];//parseInt(hr1.style.background.g);//parseInt(Math.floor(Math.random()*(255 - 0)+0));
    // var b = btn_line()[2];//parseInt(hr1.style.background.b);//parseInt(Math.floor(Math.random()*(255 - 0)+0));
    //console.log(r);
    el++;
    if(el==3){
        el=0
    }
     var img = document.getElementById("div_img");
    img.getElementsByTagName("img")[el
    ].style.border="10px solid rgb("+r+","+g+","+b+")";//+hr1.style.background+")";//+bgColor+")";
    //console.log(window.getComputedStyle(img).border);
}