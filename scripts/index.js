function Car(){
  this.make = 'Ford';
  Car.count += 1;
}

Car.count = 0;


function Subaru(){
  this.make = 'Subaru';
}

Subaru.prototype = new Car();