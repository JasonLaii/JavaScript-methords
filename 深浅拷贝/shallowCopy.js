/*
 * @Author: Jason
 * @Date: 2019-08-17 10:04:55
 * @Github: https://github.com/JasonLaii
 * @Description: 浅拷贝
 * @LastEditTime: 2019-08-17 10:47:38
 */

//通过数组的一些方法可以 返回新数组的特性 来实现拷贝  --concat,slice

var arr = ["old", 1, true, null, undefined];

var new_arr = arr.concat();
// var new_arr = arr.slice();

new_arr[0] = 'new';

console.log('i');
console.log(arr);       //['old',1,true,null,undefined]
console.log(new_arr);   //['new',1,true,null,undefined]

//如果数组嵌套了对象或者数组  concat,slice就只会拷贝对象和数组的引用
//因此 concat,slice是一种浅拷贝
var arr_obj = [{old:'old'},['old']];
var new_arr_obj = arr_obj.concat();

arr_obj[0].old = 'new';
arr_obj[1][0] = 'new';

console.log('ii')
console.log(arr_obj);       //[{old:'new'},['new']]
console.log(new_arr_obj);   //[{old:'new'},['new']]


//浅拷贝的实现

function shallowCopy(obj){
  
  if( typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {};
  for(let key in obj){
    if (obj.hasOwnProperty(key)) newObj[key] = obj[key];
  }
  return newObj;
}


// arr = ['old',1,true,null,undefined]
// arr_obj = [{old:'old'},['old']]
console.log('iii');

var arr_i = ["old", 1, true, null, undefined];
var new_arr_i = shallowCopy(arr_i);
new_arr_i[0] = 'new';
console.log(arr_i);
console.log(new_arr_i);

var arr_obj_i = [{ old: "old" }, ["old"]];
var new_arr_obj_i = shallowCopy(arr_obj_i);
new_arr_obj_i[0].old = 'new';
new_arr_obj_i[1] = 'new';

console.log(arr_obj_i);
console.log(new_arr_obj_i);