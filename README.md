# Agiliti

Agiliti is a web application inspired by Pivotal Tracker built using Ruby on Rails, PostgreSQL,
 React.js, and Flux.

View it live at http://agiliti.heroku.com.

##Summary of features:

###Main functionality
* Create multiple accounts to allow separate business/personal use for a single user
* Add other users to accounts as members, admins, or project creators
* Create projects to track
* Create stories to break down a project into manageable pieces
* Track the status of each story, including unscheduled, unstarted, started, finished, delivered, and accepted/rejected
* View stories in different panels (Current/Done/Backlog) according to status

###Additional features
* Sign up/sign in via Google Oauth
* Drag and drop UI using the ReactDnD library

##Walking through Agiliti

###Sign in/sign up
The first page you should reach when visiting tryagiliti.com is the sign in page.
To most easily explore all the app's features, you should check the box labeled
"Sign in as demo user," but you have a few other options as well. First, you can
sign in using the **hand-rolled authentication system** written with Rails. Your
password is run through a BCrypt hash function before being persisted to the
database, so your password is secure even if the data is breached. Additionally,
the sign-in uses a cookie to store a session token so that you remain signed in
for the duration of your browser session.

The second option for sign in/sign up is through Google Oauth. If you are signed into
your Google account, and have previously connected to Agiliti with Oauth, you will
be taken straight to your dashboard page. If not, the app will get your name and
email from Google and create a new Agiliti account with that information.

###Dashboard
On the Dashboard, you can view all of your projects. You can also create new projects
using the Create Project button. The pulldown menu on the right side (under your username)
gives you the option to logout. Clicking the project name will bring you to the individual
project page.

###Project Page
On the project page, you can see all the stories associated with a particular project.
Based on Agile methodology, these are divided into the Icebox (for unscheduled stories),
the Backlog (for unstarted stories), and Current (for started, finished, or delivered stories).
You can rearrange the panels using **drag and drop**, implemented with the [ReactDnD library](https://github.com/gaearon/react-dnd).
