$.getJSON("http://60.205.186.12:8080/API/ZtyjJtysjAction?choice=ZtyjJtysjList", function(data) {
    $("#table1 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://60.205.186.12:8080/API/GxzdZfgsAction?choice=ByldGxzdZfgs&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table1 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtyjJtysglsAction?choice=ZtyjJtysglsList", function(data) {
    $("#table2 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://60.205.186.12:8080/API/GxzdCwgkAction?choice=ByldGxzdCwgk&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table2 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtyjGlglzAction?choice=ZtyjGlglzList", function(data) {
    $("#table3 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://60.205.186.12:8080/API/GxzdSsfaAction?choice=ByldGxzdSsfa&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table3 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtyjXzjtAction?choice=ZtyjXzjtList", function(data) {
    $("#table4 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://60.205.186.12:8080/API/GxzdSsfaAction?choice=ByldGxzdSsfa&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table4 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtyjDfhscAction?choice=ZtyjDfhscList", function(data) {
    $("#table5 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://60.205.186.12:8080/API/GxzdSsfaAction?choice=ByldGxzdSsfa&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table5 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtyjHdglzAction?choice=ZtyjHdglzList", function(data) {
    $("#table6 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://60.205.186.12:8080/API/GxzdSsfaAction?choice=ByldGxzdSsfa&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table6 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtyjGkglcAction?choice=ZtyjGkglcList", function(data) {
    $("#table7 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://60.205.186.12:8080/API/GxzdSsfaAction?choice=ByldGxzdSsfa&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table7 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtyjJtgczlAction?choice=ZtyjJtgczlList", function(data) {
    $("#table8 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://60.205.186.12:8080/API/GxzdSsfaAction?choice=ByldGxzdSsfa&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table8 tbody").html(htmlText);
});

$("#b01").click(

);