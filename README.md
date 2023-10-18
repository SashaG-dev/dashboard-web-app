# Dashboard Web App

## A web app created for helping with planning, note-taking, and focusing, all with a hand-designed, engaging UI.

![alt-text][img]

[img]: https://github.com/SashaG-dev/dashboard-web-app/blob/main/public/readme/main-img.png 'Image of the Dashboard Web App homepage'

The Dashboard Web App is a fully responsive, accessible web app created with TypeScript, React, React Router, React-Redux/Redux Toolkit, and Styled Components, with all data being store and fetched via Firebase. The main focus of this web app is to assist users id developing their skills related to task management and healthy habit-forming.

Here's the major features:

1. User authentication and authorization
   - Create an account or login with email & password verification.
   - Try out the app's main features with demo mode.
2. Dashboard
   - View current and upcoming tasks with the task widget
   - View the most recent notebook entry on the note widget
   - Get a summary of user statistics with the stats widget
   - Start a focus session directly from the dashboard homepage with the focus widget
3. My Tasks
   - On this page, a user can view all current and upcoming tasks for the next 7 days. Each day has its own dedicated task list "card."
   - Users can create, read, update and delete individual tasks on each card.
   - When all tasks items are complete, the user can mark the entire day as complete; this add points to statistics (more info provided below).
4. Notebook
   - Each day, a user can log a daily note. Each individual note can be updated and deleted, but multiple notes cannot be added on the same day.
5. Stats
   - On the stats page, a user can view the following statistics
     - Total notes taken
     - Total task lists completed
     - Total task list items completed
     - Total days focused
     - Total hours focused
     - Total minutes focused
6. Settings
   - On the settings page, user can change account settings related to verification, user settings related to the app's visual presentation, and even delete the current account.
   - All current account settings
     - update email address
     - update password
   - All current user settings
     - update user avatar (to one of the 5 preset avatar images)
     - update custom display name
     - toggle between light and dark mode
     - update color theme, which changes the app's main accent color

## User Instructions

1. Go to the Dashboard App website
2. If you don't have an account, follow the link on the login page to create on, or try things out by logging in with the demo mode on the main log in page.
3. After logging in, get access to all of the app's features that are previewed in the visual guides above.

## Developer Instructions

1. Fork this repo and create a clone of it via git.

```bash

git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

```

2. Or download a zip of the repo via the Code button here on GitHub.

3. Open the files in a directory where a git repo isn't currently initialized and install all dependencies, then run development

```bash

npm install
npm run dev

```

## Known Issues

- When a user logs out of an account, Firebase's event listeners do not immediately unsubscribe. This can render multiple errors onto the console (the max amount current recorded is ~10-12 errors)
- On certain routes, when the page is reloaded, user profile data is not fetched and rendered on the DOM. The only current solution to this is clicking on the home or settings page.
- If they've been logged in for an extended period, users have to log out and log back into their account if they want to change their email or password.
