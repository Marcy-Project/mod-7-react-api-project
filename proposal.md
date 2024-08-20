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
- [ ] Finish Proposal 
- [ ] Finish Scrum Board 

**Day 2**
- [ ] Refactor code from last project into React code 
- [ ] useState and useEffect on search bar 
- [ ] useContext to store variables 

**Day 3** (MVP due by the end of the day)
- [ ] Create a database to store the Pokemons that are starred
- [ ] Create the favorites feature (new page) 

**Day 4**
- [ ] Make the UI look better 

**Day 5**
- [ ] TBD / Stretch Feature 

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

[Wireframe for page 2]
