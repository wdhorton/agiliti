# Agiliti

## Minimum Viable Product

Agiliti is a web application inspired by Pivotal Tracker built using Ruby on Rails
and React.js. Agiliti allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete user stories
- [ ] Assign point values to user stories
- [ ] Organize stories within iterations
- [ ] Tag stories with multiple tags and search notes by tag
- [ ] Apply complex styling to notes while editing
- [ ] Set reminders on notes

<!-- ## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md -->

## Implementation Timeline

### Phase 1: User Authentication, Story Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Stories.

### Phase 2: Flux Architecture and Note CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Story store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Stories `List`, `ListItem` and `Form`. At the end of Phase 2,
Stories can be created, read, edited and destroyed in the browser.

### Phase 3: Iterations (2 days)

Phase 3 adds organization to the Stories. Stories belong to an Iteration, which has
its own `Index` view. Create JSON API for Iterations. Notes can also now be
tagged with multiple tags. Users can bring up notes in a separate `SearchIndex`
view by searching for their tags. Once the tag search is implemented, I will
extend this to a fuzzy search through every Story's content.

### Phase 6: Styling Cleanup and Seeding (1 day)

In Phase 6 I will concentrate on CSS and make my site match the original Pivotal Tracker.
