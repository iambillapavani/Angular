import{Test} from "./test";

export class MTest{
   static  getFact(value){
        return  Test.factorial(value);
    }
}
console.log(MTest.getFact(8));
let factorial = MTest.getFact(8);
console.log("8 factorila is "+factorial);