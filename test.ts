export class Test{
    constructor(private x?:number,private y?:number){
    }
    getX(){
        return this.x;
    }

    setX(value){
        if(value>0){
            this.x=value
        }
        else console.log("value must be greater than zero");
    }
    getY(){
        return this.y;
    }

    setY(value){
        if(value>0){
            this.y=value
        }
        else console.log("value must be greater than zero");
    }

    static factorial(value){
        let fact=1;
        if(value>0){
            for(let i=1;i<=value;i++){
                fact=fact*i;
            }
        }
            else console.log("value must be greater than 0");
            console.log("factorila of a number is "+fact)
            return fact;
        }
    }

Test.factorial(6);
