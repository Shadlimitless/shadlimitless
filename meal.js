const menu ={
    _courses:{
      appetizers:[],
      mains:[],
      desserts:[]
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    set appetizers(appetizersIn){
      this.appetizers = appetizersIn;
    },
    get mains(){
        return this._courses.mains;
    },
    set mains(mainsIn){
        this.mains = mainsIn;
    },
    get desserts(){
        return this._courses.desserts;
    },
    set desserts(dessertsIn){
        this.desserts = dessertsIn;
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish={
        name: dishName,
        price: dishPrice
      }
      this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this.courses[courseName];
      return dishes[Math.floor(Math.random()*dishes.length)];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price+main.price+dessert.price;
      return `Your chosen meal is ${appetizer.name}, ${main.name} with ${dessert.name} for dessert. The total price is ${totalPrice}.`;
    }
  }

 
  
  menu.addDishToCourse('appetizers', 'Shrimps', 20);
  menu.addDishToCourse('appetizers', 'Soup', 45);
  menu.addDishToCourse('mains', 'Pork Schnizzle', 120);
  menu.addDishToCourse('mains', 'Chicken Wings', 150);
  menu.addDishToCourse('mains', 'Duck', 115);
  menu.addDishToCourse('desserts', 'cake', 45);
  menu.addDishToCourse('desserts', 'coffee', 60);
  menu.addDishToCourse('desserts', 'ice cream', 50);
  menu.addDishToCourse('appetizers', 'fried vegetables', 45);
  const meal = menu.generateRandomMeal();
  console.log(meal);