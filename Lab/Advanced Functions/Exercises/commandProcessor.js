function tasks() {
  let state = "";

  function append(str) {
    state += str;
  }
  function removeStart(number) {
    state = state.slice(number);
  }
  function removeEnd(number) {
    state = state.slice(0, -number); //tony,slice(0,-2)-> t
  }
  function print() {
    console.log(state);
  }
  //   append("hello");
  //   append("again");
  //   removeStart(3);
  //   removeEnd(4);
  //   print();
  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}

// tasks()

let object = tasks();

object.append("hello");
object.removeStart(2)
object.removeEnd(1)
object.print();
