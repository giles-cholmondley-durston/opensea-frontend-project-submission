### Install dependencies

`npm install`

### Run project

`npm start`

### Directory structure

`public` houses favicon and base index.html – there should be little reason to use this directory.

`src` contains the app's js entry point and a simple CSS file. For a tiny one-off project like this it didn't feel like a problem to hard code 2 styles, but with time I would propose making these changes in the UI kit's variables and making tweaks to components with Styled Components.

`src/components/` This houses presentational components. Data fetching currently takes place in the Events file but as a project matured I'd propose moving that to something like a Redux reducer.

Generic, highly reusable components should be place in `universal`. Domain-specific components should have their own folders and be collocated with their non-generic subcomponents and tests.

To make it quicker to write components, keep Styled Component definitions at the top of the file. With time, abstract reusable elements into a separate folder.

`src/utils` for housing domain/app-specific reusable functionality. Currently I've put a couple of functions in here for handling Ether prices and shortening address names.

### Timing

- API connection was extremely quick – 10 to 15 minutes
- framework setup – 30 minutes (Create React App was very quick, but had some issues with Eslint setup)
- interactive components/design implementation – 1.5 hours
- architecture/testing – 1 hour
