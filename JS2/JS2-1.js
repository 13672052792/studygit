//简单计算机
        function onfocustwo(){
            var jieguo;
            var formtwo1 = parseInt(document.getElementById("input1").value);
            var formtwo2 = parseInt(document.getElementById("input2").value);
            var selectclassone = document.getElementById("selectId").value;
            switch(selectclassone){
                case "+" :
                    jieguo = formtwo1+formtwo2;
                    break;
                case "-" :
                    jieguo = formtwo1-formtwo2;
                    break;
                case "*" :
                    jieguo = formtwo1*formtwo2;
                    break;
                case "/" :
                    jieguo = formtwo1/formtwo2;
                    break; 
            }
            document.getElementById("input3").value = jieguo;
        }
        function onblurtwo(){
            document.getElementById("input3").value = "点击得出结果";
        }


        var a = 10;
        var b = 11//变量赋值
        a++;//自加一
        a--;//自减一
        var c = a > b;//输出flase
        var d = a > b && a == b;//&&并且（条件都是true的情况下输出true）
        var e = a < b || a != b;//||或（只要有一个true就输出true）

        //创建数组
        var f = new Array();//方法一
        f[0] = 10;
        f[1] = 11;
        f[5] = 15;//增加新元素
        //document.getElementById("").innerHTML=f.length;//输出数组长度6
        var f1 = new Array(10, 11);//方法二
        var f2 = [10, 11];//方法三

        //二维数组myarray[ ][ ]
        var myarr = new Array();  //先声明一维 
        for (var i = 0; i < 2; i++) {   //一维长度为2
            myarr[i] = new Array();  //再声明二维 
            for (var j = 0; j < 3; j++) {   //二维长度为3
                myarr[i][j] = i + j;   // 赋值，每个数组元素的值为i+j
            }
        }//方法一
        var myarrtwo = [[10, 11, 12][10, 11, 12]];//方法二

        var arr = ['*', '##', "***", "&&", "****", "##*"];
        arr[7] = "**";

        //for循环
        for (var i = 0; i < arr.length; i++) {
            //if判断句if(){}else if(){}else{}
            if (i % 2 == 0 && arr[i] != null) {
                console.log(arr[i] + "<br>");
            }
            if (i == 1) {
                console.log(arr[7] + "<br>");
            }
        }

        //Switch语句
        var Dateone = 2;
        switch (Dateone) {
            case 0: alert("周一");
                break;  //退出循环
            case 1: alert("周二");
                break;
            case 2:
                break;
            default: alert("条件都未满足输出");
        }

        //while循环
        var whileone = 0;
        while (whileone <= 6) {
            console.log("第" + whileone + "次" + "<br>");
            whileone++;
        }
        

        //do while循环
        var doWhile = 7;
        do {
            console.log("第" + doWhile + "次" + "<br>");
            doWhile++;
        } while (doWhile < 6)

        //创建函数
        function hanshu(a, b) {
            var sum = a + b;
            console.log(sum);
            return sum; //返回函数值,return后面的值叫做返回值。
        }
        var ret = hanshu(2, 2);//调用函数
        console.log(ret);

        //onclick点击事件
        function onclicka(){
            var numa,numb,numc;
            numa = 5;
            numb = 6;
            numc = numa+numb;
            document.write(numc);
        }

        //onmousemove鼠标经过事件
        function onmousemoveone(){
            var p1 = document.getElementsByTagName("p");
            p1[0].style.color="red";
            p1[0].style.width="300px";
        }

        //onmouseout鼠标离开事件
        function onmouseoutone(){
            var p1 = document.getElementsByTagName("p");
            p1[0].style.color="black";
            p1[0].style.width="50px";
        }

        //onfocus光标聚焦事件
        function onfocusone(){
            //alert("触发了光标");
            document.getElementById("xming").value = "";
        }

        //onblur光标失焦事件
        function onblurone(){
            alert("失去焦点");
            //document.getElementById("xming").value = "请输入您的名字";
        }

        //onselect内容选中事件
        function onselectone(){
            alert("选中内容");
        }

        //onchange文本框内容改变事件
        function onchangeone(){
            alert("你已改变文本内容");
        }

        //onload加载事件
        function onloadone(){
            //alert("页面正在加载中");
        }

        //onunload卸载事件（退出，关闭，刷新页面时）(多数浏览器不支持)
        //window.onunload = onunloadone();
        function onumloadone(){
            alert("您确定要离开该网页吗？");
        }