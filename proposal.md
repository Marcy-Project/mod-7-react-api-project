# Pokemon Zhu 2.0

Created by Linqing Zhu, and Mei Zhu.

## 🚀 Mission statement

Our application, Pokemon Zhu 2.0 is for Pokemon enthusiasts. Users will be able to search for pokemons and add their favorite pokemon into a collection. 

## API & React Router

This application will use the Pokemon API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- https://pokeapi.co/api/v2/pokemon/${pokemonName}
  - This endpoint provided us with an object. 
  - We used the `id`, `sprites.front_default`, and `name` from each object. 

- https://pokeapi.co/api/v2/pokemon/${pokemonId}
  - This will fetch a pokemon data by id
  - I will use the `id`, `name`, `stats`, and `sprites.front_default`

- http://localhost:4000/likeCollection
  - This will fetch a list of pokemon that user added to favorite
  - For each like collection, I will use the `id`, `name`, `stats`, and `sprites.front_default`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/pokemon` page, users can search a for a pokemon or randomly generate pokemon.
* On the `/{pokemonName}` page, users can see the details of each pokemon and click "add to favorite" that will add the pokemon to "favorites" collection.
* On the `/favorite` page, users can see all the pokemons from the "favorites" collection.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to ... sort pokemon by type. 
* Users will be able to ... see the shiny versions of the pokemon in the pop up page.

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [X] Finish Proposal 
- [X] Finish Scrum Board 

**Day 2**
- [X] Refactor code from last project into React code 
- [X] useState and useEffect on search bar 
- [X] useContext to store variables 

**Day 3** (MVP due by the end of the day)
- [X] Create a database to store the Pokemons that are starred
- [X] Create the favorites feature (new page) 

**Day 4**
- [X] Make the UI look better 

**Day 5**
- [X] Debug and fix details 

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

<img width="457" alt="Screenshot 2024-08-20 at 5 08 46 PM" src="https://github.com/user-attachments/assets/ed8c903c-000f-4796-af03-25ad4c992c35">

<img width="528" alt="Screenshot 2024-08-20 at 5 07 56 PM" src="https://github.com/user-attachments/assets/e6ef7c41-e2ca-4b9a-b499-2ec7d301ac6d">

![image](https://github.com/user-attachments/assets/97d1380c-3921-47ef-80d2-cf4658bd500e)
![image](https://github.com/user-attachments/assets/939bdc79-745a-47da-b415-0c6c8eb39725)
![image](https://github.com/user-attachments/assets/f07efce2-8574-4e0f-a911-5fa7cff70810)



