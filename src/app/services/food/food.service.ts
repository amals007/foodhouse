import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
 
  constructor() { }
  getAllFoodByTag(tag:string) : Foods[]{

    return tag == "All"? this.getAll() : this.getAll().filter(food=>food.tags?.includes(tag))
  
    //you can write this statement which is very simple
  }


  getAllTag(): Tag[]{
    return [

      {name: 'All', count : 14}

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
        tags : ['Fastfood','Dinner','Shawarma' ]
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
        tags : ['Fastfood','Dinner']
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
        tags : ['Fastfood','hamburger','Lunch']
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
        tags : ['Fastfood','Lunch','Alfaham']
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
        tags : ['Fastfood','Lunch','Meatballs']
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
        tags : ['Fastfood','Lunch','burger']
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
        tags : ['Fastfood','Break-fast','Dosa']

      }


     
    ]

  }
}
