# Reacting
##The Learning Curve and Discovery of the React | Redux Framework
*******************************************************************
###Purpose
The Journey to understand the web development paradigm that is the engine of Facebook and hugely distributed web applications.  
The philosophy of the system is as follows:

1. Singular source of truth
2. Separation between container and presentational components
3. Virtual DOM using React Diffing algorithm

The purpose of the exploration of the web framework is to create a personal online portfolio that I can fully control.  

Why react & redux over the typical static web page with vanilla js or JQuery?  
The reason to implement react & redux is not just its recent popularity (which was earned through utility) but through the reusability,
DRY code that it provides to the developer. The logical separation between the layout of the application and the data it renders is
what opens the gates to easy scalability and versitility. Providing a basis for exchangeable modules and quick addition of various 
JS libraries.  

###The Looks
The current build of the online portfolio has the following layout.  
<pre>
+--------------------------------+  
| +---------++-----------------+ |      
| | SIDEBAR ||    BODY         | |  
| |         ||                 | |  
| |         ||                 | |  
| |         ||                 | |  
| |         ||                 | |  
| |         ||                 | |  
| |         ||                 | |  
| |         ||                 | |  
| |         ||                 | |  
| +---------+|                 | |  
|            |                 | |  
+--------------------------------+       
</pre>

The application has a clean layout with a single sidebar feature and a body unit that has components passed down to it through
the react-router components. Currently the layout is rendered in a dynamic manner but relies on static data intialized from JSON
files. The data files have reducers attached to them to dispatch state changes. Reducers are an interesting topic I intend to write
a blog post on, since I was stuck on the concept for too long of a time.   

###Current build of application  

HOME -- Renders out a random quote from a JSON object containing an array of quotes with authors.  
PORTFOLIO -- renders out GIF files from my feedback and control class, which is a requirement for the course.  
ABOUT -- Rendering generic post component, will have a personal story/ personal statement I am in process of writing.  
CONTACT -- Form submission component to be built that will take in data and load the payload into a POSTgreSQL database.  

###Server Deployment

GoDaddy surprisingly cannot host web applications! In light of this let down, Heroku came to the rescue!!  
Heroku offers a great free service for hosting web applications. By serving the out a Express.js server file with resources Heroku builds
out the application through a GitHub repository giving a great CLI to communicate changes to the files. I have utilized many free resources 
online to build out the current version of the app. Below are a number of the people and websites that have given me great relief through
the journey.

1. www.thegreatcodingadventure.com --> fantastic article on deploying to Heroku (Heroku offered great resources as well)
2. The New Boston Youtube videos has a great introduction to the basics of the framework
3. www.learnredux.com --> Wes Bos gives a fantastic tutorial on something other than a ToDo App! Showing how to create image gallery and simple instagram application is a unique approach offering specialty knowledge.

#Updated 2.18.17 -- GJE