import {foodList} from "./foodConstant"
import Fuse from 'fuse.js'

//Welcome mesajı vermek için https://jsonplaceholder.typicode.com/users/1 üzerinden name alıp mesaj vermek.

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((userData) => {
        document.getElementById("js-welcome-message").innerHTML = `Welcome ${userData.name}`;
    });

    

class foodSearchApp {
    constructor(foodArray){
        this.store = {
            foods: foodArray
        };
        this.root = document.getElementById("js-container");
        this.initApp();
        
    }

    initApp(){
        const foods = this.store.foods.map(food => this.createCard(food));
        foods.forEach((food)=>{
            this.root.appendChild(food);
        })
        this.searchFood();
    }

    createCard(food){
        const { id,title } = food;
        const cardContainer = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const favButton = document.createElement("button");

        cardTitle.innerText = title;

        favButton.innerText = "Add Favourite"
        favButton.style = `margin-left: auto;`
        cardContainer.style = `display: flex;
                                align-items: center;
                                height: 50px;
                                width: auto;
                                margin: 4px;
                                border: 2px solid black;`

        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(favButton);

        
        
        return cardContainer;
    }

    searchFood() {
        const searchBar = document.getElementById('js-search-input');
        searchBar.addEventListener("keyup" , (e)=>{
            const searchString = e.target.value;
            const filteredFoods = foodList.filter((food) => {
                return food.title.includes(searchString);
            })
            this.createCard(filteredFoods);
        });
    }

    openModal(){
        favButton.addEventListener("click",(e)=>{
            favButton.focus();
            console.log("You've cliked to")
        })
    }
    
}

window.addEventListener("DOMContentLoaded",() =>{
    new foodSearchApp(foodList);
})




