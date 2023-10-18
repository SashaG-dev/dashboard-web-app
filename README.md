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
