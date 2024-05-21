

class Key {
private signature: number = Math.random();

getSignature(): number{
    return this.signature
}
}


class Person {
constructor(private key: Key){
   
}

getKey(){
    return this.key
    }

}

abstract class House {
    protected door: Boolean ;
    protected key: Key;
    protected tenants: Person[] =[]

    constructor(key: Key) {
        this.door = false;
        this.key = key;
      }

    comeIn(person: Person): void{
        if(this.door === true){
this.tenants.push(person)
        } else {
            console.log('You are not a need person');
          }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
openDoor(key: Key): void{
if(key.getSignature() === this.key.getSignature()){
  this.door = true;
}else {
    console.log('Go away, i am calling the police');
    
    }
} 
}





const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};