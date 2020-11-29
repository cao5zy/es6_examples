const lodash = require("lodash");
const { extend, merge} = lodash;

const test_extend = () =>{
  const obj1 = { a :{ name: "alan",
    b:{
      c: "Alan"
    }
  }
               };

  const obj2 = {
    a: {name: "alan1"}
  };

  const obj3 = extend({}, obj1, obj2);

  console.log('obj3', obj3); //结果: obj3 { a: { name: 'alan1' } } , 说明extend函数，会用左边对象中最高一级的属性覆盖右边对象中的同名属性
};

const test_merge = ()=>{
  const obj1 = { a :{
    name: "alan",
    b:{
        c: "Alan"
      }
    }
  };

  const obj2 = {
    a: {
       b:{
         c: "Alan1"
       }
    }
  };

  const obj4 = merge({}, obj1, obj2);

  console.log('obj4', obj4); //结果: obj4 { a: { name: 'alan', b: { c: 'Alan1' } } }，说明merge函数会从左到右，合并整个对象树，左边的对象会覆盖右边的对象
  
};

test_extend();

test_merge();