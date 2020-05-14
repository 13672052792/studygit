  //定义时间函数
    var myDate = new Date();

//get/setTime()返回/设置时间方法
    document.write("当前时间："+myDate+"<br>");
    var myTime = myDate.setTime(myDate.getTime()+60*60*1000);
    document.write("一小时后："+myTime+"<br>");

//鼠标移入事件
    function onmousemovetwo(){

//get/setFullYear()返回/设置年份
    var myyear = myDate.getFullYear();
    //myDate.setFullYear(1994);

    var weekends = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六",]

//获取数值天（number）
    var weeks = myDate.getDay();
    document.getElementById("datep1").innerHTML = "今年是"+myyear+"&nbsp;"+"今天是"+weekends[weeks];
    //document.getElementById("dateyearone").innerHTML = myDate;
    }

    function onmouseouttwo(){
        document.getElementById("datep1").innerHTML = "鼠标移入查看时间";
    }




//String对象
    var stringone = "javascript String";
    stringone.length;//返回字符串长度

    var stringbig = stringone.toUpperCase();//小写字母变为大写

//charAt() 方法返回指定位置的字符
    document.write(stringone.charAt(3)+"<br>");
    document.write(stringone.charAt(2))
//indexOf() 方法返回某个字符串值在字符串中首次出现的位置
    document.write(stringone.indexOf("a",2)+"<br>");//2指开始检索的位置，可空
    document.write(stringone.indexOf("a"));
//split() 字符串分割
    document.write(stringone.split("a",2)+"<br>");//1指分割的次数
    document.write(stringone.split("a"))
//substring() 字符串提取
    document.write(stringone.substring(2,5)+"<br>");
    document.write(stringone.substring(2,5));

//substr() 提取指定数目的字符
    document.write(stringone.substr(2,5)+"<br>");//5指长度




//Math对象（无需声明）

//ceil() 向上取整
    document.write(Math.ceil(2.8)+"<br>");

//floor() 向下取整
    document.write(Math.floor(2.8)+"<br>");

//round() 四舍五入
    document.write(Math.round(2.8)+"<br>");

//random() 随机数 （0-1）
    document.write(Math.random()+"&emsp;&emsp;&emsp;");
    document.write(Math.random()*10+"<br>");//0-10的随机数




//Array数组对象
    var myArray = new Array();
    myArray[0] = 0;
    myArray[1] = 1;
    var myArrayTwo = new Array(5);//5个空元素
    var myArrayThree = ["元素1","元素2","元素3","元素4",5,6];//myArrayThree[0]="元素1"

//concat() 数组连接
    document.write(myArrayThree.concat(myArray)+"<br>");

//join() 指定分隔符连接数组元素
    document.write(myArrayThree.join("----")+"<br>");

//reverse() 颠倒数组元素顺序
    document.write(myArrayThree.reverse()+"<br>");

//slice() 选定元素
    document.write("<p>选定元素</p>"+myArray.slice(1)+"<br>");

//sort() 数组排序
    document.write(myArray.sort()+"<br>");
    function sortone(a,b){
        return a - b;//升序，，b-a 降序
    }
    var myarr = new Array("80","16","50","6","100","1");
    document.write(myarr.sort(sortone)+"<br>");





//javascript 计时器
    //setInterval() 每隔指定的时间执行代码
    var attime;
    function clock1(){
        var times = new Date();
        attime = times.getHours()+"时"+times.getMinutes()+"分"+times.getSeconds()+"秒"
        document.getElementById("pp").value = attime;
    }
    var ii = setInterval("clock1()",1000);//1s=1000ms
    function ondio(){
        clearInterval(ii);
    }
    
    //set/clearTimeout() 计数器
    var nums=0,j;
    function timeoutone(){
         document.getElementById("pp2").value= nums;
            nums = nums+1;
            j = setTimeout(timeoutone,1000);
    }
    function timeouttwo(){
        clearTimeout(j);
    }
    function timeoutthree(){
        document.getElementById("pp2").value = "0";
        nums = 0;
        clearTimeout(j);
    }
    
//History对象 记录了用户曾经浏览过的页面(URL)
    function Historyone(){
        window.history.back();//加载前一个url
        //window.history.go(1);//加载后一个url
    }
    
//Location对象 获取或设置窗体的URL
    function Locationone(){
        var ppthree = window.location.href;
        document.getElementById("pp3").innerHTML= ppthree;
    }

//Navigator对象 检测浏览器与操作系统的版本
    var NavigatorName = navigator.appName;
    var NavigatorVer = navigator.appVersion;
    document.getElementById("Navigatorones").innerHTML="浏览器名字"+NavigatorName+"浏览器信息"+NavigatorVer;

//screen对象 获取用户的屏幕信息
    //alert(window.screen.height);






//DOM对象

//getElementsByName()方法 通过元素的 name 属性查询元素
    var ByName = document.getElementsByName("names");
    //alert(ByName.length);

//getElementsByTagName()方法   Tagname是标签的名称
    var TagName = document.getElementsByTagName("input");
    //alert(TagName.length);

//getAttribute()方法 通过元素节点的属性名称获取属性的值
    var Attribute = document.getElementById("pp");
    var Attributeone = Attribute.getAttribute("name");
    var Attributetwo = Attribute.getAttribute("type");
    //alert(Attributetwo);

//setAttribute()方法 增加一个指定名称和值的新属性
    Attribute.setAttribute("name","toname");
    //alert(Attribute.getAttribute("name"));


//节点属性 nodeName（名称） nodeValue（值） nodeType（类型）
                                            // 元素类型    节点类型
                                            //   元素          1
                                            //   属性          2
                                            //   文本          3
                                            //   注释          8
                                            //   文档          9
    var node = document.getElementsByTagName("input");
    for(var i=0; i<node.length; i++){
        //document.write(node[i].nodeType+"<br>");
    }

//访问子节点childNodes
    var child = document.getElementById("div-1").childNodes;
    document.write("div-1子节点个数"+child.length+"&nbsp;&emsp;")
    document.write(child[1].nodeName+"<br>");

    var childone = document.getElementsByTagName("div")[0].childNodes;
    document.write("div[0]子节点个数"+childone.length+"&nbsp;&emsp;");
    document.write(childone[3].nodeName+"<br>");

    var childtwo = document.getElementsByTagName("div")[0];
    document.write(childtwo.firstChild.nodeName+"<br>");
    document.write(childtwo.lastChild.nodeType+"<br>");

//访问父节点parentNode
    var paren = document.getElementById("form-1").parentNode;
    document.write("form-1的父元素"+paren.nodeName+"&emsp;");

    var parentone = document.getElementById("con").parentNode;
    document.write("con的父节点："+parentone.nodeName+"&emsp;");
    document.write("con的祖节点："+parentone.parentNode.nodeName+"<br>");

//访问兄弟节点  nextSibling 返回节点之后紧跟的节点 previousSibling 返回节点之前紧跟的节点
    function get_nextSibling(n){
        var nextSiblingone = n.nextSibling;
        while(nextSiblingone.nodeType!=1){
            nextSiblingone = nextSiblingone.nextSibling;
        }
        return nextSiblingone;
    }
    function get_previousSibling(n){
        var previousSiblingone = n.previousSibling;
        while(previousSiblingone.nodeType!=1){
            previousSiblingone = previousSiblingone.previousSibling;
        }
        return previousSiblingone;
    }
    var nextSiblingtwo = document.getElementById("input3");
    document.write(nextSiblingtwo.nodeName+"="+nextSiblingtwo.value);
    var yy = get_nextSibling(nextSiblingtwo);
    document.write(yy.nodeName+"="+yy.value+yy.nodeType);
    var zz = get_previousSibling(nextSiblingtwo);
    document.write(zz.nodeName);

//创建元素节点createElement()
    var nums = 1,j,textnode;
    var mainone = document.getElementById("con");
    var inputtwo = document.createElement("input");  
        inputtwo.id = "hansan";
        inputtwo.type = "text"; 
        inputtwo.value = "想的"+nums+"分钟";
    inputtwo.setAttribute("onclick","javascript:alert('想的'+num+'分钟')");
    mainone.appendChild(inputtwo);  


//创建文本节点createTextNode()
    var pp = document.createElement("p");
    pp.id = "message";
    var textnode = document.createTextNode("想的"+nums+"秒钟");
    mainone.appendChild(pp);
    pp.appendChild(textnode);
    timeoutthree();
    


//插入节点appendChild() 最后一个子节点列表之后添加一个新的子节点
    var otest = document.getElementById("test");
    var newnode = document.createElement("option");
    newnode.innerHTML = "科学家";
    otest.appendChild(newnode);

//插入节点insertBefore() 在已有的子节点前插入一个新的子节点
    var inser = document.getElementById("test");
    var op = document.getElementById("op1");
    var newinser = document.createElement("option");
    newinser.innerHTML="律师";
    inser.insertBefore(newinser,op);

//删除节点removeChild() 返回被删除的节点
    var inser = document.getElementById("con");
    var ins = inser.removeChild(inser.childNodes[0]);
    //alert(ins.innerHTML);

