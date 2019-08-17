/*
 * @Author: Jason
 * @Date: 2019-08-17 10:04:44
 * @Github: https://github.com/JasonLaii
 * @Description: 
 * @LastEditTime: 2019-08-17 13:27:06
 */


// 使用 JSON.parse && JSON.stringify 可以进行深拷贝
// 但是这种方法 不可以 拷贝 函数
var arr = ['old',1,true,['old1','old2'],{old:1}];

var new_arr = JSON.parse(JSON.stringify(arr));

new_arr[3][0] = 'new';
console.log("i");
console.log(arr);       //['old',1,true,['old1','old2'],{old: 1}]
console.log(new_arr);   //['old',1,true,['new','old2'],{old: 1}]


//测试是否可以拷贝函数

var arr_func = [
  function(){ console.log(a) },
  { 
    b: function(){ console.log(b) }
  }];
var new_arr_func = JSON.parse(JSON.stringify(arr_func));

console.log('ii');
console.log(arr_func);
console.log(new_arr_func);

//['old',1,true,['old1','old2'],{old: 1}]

//深拷贝的实现
function deepCopy(obj){

  if( typeof obj !== 'object') return;
  
  let newObj = obj instanceof Array ? [] : {};

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  
  return newObj;
}