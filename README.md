**Project Name:** <br/>
The Traveling Salesman Problem

**Requirements:** <br/>
Java SE
NodeJS
React
**Backend*<br/><br/>
To run the program only in java run Driver.java file. This will display the results of the project in your IDE terminal.

**Visualization:**
Our program runs on SpringBoot in the backend and React in the frontend.

**To run the project with UI:**

Run TspSpringApplication.java
Open the UI folder in the terminal and run npm i to install the node modules.
To run the UI, run npm start and open localhost:3000.
Our backend is running on localhost:8080, if the frontend fails to run, you can view the tour array on the following URLs:<br/><br/>


**
localhost:8080/christofides<br/>
localhost:8080/two-opt<br/>
localhost:8080/three-opt<br/>
localhost:8080/aco<br/>
localhost:8080/sa**<br/>
Once **localhost:3000** is opened, ONLY use the navbar to navigate between the 5 algorithm visualizations.

Christofides and Two opt return data almost immediately and start showing the tour on our map. However, Simulated Annealing and Ant Colony Optimization take almost 2-3 minutes to run. Three-opt takes 15-20 minutes to run. It is recommended not to switch algorithm selection before the algorithm fully prints the route on the map.

The preferred way to run the visualization is to start with Christofides -> Two opt -> Ant Colony -> Simulated Annealing -> Three opt.

Note: Please ignore the pop-up box which says “this page can’t load google maps correctly”. It will disappear if you click OK. It is appearing due to a billing issue with Google API.
