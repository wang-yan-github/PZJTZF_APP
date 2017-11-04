Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}
var date = new Date().format("yyyy-MM-dd hh:mm:ss");
// 列表
$.getJSON("http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<a href='http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=remove&id="+data[x].id+"' class='btn-danger btn btn-xs'>删除</a> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table1 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtzdJtysglsAction?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<a href='http://60.205.186.12:8080/API/ZtzdJtysglsAction?choice=remove&id="+data[x].id+"' class='btn-danger btn btn-xs'>删除</a> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table2 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtzdGlglzAction?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<a href='http://60.205.186.12:8080/API/ZtzdGlglzAction?choice=remove&id="+data[x].id+"' class='btn-danger btn btn-xs'>删除</a> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table3 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtzdXzjtAction?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<a href='http://60.205.186.12:8080/API/ZtzdXzjtAction?choice=remove&id="+data[x].id+"' class='btn-danger btn btn-xs'>删除</a> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table4 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtzdDfhscAction?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<a href='http://60.205.186.12:8080/API/ZtzdDfhscAction?choice=remove&id="+data[x].id+"' class='btn-danger btn btn-xs'>删除</a> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table5 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtzdHdglzAction?choice=list", function(data) {
    $("#table6 tbody").html(""); //清空
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
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<a href='http://60.205.186.12:8080/API/ZtzdHdglzAction?choice=remove&id="+data[x].id+"' class='btn-danger btn btn-xs'>删除</a> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table6 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtzdGkglcAction?choice=list", function(data) {
    $("#table7 tbody").html(""); //清空
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
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<a href='http://60.205.186.12:8080/API/ZtzdGkglcAction?choice=remove&id="+data[x].id+"' class='btn-danger btn btn-xs'>删除</a> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table7 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=list", function(data) {
    $("#table8 tbody").html(""); //清空
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
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs'>编辑</button> " +
            "<a href='http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=remove&id="+data[x].id+"' class='btn-danger btn btn-xs'>删除</a> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table8 tbody").html(htmlText);
});
// 添加
function s1() {
    var si1 = $("#si1").val();
    var si2 = $("#si2 .note-editable").text();
    var si3 = $("#si3").val();
    var si4 = $("#si4").val();
    var si5 = $("#si5").val();

    var url = "http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s2() {
    var si1 = $("#si1").val();
    var si2 = $("#si2 .note-editable").text();
    var si3 = $("#si3").val();
    var si4 = $("#si4").val();
    var si5 = $("#si5").val();

    var url = "http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s3() {
    var si1 = $("#si1").val();
    var si2 = $("#si2 .note-editable").text();
    var si3 = $("#si3").val();
    var si4 = $("#si4").val();
    var si5 = $("#si5").val();

    var url = "http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s4() {
    var si1 = $("#si1").val();
    var si2 = $("#si2 .note-editable").text();
    var si3 = $("#si3").val();
    var si4 = $("#si4").val();
    var si5 = $("#si5").val();

    var url = "http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s5() {
    var si1 = $("#si1").val();
    var si2 = $("#si2 .note-editable").text();
    var si3 = $("#si3").val();
    var si4 = $("#si4").val();
    var si5 = $("#si5").val();

    var url = "http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s6() {
    var si1 = $("#si1").val();
    var si2 = $("#si2 .note-editable").text();
    var si3 = $("#si3").val();
    var si4 = $("#si4").val();
    var si5 = $("#si5").val();

    var url = "http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    window.location.reload();
}
function s7() {
    var si1 = $("#si1").val();
    var si2 = $("#si2 .note-editable").text();
    var si3 = $("#si3").val();
    var si4 = $("#si4").val();
    var si5 = $("#si5").val();

    var url = "http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s8() {
    var si1 = $("#si1").val();
    var si2 = $("#si2 .note-editable").text();
    var si3 = $("#si3").val();
    var si4 = $("#si4").val();
    var si5 = $("#si5").val();

    var url = "http://60.205.186.12:8080/API/ZtzdJtgczlAction?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    $.getJSON(url, function(data) {})
    window.location.reload();
}

