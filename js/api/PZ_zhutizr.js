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
var u1 = "ZtzdJtgczlAction";
var u2 = "ZtzdJtysglsAction";
var u3 = "ZtzdGlglzAction";
var u4 = "ZtzdXzjtAction";
var u5 = "ZtzdDfhscAction";
var u6 = "ZtzdHdglzAction";
var u7 = "ZtzdGkglcAction";
var u8 = "ZtzdJtgczlAction";
// 列表
$.getJSON("http://60.205.186.12:8080/API/"+u1+"?choice=list", function(data) {
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
        htmlText += "<td title='"+data[x].content+"'>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e1("+data[x].id+")' data-toggle='modal' data-target='#m1'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r1("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table1 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/"+u2+"?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e2("+data[x].id+")' data-toggle='modal' data-target='#m2'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r2("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table2 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/"+u3+"?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e3("+data[x].id+")' data-toggle='modal' data-target='#m3'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r3("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table3 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/"+u4+"?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e4("+data[x].id+")' data-toggle='modal' data-target='#m4'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r4("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table4 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/"+u5+"?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e5("+data[x].id+")' data-toggle='modal' data-target='#m5'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r5("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table5 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/"+u6+"?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e6("+data[x].id+")' data-toggle='modal' data-target='#m6'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r6("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table6 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/"+u7+"?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e7("+data[x].id+")' data-toggle='modal' data-target='#m7'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r7("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table7 tbody").html(htmlText);
});
$.getJSON("http://60.205.186.12:8080/API/"+u8+"?choice=list", function(data) {
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
        htmlText += "<td>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td>" + data[x].department +"</td>";
        htmlText += "<td>" + data[x].quality +"</td>";
        htmlText += "<td>" + data[x].people +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e8("+data[x].id+")' data-toggle='modal' data-target='#m8'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r8("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table8 tbody").html(htmlText);
});
// 添加
function s1() {
    var si1 = $("#save1 .save-class:first").val();
    var si2 = $("#save1 .save-class:eq(1) .note-editable").text();
    var si3 = $("#save1 .save-class:eq(2)").val();
    var si4 = $("#save1 .save-class:eq(3)").val();
    var si5 = $("#save1 .save-class:eq(4)").val();
    var id = $("#save1 .save-class:last").val();

    if(id){
        var url = "http://60.205.186.12:8080/API/"+u1+"?choice=update&id="+id+"&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }else{
        var url = "http://60.205.186.12:8080/API/"+u1+"?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }

    $.getJSON(url, function(data) {});
    window.location.reload();
}
function s2() {
    var si1 = $("#save2 .save-class:first").val();
    var si2 = $("#save2 .save-class:eq(1) .note-editable").text();
    var si3 = $("#save2 .save-class:eq(2)").val();
    var si4 = $("#save2 .save-class:eq(3)").val();
    var si5 = $("#save2 .save-class:eq(4)").val();
    var id = $("#save2 .save-class:last").val();

    if(id){
        var url = "http://60.205.186.12:8080/API/"+u2+"?choice=update&id="+id+"&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }else{
        var url = "http://60.205.186.12:8080/API/"+u2+"?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }

    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s3() {
    var si1 = $("#save3 .save-class:first").val();
    var si2 = $("#save3 .save-class:eq(1) .note-editable").text();
    var si3 = $("#save3 .save-class:eq(2)").val();
    var si4 = $("#save3 .save-class:eq(3)").val();
    var si5 = $("#save3 .save-class:eq(4)").val();
    var id = $("#save3 .save-class:last").val();

    if(id){
        var url = "http://60.205.186.12:8080/API/"+u3+"?choice=update&id="+id+"&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }else{
        var url = "http://60.205.186.12:8080/API/"+u3+"?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }

    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s4() {
    var si1 = $("#save4 .save-class:first").val();
    var si2 = $("#save4 .save-class:eq(1) .note-editable").text();
    var si3 = $("#save4 .save-class:eq(2)").val();
    var si4 = $("#save4 .save-class:eq(3)").val();
    var si5 = $("#save4 .save-class:eq(4)").val();
    var id = $("#save4 .save-class:last").val();

    if(id){
        var url = "http://60.205.186.12:8080/API/"+u4+"?choice=update&id="+id+"&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }else{
        var url = "http://60.205.186.12:8080/API/"+u4+"?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }

    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s5() {
    var si1 = $("#save5 .save-class:first").val();
    var si2 = $("#save5 .save-class:eq(1) .note-editable").text();
    var si3 = $("#save5 .save-class:eq(2)").val();
    var si4 = $("#save5 .save-class:eq(3)").val();
    var si5 = $("#save5 .save-class:eq(4)").val();
    var id = $("#save5 .save-class:last").val();

    if(id){
        var url = "http://60.205.186.12:8080/API/"+u5+"?choice=update&id="+id+"&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }else{
        var url = "http://60.205.186.12:8080/API/"+u5+"?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }

    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s6() {
    var si1 = $("#save6 .save-class:first").val();
    var si2 = $("#save6 .save-class:eq(1) .note-editable").text();
    var si3 = $("#save6 .save-class:eq(2)").val();
    var si4 = $("#save6 .save-class:eq(3)").val();
    var si5 = $("#save6 .save-class:eq(4)").val();
    var id = $("#save6 .save-class:last").val();

    if(id){
        var url = "http://60.205.186.12:8080/API/"+u6+"?choice=update&id="+id+"&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }else{
        var url = "http://60.205.186.12:8080/API/"+u6+"?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }

    window.location.reload();
}
function s7() {
    var si1 = $("#save7 .save-class:first").val();
    var si2 = $("#save7 .save-class:eq(1) .note-editable").text();
    var si3 = $("#save7 .save-class:eq(2)").val();
    var si4 = $("#save7 .save-class:eq(3)").val();
    var si5 = $("#save7 .save-class:eq(4)").val();
    var id = $("#save7 .save-class:last").val();

    if(id){
        var url = "http://60.205.186.12:8080/API/"+u7+"?choice=update&id="+id+"&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }else{
        var url = "http://60.205.186.12:8080/API/"+u7+"?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }

    $.getJSON(url, function(data) {})
    window.location.reload();
}
function s8() {
    var si1 = $("#save8 .save-class:first").val();
    var si2 = $("#save8 .save-class:eq(1) .note-editable").text();
    var si3 = $("#save8 .save-class:eq(2)").val();
    var si4 = $("#save8 .save-class:eq(3)").val();
    var si5 = $("#save8 .save-class:eq(4)").val();
    var id = $("#save8 .save-class:last").val();

    if(id){
        var url = "http://60.205.186.12:8080/API/"+u1+"?choice=update&id="+id+"&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }else{
        var url = "http://60.205.186.12:8080/API/"+u1+"?choice=save&title="+si1+"&content="+si2+"&date="+date+"&person=管理员&department="+si3+"&quality="+si4+"&people="+si5+"";
    }

    $.getJSON(url, function(data) {})
    window.location.reload();
}
// 删除
function r1(removeid) {
    var url = "http://60.205.186.12:8080/API/"+u1+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r2(removeid) {
    var url = "http://60.205.186.12:8080/API/"+u2+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r3(removeid) {
    var url = "http://60.205.186.12:8080/API/"+u3+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r4(removeid) {
    var url = "http://60.205.186.12:8080/API/"+u4+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r5(removeid) {
    var url = "http://60.205.186.12:8080/API/"+u5+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r6(removeid) {
    var url = "http://60.205.186.12:8080/API/"+u6+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r7(removeid) {
    var url = "http://60.205.186.12:8080/API/"+u7+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r8(removeid) {
    var url = "http://60.205.186.12:8080/API/"+u8+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
// 编辑
function e1(editid){
    
    $.getJSON("http://60.205.186.12:8080/API/"+u1+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save1 .save-class:first").val(data[x].title);
            $("#save1 .save-class:eq(1) .note-editable").text(data[x].content);
            $("#save1 .save-class:eq(2)").val(data[x].department);
            $("#save1 .save-class:eq(3)").val(data[x].quality);
            $("#save1 .save-class:eq(4)").val(data[x].people);
            $("#save1 .save-class:last").val(data[x].id);
        }
    });
}
function e2(editid){
    $.getJSON("http://60.205.186.12:8080/API/"+u2+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save2 .save-class:first").val(data[x].title);
            $("#save2 .save-class:eq(1) .note-editable").text(data[x].content);
            $("#save2 .save-class:eq(2)").val(data[x].department);
            $("#save2 .save-class:eq(3)").val(data[x].quality);
            $("#save2 .save-class:eq(4)").val(data[x].people);
            $("#save2 .save-class:last").val(data[x].id);
        }
    });
}
function e3(editid){
    $.getJSON("http://60.205.186.12:8080/API/"+u3+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save3 .save-class:first").val(data[x].title);
            $("#save3 .save-class:eq(1) .note-editable").text(data[x].content);
            $("#save3 .save-class:eq(2)").val(data[x].department);
            $("#save3 .save-class:eq(3)").val(data[x].quality);
            $("#save3 .save-class:eq(4)").val(data[x].people);
            $("#save3 .save-class:last").val(data[x].id);
        }
    });
}
function e4(editid){
    $.getJSON("http://60.205.186.12:8080/API/"+u4+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save4 .save-class:first").val(data[x].title);
            $("#save4 .save-class:eq(1) .note-editable").text(data[x].content);
            $("#save4 .save-class:eq(2)").val(data[x].department);
            $("#save4 .save-class:eq(3)").val(data[x].quality);
            $("#save4 .save-class:eq(4)").val(data[x].people);
            $("#save4 .save-class:last").val(data[x].id);
        }
    });
}
function e5(editid){
    $.getJSON("http://60.205.186.12:8080/API/"+u5+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save5 .save-class:first").val(data[x].title);
            $("#save5 .save-class:eq(1) .note-editable").text(data[x].content);
            $("#save5 .save-class:eq(2)").val(data[x].department);
            $("#save5 .save-class:eq(3)").val(data[x].quality);
            $("#save5 .save-class:eq(4)").val(data[x].people);
            $("#save5 .save-class:last").val(data[x].id);
        }
    });
}
function e6(editid){
    $.getJSON("http://60.205.186.12:8080/API/"+u6+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save6 .save-class:first").val(data[x].title);
            $("#save6 .save-class:eq(1) .note-editable").text(data[x].content);
            $("#save6 .save-class:eq(2)").val(data[x].department);
            $("#save6 .save-class:eq(3)").val(data[x].quality);
            $("#save6 .save-class:eq(4)").val(data[x].people);
            $("#save6 .save-class:last").val(data[x].id);
        }
    });
}
function e7(editid){
    $.getJSON("http://60.205.186.12:8080/API/"+u7+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save7 .save-class:first").val(data[x].title);
            $("#save7 .save-class:eq(1) .note-editable").text(data[x].content);
            $("#save7 .save-class:eq(2)").val(data[x].department);
            $("#save7 .save-class:eq(3)").val(data[x].quality);
            $("#save7 .save-class:eq(4)").val(data[x].people);
            $("#save7 .save-class:last").val(data[x].id);
        }
    });
}
function e8(editid){
    $.getJSON("http://60.205.186.12:8080/API/"+u8+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save8 .save-class:first").val(data[x].title);
            $("#save8 .save-class:eq(1) .note-editable").text(data[x].content);
            $("#save8 .save-class:eq(2)").val(data[x].department);
            $("#save8 .save-class:eq(3)").val(data[x].quality);
            $("#save8 .save-class:eq(4)").val(data[x].people);
            $("#save8 .save-class:last").val(data[x].id);
        }
    });
}
