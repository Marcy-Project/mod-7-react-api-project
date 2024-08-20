# Pokemon Zhu 2.0

Created by Linqing Zhu, and Mei Zhu.

## 🚀 Mission statement

Our application, Pokemon Zhu 2.0 is for everyone. It allows users to add their favorite pokemon and store into a like collection. 

## API & React Router

This application will use the Pokemon API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: [Link goes here]
- API endpoint #1
  - Description of endpoint
  - List of data values used by the endpoint
- API endpoint #2
  - Description of endpoint
  - List of data values used by the endpoint
- API endpoint #3
  - Description of endpoint
  - List of data values used by the endpoint

[If your API requires an API key, say so here.]

**Example:**
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

* On the `/pokemon` page, users can search on pokemon and randomly generate pokemon.
* On the `/{pokemonName}` page, users can see the details on each pokemon and click add to favorite that could add the pokemon to like collection.
* On the `/favorite` page, users can see all the pokemon like collection.

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to...
* Users will be able to...
* Users will be able to...

**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 2**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 3** (MVP due by the end of the day)
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 4**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 5**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

[Wireframe for page 2]
