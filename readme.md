<!-- Notes  -->
lecture 1:
1. HomeWork :- WHAT IS CDN(Content Delivery Network)? WHY DO WE USE CDN?
    // CDN is a Content Delivery Network. It is a system of distributed servers that deliver webpages and other web content to a user based on the geographic locations of the user, the origin of the webpage and a content delivery server. 

2. react is just  a javascrpt library(written by facbook developers).

3. as we justimported this cdn link in this link it just a javascript code written.

4. React.createElement('h1',{},'Hello World From React!') in this we give three arguments to the create a element the first one shows which elemnt you want to create ex - 'h1',div,p etc..  and the second argument takes the atribute inside it like ex - here i want to give h1  a id name so inside those curly braes i will write {id:'name'} and the last argument is called child where we do our things.

5. ReactElement(Object) => HTML(browser Understands)

6. to create nested child we use [] to add those childs

7. whatever if we write inside our html and then write somthing in react it will replace that .

8. whatever we make the react will work only in that section in which we render .

lecture 2 :-
 1. npm doesnot have a full form like node pakage manager

2. pakage.json is configuration for npm

3. two types of pakages we can install dev dependency(req when we are developing app) and normal depdency(used in prooduction level)

4. caret and tilde in js - caret(^ will upgrade the minor verion(not written only here)) ans tilde(~ will upgrade the major version only)

5. we donot need to push node modules to git hub because we can regenrate it using npm install.

6. just like npm npx means it will excute that bundler or will ignite that code.

7. using react using cdn is not efficient to do we should not use it.

8. Parcel-
- dev build 
- local server
- HMR - Hot Module Replacment
- File watching algo - written in c++
- caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- consistent hashing 
- code Splitting 
- diffrential bundling  - support older version of the web browser.
- error handling
- Tree shaking algo - remove unused code .
- diffrent build for dev and prod bindles.

9. Browser list package.

lecture -3
1. npm run start is equal to npm run 
2. JSX is HTMl like syntax or XML like syntax.
3. JSX(transpiled before it reaches the JS) => parcel - babel
4. babel convert the jsx to react.
5. JSX => React.createElement => JS Object => HtmlElement(render)
6. If we have to give attribute we need to write it in camel case.
8. React Component - Class Based Component-OLD
                    -Fuctional Component - NEW

9. if we need to make the functional component we always need to write first letter capital.
10. Using another functional component under another functional component called as Component Composition.
11. we can write javascript inside jsx using {} just these
12. React JSX automatically work as a security if we fetch some data and it renders some mallicious data it will automatically escape that mallacious data .
13. 

lecture - 6

1. the use effect takes two arguments first is the callback and  the second is a dependency array.
2. use effect will bw called agter the body is rendred.
3. When we made the button in the header the whole code is getting called again but only that button render that is why React is  fast in dom manupulaiton and reonsiliation.
4. Whenever ,state variable update react trigeers a reconsiliation cycle takes place(re-render the component).
  
lecture - 7
1. If no depedency array is passed then useEffectis called on every render if depedency array is empty [] useEffect is called on initial render(just once)
if depedency array contains something it will update on every time we change something in that component.
2. We use react route as the library to make multiple pages 
3. in this library we have learned some components mainly 1.Outlet 2. children router approuter(create browser router)
4. Link to connect different pages for the website .Link vs Anchor  - Link smoothly changes the page but anchor tag just refreshes the page to change between different pages.
5. # Two Types of routing .
- Client Side Routing
- Server side Routing
6. client side routing . (Single page application).(one page thus the components are getting exchanged.).
 
 Lecture - 9:
 1. optimizing by making custom hooks(what are Custom hooks?)- A simple react function.for better practise we write use in frot of the file name e.g - useResturantMenu etc.
 2.  