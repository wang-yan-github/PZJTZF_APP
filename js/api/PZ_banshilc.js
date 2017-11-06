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
var u1 = "BslcXklcAction";
var u2 = "BslcCflcAction";
var u3 = "BslcZzlcAction";
var u4 = "BslcJclcAction";
// 列表
$.getJSON("http://localhost:8080/API/"+u1+"?choice=list", function(data) {
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        $("#save1 .id-class").text(data[x].id);
        $("#save1 .fileinput-filename:first").text(data[x].content.substring(0,35));
    }
});
$.getJSON("http://localhost:8080/API/"+u2+"?choice=list", function(data) {
    //for in循环
    for(x in data){
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        $("#save2 .id-class").text(data[x].id);
        $("#save2 .fileinput-filename:first").text(data[x].content.substring(0,35));
    }
});
$.getJSON("http://localhost:8080/API/"+u3+"?choice=list", function(data) {
    //for in循环
    for(x in data){
        $("#save3 .id-class").text(data[x].id);
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        $("#save3 .fileinput-filename:first").text(data[x].content.substring(0,35));
    }
});
$.getJSON("http://localhost:8080/API/"+u4+"?choice=list", function(data) {
    //for in循环
    for(x in data){
        $("#save4 .id-class").text(data[x].id);
        //x表示是下标，来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        $("#save4 .fileinput-filename:first").text(data[x].content.substring(0,35));
    }
});
//保存
function s1() {
    if($("#save1 .file-class").val()){
        $("#save1 .date-class").val(timestamp);
        $("#save1 .url-class").val(window.location.href);
        document.getElementById("save1").submit();
    }
}
function s2() {
    if($("#save2 .file-class").val()){
        $("#save2 .date-class").val(timestamp);
        $("#save2 .url-class").val(window.location.href);
        document.getElementById("save2").submit();
    }
}
function s3() {
    if($("#save3 .file-class").val()){
        $("#save3 .date-class").val(timestamp);
        $("#save3 .url-class").val(window.location.href);
        document.getElementById("save3").submit();
    }
}
function s4() {
    if($("#save4 .file-class").val()){
        $("#save4 .date-class").val(timestamp);
        $("#save4 .url-class").val(window.location.href);
        document.getElementById("save4").submit();
    }
}