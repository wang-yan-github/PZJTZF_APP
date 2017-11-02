$.getJSON("http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=ZtzdJtgczlList", function(data) {
    $("#table1 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td>" + data[x].keShi +"</td>";
        htmlText += "<td>" + data[x].xingZhi +"</td>";
        htmlText += "<td>" + data[x].renShu +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table1 tbody").html(htmlText);
});

$.getJSON("http://60.205.186.12:8080/API/ZtzdJtysglsAction?choice=ZtzdJtysglsList", function(data) {
    $("#table2 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td>" + data[x].keShi +"</td>";
        htmlText += "<td>" + data[x].xingZhi +"</td>";
        htmlText += "<td>" + data[x].renShu +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table2 tbody").html(htmlText);
});

$.getJSON("http://60.205.186.12:8080/API/ZtzdGlglzAction?choice=ZtzdGlglzList", function(data) {
    $("#table3 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td>" + data[x].keShi +"</td>";
        htmlText += "<td>" + data[x].xingZhi +"</td>";
        htmlText += "<td>" + data[x].renShu +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table3 tbody").html(htmlText);
});

$.getJSON("http://60.205.186.12:8080/API/ZtzdXzjtAction?choice=ZtzdXzjtList", function(data) {
    $("#table4 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td>" + data[x].keShi +"</td>";
        htmlText += "<td>" + data[x].xingZhi +"</td>";
        htmlText += "<td>" + data[x].renShu +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table4 tbody").html(htmlText);
});

$.getJSON("http://60.205.186.12:8080/API/ZtzdDfhscAction?choice=ZtzdDfhscList", function(data) {
    $("#table5 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td>" + data[x].keShi +"</td>";
        htmlText += "<td>" + data[x].xingZhi +"</td>";
        htmlText += "<td>" + data[x].renShu +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table5 tbody").html(htmlText);
});

$.getJSON("http://60.205.186.12:8080/API/ZtzdHdglzAction?choice=ZtzdHdglzList", function(data) {
    $("#table6 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td>" + data[x].keShi +"</td>";
        htmlText += "<td>" + data[x].xingZhi +"</td>";
        htmlText += "<td>" + data[x].renShu +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table6 tbody").html(htmlText);
});

$.getJSON("http://60.205.186.12:8080/API/ZtzdGkglcAction?choice=ZtzdGkglcList", function(data) {
    $("#table7 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td>" + data[x].keShi +"</td>";
        htmlText += "<td>" + data[x].xingZhi +"</td>";
        htmlText += "<td>" + data[x].renShu +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table7 tbody").html(htmlText);
});

$.getJSON("http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=ZtzdJtgczlList", function(data) {
    $("#table8 tbody").html(""); //清空
    var htmlText = "<tr>";
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        console.log(data[x].name);
        console.log(data[x].content);
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].name +"</td>";
        htmlText += "<td>" + data[x].content.substring(0,10) +"...<a href=''>详细</a></td>";
        htmlText += "<td>" + data[x].keShi +"</td>";
        htmlText += "<td>" + data[x].xingZhi +"</td>";
        htmlText += "<td>" + data[x].renShu +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs'>删除</button> " +
            "</div> </td>";
    }
    htmlText += "</tr>";
    $("#table8 tbody").html(htmlText);
});