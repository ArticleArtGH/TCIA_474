window.onload = function(){
    var clas = new Set();

    document.getElementById("add").onclick = function(){
        var obj = "<div class=\"string\">"+
        "<label>title</label>"+
        "<button>change</button>"+
        "<input type=\"text\">"+
        "<button>delete</button>"+                 
        "</div>";
        clas.add(obj);
        console.log(clas);
        out();
    }

    function out(){
        var obj = "";
        for(var i of clas){
            obj+=i+"<br>";
        }
        document.getElementById("out").innerHTML = obj;
    }

}