//prompt()返回值是字符型
//parseFloat()见用户输入的数据转换成浮点数
//对用户输入的数据完成计算
var n1=prompt('输入第一个要运算的数据:');
var n2=prompt('输入第二个要运算的数据:');
//相加后保留2位小数
var result=(parseFloat(n1)+parseFloat(n2)).toFixed(2);
document.writeln(result+'<br>');

//查询水果价格
var fruit=prompt('请输入水果名称:');
switch(fruit){
    case '苹果':
        document.writeln('苹果的价格是3.5'+'<br>');
        break;
    case '桃子':
        document.writeln('桃子的价格是3'+'<br>');
        break;
    case '芒果':
        document.writeln('芒果的价格是5'+'<br>');
        break;
    case '榴莲':
        document.writeln('榴莲的价格是24'+'<br>');
        break;
    default:
        document.writeln('没有此水果'+'<br>');                
}

//new Array()创建数组
var arr=new Array();//空数组
var arr=new Array(3)//3空元素数组
var arr=new Array('语文','数学','英语');//有3元素的数组

//数组字面量创建数组
var empty=[]; //[]相当于newArray()

//修改数组长度
//使用'数组名.length=数字'
var arr3=new Array('1','2','3');
document.writeln(arr3.length+'<br>');
arr3.length=5;//3修改为5
document.writeln(arr3.length+'<br>');
//修改的数组长度等于数组原长度，则不变
//修改的数组长度小于数组原长度,后面多余的元素会被舍弃

//删除数组元素delete
document.writeln(arr3+'<br>');
delete arr3[1];
document.writeln(arr3+'<br>');

//使用new array()创建二维数组
var info1=new Array(
    new Array('Tom',13,155),
    new Array('Lucy',11,152)
);
//输出
document.write('使用new arr(): ');
for(var i=0;i<info1.length;++i){
    for(j=0;j<info1[i].length;++j){
        document.writeln(info1[i][j])
    }
}
//使用 [] 创建二维数组
var num1=[
    [1,3],
    [2,4]
];
//输出
document.write('<br>'+'使用 [] : ');
for(var i=0;i<num1.length;++i){
    for(j=0;j<num1[i].length;++j){  
        document.writeln(num1[i][j])
    }
}
