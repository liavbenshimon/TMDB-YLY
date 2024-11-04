# Task Link

- https://www.notion.so/lirone-fitoussi/Playground-Project-Tasks-Joke-Testing-API-133cb8e07029801599e3d1bc0ed83cb0

# Project - Architecture

* **LIAV - server side**
* **SABAG - FrontEnd**
* **Yohan - FrontEnd**

# WorkFlow - Building a structure


### 1. **Divide Pages by Purpose**

* **Core Page Setup** : You and Sabag can decide who handles specific pages based on functionality, like a "Jokes" page, "User Profile" page, etc. For instance:
* *You* : Handle setting up the main page for joke viewing and interaction.
* *Sabag* : Work on a profile or user management page where users can see their created jokes, account info, etc.

### 2. **Component-Based Division**

* Break each page into smaller components if you have a page with complex sections.
  * *Example for a "Jokes" Page* : One of you can handle a `JokeList` component, which displays the list of jokes, while the other handles a `JokeForm` component, where users submit new jokes.
* This keeps your code organized and reduces dependencies, as each of you works within specific components.

### 3. **Shared Layouts and Reusable Components**

* Decide who will set up reusable components, like a `Header` or `Footer`, which can be used across pages. One person can take responsibility for the general layout (like navigation, header, and footer), while the other focuses on the unique page content.

### 4. **Define Data Flow Early**

* Agree on how data will be passed between pages and components. This ensures that the person handling the page setup knows exactly what data or API interactions they need to integrate.
