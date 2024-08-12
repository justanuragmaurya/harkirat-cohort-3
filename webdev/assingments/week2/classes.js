// ____________________from slides____________________
// class Rectangle {
//     constructor(width, height, color) {
//          this.width = width;
//          this.height = height;
//          this.color = color; 
//     }
    
//     area() {
//         const area = this.width * this.height;
//           return area;
//     }
    
//     paint() {
//              console.log(`Painting with color ${this.color}`);
//     }
    
//  }

//  const rect = new Rectangle(2, 4)
//  const area = rect.area();
//  console.log(area)
//____________________________________________________



// class Person{
//     constructor(name,age,city){
//         this.name = name,
//         this.age = age,
//         this.city = city
//     }

//     getAge(){
//         console.log(this.age)
//     }

//     getName(){
//         console.log(this.name)
//     }

//     getCity(){
//         console.log(this.city)
//     }

//     getData(){
//         console.log(this.name , this.age , this.city)
//     }
//  }

//  const pers1 = new Person("Anurag",10,"Jalandhar")

//  pers1.getData();




class Circle{
    constructor(radius,color){
        this.color = color,
        this.radius = radius
    }

    getArea(){
        2 * Math.PI * this.radius
    }

    paint(){
        console.log(this.color)
    }
}