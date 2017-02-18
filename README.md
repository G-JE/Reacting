# Reacting
REACTING --- My Learning and Discovery of the React|Redux Framework
*******************************************************************
The Journey to understand the web development paradigm that is the engine of Facebook and hugely distributed web applications. 
The basis of the structure is as follows:

1. Singular source of truth
2. Separation between container and presentational components
3. Virtual DOM using React Diffing algorithm

The purpose of the exploration of the web framework is to create a personal online portfolio that I can fully control.

Why react|redux over the typical static web page with vanilla js or JQuery?
The reason to implement react redux is not just its recent popularity (which was earned through utility) but through the reusability,
DRY code that it provides to the developer. The logical separation between the layout of the application and the data it renders is
what opens the gates to easy scalability and versitility. Providing a basis for exchangeable modules and quick addition of various 
JS libraries.

The current build of the online portfolio has the following layout.
 ________________________________
|  ________  _________________   |     
| | SIDEBAR |     BODY         | |
| |         |                  | |
| |         |                  | |
| |         |                  | |
| |         |                  | |
| |         |                  | |
| |         |                  | |
| |         |                  | |
| |         |                  | |
| |_________|                  | |
|           |                  | |
|___________|__________________|_|         

The application has a clean layout with a single sidebar feature and a body unit that has components passed down to it through
the react-router components. Currently the layout is rendered in a dynamic manner but relies on static data intialized from JSON
files. The data files have reducers attached to them to dispatch state changes. Reducers are an interesting topic I intend to write
a blog post on, since I was stuck on the concept for too long of a time. 

Current build of application

HOME -- Renders out a random quote from a JSON object containing an array of quotes with authors.
PORTFOLIO -- renders out GIF files from my feedback and control class, which is a requirement for the course.
ABOUT -- Rendering generic post component, will have a personal story/ personal statement I am in process of writing.
CONTACT -- Form submission component to be built that will take in data and load the payload into a POSTgreSQL database.

Updated 2.18.17 -- GJE