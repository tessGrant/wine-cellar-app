Welcome to the Wine-Cellar-App. 

## Getting Started

1. run the development server: yarn dev
2. run json-server: yarn data

## App Features ##

1. Desplayed the list of wines.
2. Can navigate to the wine details via 'See more' option;
3. Option of adding the new wine.
4. In the wine details page, there are options of deleting the wine and updating the wine info;
5. It is possible to add a new bottle of wine via 'Add New Bottle' option.
6. The list of bottles can be sorted alphabetically by names.
7. The wine bottles can be filtered by Name and Year via 'Search by name' and 'Search by Year' options.

## Developing ##

1. The app has two pages:
- `pages/allWines.tsx` - the list of all wine collection. There user can see the limited details of the bottle. 'Sort by Name' function sets all wines in ascending order. 'Search by Name' and 'Search by year' filters collection by name and year. 'Add new wine' option runs the form, where user can fill a new wine info, the json-server updates with new bottle via 'addNewWineMutation' request in the `utils/api/fetchServices.tsx`;
- `pages/wineDetails.tsx` - the full information of wine. There user can delete current wine via 'deleteWineMutation' and update wine properties via 'Edit' button and 'updateWineMutation' from `utils/api/fetchServices.tsx`;

2. The app has /src folder, where all reusable components and sections exist.
- `src/components` - all small reusable components with defined properties.
- `src/sections` - more complex components(witn small components inside) like forms and modals, item view;
- `src/utils` - api requests and general types for the app's objects;

## The tech stack ##

This project has built with Next.js framework and Typescript. 
For all API requestst a json-server(https://www.npmjs.com/package/json-server#static-file-server) package was used. Open [http://localhost:3001] to see the data json object.

1. State manager and requests handler is React Query(https://www.npmjs.com/package/react-query);
2. Styles for the app were implementing with styled-components(https://styled-components.com/);
3. The app has two pages, the routing was set with Next.js Routing(https://nextjs.org/docs/routing/introduction);
4. The app has two Forms: form for adding a new wine and form for updating the wine property. For both cases a Formik(https://formik.org) forms were used;
5. Icons, Modal and Buttons in the forms were implemented with MaterialUI(https://v4.mui.com/);


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
