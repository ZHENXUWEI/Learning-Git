alert('hello!');//浏览器中弹出警告框
document.write('<br>'+'我是document.write()语句\r');//网页输出信息
console.log('我是console.log()语句');//控制台输出信息
prompt('请输入用户名');//弹出输入框
/*document.write('<srcipt>alert(123);<\/srcipt>')*/

//使用js新建html标签
//获取dom中的元素
var child1=document.getElementById("child1");
//打印输出
console.log(child1);
//创建元素
var ele=document.createElement("div");
//给元素添加文字内容
ele.innerText="我是被追加创建出来的元素"
//把创建出来的元素追加到父div里
child1.appendChild(ele);

//声明变量
var myName;
var age,sex;
//为变量赋值
myName='小明';
age=18;
sex='男';
//输出变量的值
document.write('<br>'+myName);
document.write('<br>'+age);
document.write('<br>'+sex);
//声明and赋值
var myName2='小红';
document.write('<br>'+myName2);//输出

//交换变量值
var leftHand='西餐刀';
var righthand='西餐叉';
document.write('<br>'+leftHand);//输出原左手
document.write(righthand);//输出原右手
var temp=leftHand;
leftHand=righthand;
righthand=temp;
document.write('<br>'+leftHand);//输出现左手
document.writeln(righthand);//输出现右手

/* document.write(Number.MAX_VALUE);//输出最大值,最小值min
   var flag=true;//boolean布尔型
   var bin=26;//number数值型
   var fnum=0.01;//浮点型
   var str='知识'//String字符型*///数据类型

//数据类型检测
document.writeln('<br>'+typeof 2+'\n');

//数据类型转换
//数字转整数
document.writeln('<br>'+parseInt('12.12'))//输出12
document.writeln('<br>'+parseInt('0xF'))//输出15
document.writeln('<br>'+parseInt('F',16))//输出15，16为数字进制
//数字转字符
var num1=12,num2=24;
document.writeln('<br>'+String(num1));//输出12
document.writeln('<br>'+num2.toString(2))//转2进制数再输出字符型

//表达式
var a=1,b=1,c=2,d=2;
//自增
document.writeln('<br>'+a);
document.writeln(++a);
document.writeln(a);
document.writeln(b);
document.writeln(b++);
document.writeln(b);
//自减
document.writeln('<br>'+c);
document.writeln(--c);
document.writeln(c);
document.writeln(d);
document.writeln(d--);
document.writeln(c);

//规定浮点数小数店数
var nnum=1.235;//有四舍五入
document.writeln('<br>'+nnum.toFixed(2));//toFixed()括号内天小数点数位数

//字符串拼接
var pJie=myName+myName2;
document.writeln('<br>'+pJie);

//隐式转换
//利用隐式减数据转为数值型
document.writeln('<br>'+'12'-0);
document.writeln('12'*1);
document.writeln('12'/1);
//利用隐式减数据转为字符型
document.writeln('<br>'+12+'');
document.writeln(null+'');