import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
 
  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!
  }

  getAllFoodByTag(tag:string) : Foods[]{

    return tag == "All"? this.getAll() : this.getAll().filter(food=>food.tags?.includes(tag))
  
    //you can write this statement which is very simple
  }


  getAllTag(): Tag[]{
    return [

      {name: 'All', count : 12},
     { name: 'FastFood', count : 7},
     { name : 'Pizza', count : 2},
     { name : 'Lunch', count : 6},
     { name : 'SlowFood', count : 3},
     { name : 'Hamburger', count : 1},
     { name : 'BreakFast', count : 2} 

    ]

  }

  getAll():Foods[]{
    return[ 
      {
        id: 1,
        name: 'Biryani Bucket',
        cookTime: '30-40',
        price: 20,
        favorite: false,
        origins: ['India','UAE'],
        star: 4.5, 
        imageUrl: '/assets/biryani-bucket.jpg',
        tags : ['Biryani','Lunch' ]

      },
      {
        id: 2,
        name: 'Chicken Shawarma',
        cookTime: '5',
        price: 5,
        favorite: true,
        origins: ['Beirut','Turkey','UAE'],
        star: 4.5, 
        imageUrl: '/assets/chicken-shawarma.jpg',
        tags : ['FastFood','Dinner','Shawarma' ]
      },
      {
        id: 3,
        name: 'Dinner Meal',
        cookTime: '15-20',
        price: 10,
        favorite: false,
        origins: ['America','Scotland'],
        star: 4, 
        imageUrl: '/assets/dinner-meal.jpg',
        tags : ['FastFood','Dinner']
      },
      {
        id: 4,
        name: 'Hamburger',
        cookTime: '15-20',
        price: 10,
        favorite: false,
        origins: ['Germany','France'],
        star: 3.5, 
        imageUrl: '/assets/hamburger.jpg',
        tags : ['FastFood','Hamburger','Lunch']
      },
      {
        id: 5,
        name: 'Alfaham',
        cookTime: '15-20',
        price: 12,
        favorite: false,
        origins: ['UAE','Turkey'],
        star: 2.5, 
        imageUrl: '/assets/alfaham.jpg',
        tags : ['FastFood','Lunch','Alfaham']
      },
      {
        id: 6,
        name: 'Meatballs',
        cookTime: '15-20',
        price: 12,
        favorite: true,
        origins: ['UAE','India'],
        star: 4, 
        imageUrl: '/assets/meatballs.jpg',
        tags : ['SlowFood','Meatballs']
      },
      {
        id: 7,
        name: 'Peri Peri Chicken Burger',
        cookTime: '15-20',
        price: 14,
        favorite: false,
        origins: ['India','Turkey'],
        star: 4.5, 
        imageUrl: '/assets/peri-peri-chicken-burger.jpg',
        tags : ['FastFood','Lunch','burger']
      },
      {
        id: 8,
        name: 'Dosa',
        cookTime: '5-10',
        price: 6,
        favorite: false,
        origins: ['India','Sri Lanka'],
        star: 4.5, 
        imageUrl: '/assets/dosa.jpg',
        tags : ['BreakFast','Dosa']

      },
      {
        id: 9,
        name: 'Margherita Pizza',
        cookTime: '15-25',
        price: 13,
        favorite: false,
        origins: ['Italy','Spain'],
        star: 4.5, 
        imageUrl: '/assets/margherita-pizza.jpg',
        tags : ['Lunch','FastFood','Pizza']

      },
      {
        id: 10,
        name: 'BBQ Chicken Pizza',
        cookTime: '15-25',
        price: 15,
        favorite: false,
        origins: ['Italy','Germany'],
        star: 4, 
        imageUrl: '/assets/BBQ-Chicken-Pizza.jpg',
        tags : ['Lunch','FastFood','Pizza']

      }, 
       {
        id: 11,
        name: 'Chicken Soup',
        cookTime: '10-20',
        price: 8,
        favorite: false,
        origins: ['India','China'],
        star: 4, 
        imageUrl: '/assets/chicken-soup.jpg',
        tags : ['Dinner','SlowFood']

      },
      {
        id: 12,
        name: 'Idiyappam',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['India'],
        star: 4.5, 
        imageUrl: '/assets/Idiyappam.jpg',
        tags : ['BreakFast','SlowFood']

      }


     
    ]

  }
}
