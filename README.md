![Dropit](src/tools/assets/logo-dropit-business.svg)

#### Welcome to Dropit's Frontend Test

### Disclaimers

* The stack for this task are similar to the ones we're using here at Dropit (React with Typescript) 
* The architecture as well (simple implementation)  
* you can add and modify the given architecture, or implement a different architecture of your choosing

### Guidelines

* Use existing implementation (e.g.: components, libraries, configuration)
* Try to mimic the implemented architecture when adding content
* Keep code clean and organized
* Submit the task via mail or a private repo

## Requirements

* Set up an application state (consistent for a single session)

* #### Catalog page
    * extract the products' categories and render the categories within the filter (see next line)
    * add selector to filter the displayed data by a selected category (filter is done locally)
    * add search input that filter the displayed data by product's name (search is done locally)
    * add sort functionality by any property (sort is done locally)
    * handle add product to cart
    * handle click row (navigate to product page)
    * display the cart icon with a badge counter for the number of items (not products) in the cart
    * display "No Results" for an empty table
      
* #### Product page
    * set up new page and module (use existing configuration)
    * handle page refresh
    * display all product extended data
    * display the cart icon with a badge counter for the number of items (not products) in the cart
    * add and handle back button
      
* #### Cart page
    * set up new page and module (use existing configuration)
    * display products that are in the cart state as a table (image, name, price per unit, quantity, total price)
    * show summary data (number of products, number of items, total price)
    * add input for user's name
    * add a checkout button (disabled when cart or user's name is empty)
    * handle checkout by displaying a successful snackbar/modal with a message
    * add and handle back/close button