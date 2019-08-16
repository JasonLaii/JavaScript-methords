/*
 * @Author: Jason
 * @Date: 2019-08-16 13:59:49
 * @Github: https://github.com/JasonLaii
 * @Description: 
 * @LastEditTime: 2019-08-16 15:54:20
 */


function unique(arr){

  let res = [];
  
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<res.length;j++){

      if( arr[i] === res[j] ) break;
    }
    if( j === res.length ) res.push(arr[i]);
    
  }
  return res
}
console.log("unique");
console.log(unique([1, 2, 1, 2, "1", "1"]));

//indexOf
function uniqueii(arr){

  let res = [];
  for(let i =0;i<arr.length;i++){
    
    if( !~res.indexOf(arr[i]) ) res.push(arr[i])
  }
  return res;
}
console.log("unique ii");
console.log(uniqueii([1,2,1,2,"1","1"]));

console.log(~0)

//排序后去重
function uniqueiii(arr){
  if(arr.length === 1 ) return arr;

  let res = [];
  arr = arr.sort((a,b)=> a-b);
  for(let pre=0; pre<arr.length; pre++){
    let next = pre + 1;
    if(arr[pre] === arr[next]) continue;
    if( arr[pre] !== arr[next]) res.push(arr[pre]);
  }
  return res;
}
console.log("unique iii");
console.log(uniqueiii([1, 2, 1, 2, "1", "1"]));


//工具函数
function uniqueiv(arr,isSorted){

  let res = [];
  for(let i=0;i<arr.length;i++){

    if(isSorted){
      let j = i + 1;
      if(arr[i] === arr[j]) continue;
      if( arr[i] !== arr[j]) res.push(arr[i]);
    }else if( !~res.indexOf(arr[i]) ){
      res.push(arr[i]);
    }
  }
  return res;
}
console.log('unique iv');
console.log(uniqueiv([1, 2, 1, 2, "1", "1"]));
console.log(uniqueiv([1,1,2,2],true))


//字母大小写视为一致 ，保留一个即可
function uniquev(arr,isSorted,iteratee){
  let res = [];
  let seen = [];
  for(let i=0; i<arr.length; i++){
    
    let computed = iteratee ? iteratee(arr[i],i,arr) : arr[i];
    if(isSorted){
    
      if( !i || seen !== computed) res.push(arr[i]);
      
      seen = computed;
    }else if(iteratee){
      if( !~seen.indexOf(computed) ){
        seen.push(computed);
        res.push(arr[i]);
      }

    }else if( !~res.indexOf(arr[i]) ){
      res.push(arr[i]);
    }
  }
  return res;
}
console.log('unique v')
console.log(uniquev([1,1,'a','A',2,2],false,function(item){
  return typeof item == 'string' ? item.toLowerCase() : item;
}))