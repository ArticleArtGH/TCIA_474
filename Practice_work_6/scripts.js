window.onload = function(){
var arr;

function check(s){
    var a = s;
    if(isNaN(a)){
        alert("Вы ввели недопустимое значение!\nПопробуйте снова.");
        s.value = "";
    }else{
        return Number(a);
    }
}

document.getElementById("btnCalc").onclick = function(){
    // var minV = check(document.getElementById("minV").value);
    // var maxV = check(document.getElementById("maxV").value);
    // var count = check(document.getElementById("count").value);
    var minV = Number(document.getElementById("minV").value);
    var maxV = Number(document.getElementById("maxV").value);
    var count = Number(document.getElementById("count").value);
    // minV=Number(minV);//check(minV));
    // maxV=Number(maxV);//check(maxV));
    // count = Number(count);//check(count));
    arr = new Array(count);
    var sum=0;

    for(var i = 0; i<count; i++){
        arr[i]=Math.floor(Math.random()*(maxV-minV)+(minV));
    }

    for(var i = 0; i<count; i++){
        sum+=arr[i];
    }
    document.getElementById("sum").value=sum;    
}

document.getElementById("btnOutput").onclick = function(){
    var table = "<p>Вывод:</p>"; 
    table +="<table border='1px' cellspacing='0px' celpadding='5px'>";
    
    table+="<tr>"
    for(var i = 0; i<arr.length;i++){
        table+="<td>"+(i+1)+"</td>";
    }
    table+="</tr>"
    table+="<tr>"
    for(var i = 0; i<arr.length;i++){  
        table+="<td>"+arr[i]+"</td>";
    }
    
    //var d = "index.html";
    //d.write(table);
    //document.write(table);
    // document.getElementById("pOut").innerHTML="Вывод:";
    document.getElementById("out").innerHTML=table;
}

}