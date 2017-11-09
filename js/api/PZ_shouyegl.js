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
var timestamp = Date.parse(new Date());
var u1 = "FjLbtAction";
var u2 = "FjRmjxAction";
var u3 = "FjJtdtAction";
var u4 = "FjYqljAction";
var u5 = "FjQdymAction";
var upload = "UploadAction";
// 列表
$.getJSON("http://47.94.92.201:8080/API/"+u1+"?choice=list", function(data) {
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
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e1("+data[x].id+")' data-toggle='modal' data-target='#m1'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r1("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table1 tbody").html(htmlText);
});
$.getJSON("http://47.94.92.201:8080/API/"+u2+"?choice=list", function(data) {
    $("#table2 tbody").html(""); //清空
    var htmlText = "";

    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        htmlText += "<tr>";
        htmlText += "<td>" + data[x].id +"</td>";
        htmlText += "<td width='30%'>" + data[x].title +"</td>";
        htmlText += "<td title='"+data[x].image+"'>" + data[x].image.substring(0,10) +"</td>";
        htmlText += "<td title='"+data[x].content+"'>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e2("+data[x].id+")' data-toggle='modal' data-target='#m2'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r2("+data[x].id+")'>删除</button> " +
            "<button type='button' class='btn-info btn btn-xs' onclick='ermjx("+data[x].id+")' data-toggle='modal' data-target='#mrmjx'>上传封面图片</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table2 tbody").html(htmlText);
});
$.getJSON("http://47.94.92.201:8080/API/"+u3+"?choice=list", function(data) {
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
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e3("+data[x].id+")' data-toggle='modal' data-target='#m3'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r3("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table3 tbody").html(htmlText);
});
$.getJSON("http://47.94.92.201:8080/API/"+u4+"?choice=list", function(data) {
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
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e4("+data[x].id+")' data-toggle='modal' data-target='#m4'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r4("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table4 tbody").html(htmlText);
});
$.getJSON("http://47.94.92.201:8080/API/"+u5+"?choice=list", function(data) {
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
        htmlText += "<td title='"+data[x].content+"'>" + data[x].content.substring(0,10) +"</td>";
        htmlText += "<td> <div class='btn-group'> " +
            "<button type='button' class='btn-primary btn btn-xs' onclick='e5("+data[x].id+")' data-toggle='modal' data-target='#m5'>编辑</button> " +
            "<button type='button' class='btn-danger btn btn-xs' onclick='r5("+data[x].id+")'>删除</button> " +
            "</div> </td>";
        htmlText += "</tr>";
    }

    $("#table5 tbody").html(htmlText);
});
// 添加
function s1() {
    $("#save1 .date-class").val(timestamp);
    $("#save1 .url-class").val(window.location.href);
    document.getElementById("save1").submit();
}
function s2() {
    /*$("#save2 .date-class").val(timestamp);
    $("#save2 .url-class").val(window.location.href);
    $("#save2 .content-class").val($("#save2 .save-class:eq(1) .note-editable").html());
    document.getElementById("save2").submit();*/

    var si1 = $("#save2 .save-class:first").val();
    var si2 = $("#save2 .note-editable").html();
    var id = $("#save2 .id-class").val();
    var url = "http://47.94.92.201:8080/API/"+u2;
    var params;

    if(id){
        params = {choice:'update',id:id,title:si1,content:si2,date:date,person:'管理员'};
    }else{
        params = {choice:'save',title:si1,content:si2,date:date,person:'管理员'};
    }

    //$.getJSON(url, function(data) {});

    $.post(url,params,function(){});
    window.location.reload();
}
function s3() {
    var si1 = $("#save3 .save-class:first").val();
    var si2 = $("#save3 .save-class:eq(1) .note-editable").html();
    var id = $("#save3 .save-class:last").val();
    var url = "http://47.94.92.201:8080/API/"+u3;
    var params;

    if(id){
        params = {choice:'update',id:id,title:si1,content:si2,date:date,person:'管理员'};
    }else{
        params = {choice:'save',title:si1,content:si2,date:date,person:'管理员'};
    }

    //$.getJSON(url, function(data) {});
    $.post(url,params,function(){});
    window.location.reload();
}
function s4() {
    var si1 = $("#save4 .save-class:first").val();
    var si2 = $("#save4 #save-link").val();
    var id = $("#save4 .save-class:last").val();
    var url = "http://47.94.92.201:8080/API/"+u4;
    var params;

    if(id){
        params = {choice:'update',id:id,title:si1,content:si2,date:date,person:'管理员'};
    }else{
        params = {choice:'save',title:si1,content:si2,date:date,person:'管理员'};
    }

    //$.getJSON(url, function(data) {});
    $.post(url,params,function(){});
    window.location.reload();
}
function s5() {
    $("#save5 .date-class").val(timestamp);
    $("#save5 .url-class").val(window.location.href);
    document.getElementById("save5").submit();
}
// 删除
function r1(removeid) {
    var url = "http://47.94.92.201:8080/API/"+u1+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r2(removeid) {
    var url = "http://47.94.92.201:8080/API/"+u2+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r3(removeid) {
    var url = "http://47.94.92.201:8080/API/"+u3+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r4(removeid) {
    var url = "http://47.94.92.201:8080/API/"+u4+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
function r5(removeid) {
    var url = "http://47.94.92.201:8080/API/"+u5+"?choice=remove&id="+removeid+"";
    $.getJSON(url, function(data) {});
    window.location.reload();
}
// 编辑
function e1(editid){
    $.getJSON("http://47.94.92.201:8080/API/"+u1+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save1 .save-class:first").val(data[x].title);
            $("#save1 .fileinput-filename:first").text(data[x].content);
            $("#save1 .id-class").val(editid);
        }
    });
}
function e2(editid){
    $.getJSON("http://47.94.92.201:8080/API/"+u2+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save2 .save-class:first").val(data[x].title);
            $("#save2 .note-editable").html(data[x].content);
            $("#save2 .fileinput-filename:first").text(data[x].image);
            $("#save2 .id-class").val(editid);
        }
    });
}
function e3(editid){
    $.getJSON("http://47.94.92.201:8080/API/"+u3+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save3 .save-class:first").val(data[x].title);
            $("#save3 .save-class:eq(1) .note-editable").html(data[x].content);
            $("#save3 .save-class:last").val(data[x].id);
            $("#save3 .save-id").val(data[x].id);
        }
    });
}
function e4(editid){
    $.getJSON("http://47.94.92.201:8080/API/"+u4+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save4 .save-class:first").val(data[x].title);
            $("#save4 #save-link").text(data[x].content);
            $("#save4 .save-class:last").val(data[x].id);
            $("#save4 .save-id").val(data[x].id);
        }
    });
}
function e5(editid){
    $.getJSON("http://47.94.92.201:8080/API/"+u5+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#save5 .save-class:first").val(data[x].title);
            $("#save5 .fileinput-filename:first").text(data[x].content);
            $("#save5 .id-class").val(editid);
        }
    });
}
// 上传图片
function ermjx(editid){
    $.getJSON("http://47.94.92.201:8080/API/"+u2+"?choice=find&id="+editid+"", function(data) {
        //for in循环
        for(x in data){
            //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
            $("#rmjx .id-class").val(data[x].id);
            $("#rmjx .fileinput-filename:first").text(data[x].image);
        }
    });
}
function uploadImage() {

    $("#rmjx .date-class").val(timestamp);
    $("#rmjx .url-class").val(window.location.href);
    document.getElementById("rmjx").submit();
}