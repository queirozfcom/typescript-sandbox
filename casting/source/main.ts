
class Foo {
    bar: number;
    baz: string;

    constructor(bar: number, baz:string) {
        this.bar = bar;
        this.baz = baz;
    }

}

const foo = new Foo(123,'abc');
foo.bar = 123;
foo.baz = 'hello';

// var num = parseInt("45");

// console.log(typeof num);

// let instance: any = foo; 
// console.log(instance.constructor.name);

var num = 45
var numStr = num.toString();

// console.log(typeof numStr);

const peopleObj = {
    john: {
      name: "john",
      age: 20
    },
    mary: {
      name: "mary",
      age: 22
    }
  }

// const peopleArray = Object.keys(peopleObj).map(key => peopleObj[key]);

// console.log(peopleArray);

interface DogLike{
    numPaws: number;
    age: number;
    bark()
}

const rex = {
    numPaws:4,
    age: 10
}

console.log(typeof rex);

const rexAsDog = rex as DogLike;

console.log(typeof rexAsDog);


// const toDo = <IToDoDto> rex;
// // or
// const toDo = req.body as IToDoDto;


