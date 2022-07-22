const func = () => console.log(this);

func();

const obj = {
  name: "Peter",
  //when we compose arrow function, it doesn't display anything because it saves the original context (global)
  func,
};

obj.func();

const obj2 = {
  name: "Antoan",
  method: function () {
    const func2 = () => {
      console.log(this);
    };
    func2();
  },
};

obj2.method()

const obj3 = {
    name:"Nadezhda",
    method:function(){
        const func3 = () =>{
            console.log(this)
        }
        func3.call(obj2)
    }
}
obj3.method()

//These three methods 'call','apply' and 'bind' don't work on arrow/lambbda functions
//Arrow function stores the context where we defined it firstly (obj3), not (obj2)