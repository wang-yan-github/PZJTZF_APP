$.getJSON("http://localhost:8080/API/GxzdZfgsAction?choice=GxzdZfgsList", function(data) {
    $("#table1 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://localhost:8080/API/GxzdZfgsAction?choice=ByldGxzdZfgs&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table1 tbody").html(htmlText);
});
$.getJSON("http://localhost:8080/API/GxzdCwgkAction?choice=GxzdCwgkList", function(data) {
    $("#table2 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,30) +"...<a href='http://localhost:8080/API/GxzdCwgkAction?choice=ByldGxzdCwgk&Id="+data[x].id+"'>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table2 tbody").html(htmlText);
});
$.getJSON("http://localhost:8080/API/GxzdSsfaAction?choice=GxzdSsfaList", function(data) {
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

$("#b01").click(

);