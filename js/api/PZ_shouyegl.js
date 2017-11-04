$.getJSON("http://60.205.186.12:8080/API/FjLbtAction?choice=list", function(data) {
    $("#table1 tbody").html(""); //清空
    var htmlText = "";

    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].title);
        console.log(data[x].content);
        htmlText += "<tr>";
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].title +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td> <div class='btn-group'>" +
            "<button type='button' class='btn-white  btn btn-xs'>取消使用</button>" +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table1 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/FjRmjxAction?choice=list", function(data) {
    $("#table2 tbody").html(""); //清空
    var htmlText = "";

    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].title);
        console.log(data[x].content);
        htmlText += "<tr>";
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].title +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table2 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/FjJtdtAction?choice=list", function(data) {
    $("#table3 tbody").html(""); //清空
    var htmlText = "";

    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].title);
        console.log(data[x].content);
        htmlText += "<tr>";
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].title +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table3 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/FjYqljAction?choice=list", function(data) {
    $("#table4 tbody").html(""); //清空
    var htmlText = "";

    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].title);
        console.log(data[x].content);
        htmlText += "<tr>";
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].title +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table4 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/FjQdymAction?choice=list", function(data) {
    $("#table5 tbody").html(""); //清空
    var htmlText = "";

    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].title);
        console.log(data[x].content);
        htmlText += "<tr>";
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].title +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table5 tbody").html(htmlText);
});

