class Animal {
  constructor() {
    this.type = "animal";
  }
  say(val) {
    setTimeout(function () {
      console.log(this); //window
      console.log(this.type + " says " + val);
    }, 1000)
  }
  say1(val) {
  	console.log(this.type + " says" + val);
  }
  say2(val) {
  	return () => {
  		console.log(this.type + ' says' + val);
  	};
  }
  say3(val) {
  	const func = (caller) => {caller();};
  	func(() => {
  		console.log(this.type + ' says' + val);
  	});
  }
  say4(val) {
  	setTimeout(()=> {
  		console.log(this.type + ' says' + val);
  	}, 1000);
  }
}
var animal = new Animal();
animal.say("hi"); //undefined says hi
animal.say1('hi1'); //animal says hi1
animal.say2('hi2')(); //animal says hi2
animal.say3('hi3'); //animal says hi3
animal.say4('hi4');//animal says hi4

