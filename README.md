## SETUP

- Clone this repository to your local machine
- Run `npm install`
- Run `node seed`

## Part One - Angular Views and Directives
# Angular Shopping Cart App

## Click to watch the video:
[![](https://i.gyazo.com/b83c4f06526777f552cb5d817c24e567.png)](https://vimeo.com/135907781)


### Shopping Cart Should Have the Following Specs:
- Search by name
- Search by category with drop down list
- Table with column for image,  and tea information
- Quantity drop down number list
- Add to bag button
- New items added to bag default to qty of 1, if no qty is selected
- Checkout button
- Checkout/bag starts empty, then updates with number of items
- Tea information section has:
  - Price, Caffeine Scale, Ingredients, Rating
 - In Stock? - shows `Yes` or `No` when True/False respectively
 - Categories - goes through categories list and displays each one
- Checkout page
 - Order total
 - Lists each item that was added from the previous page, and includes its quantity
 - Ability to edit quantity
 - Editing quantity updates the sub-total and order total
 - Ability to remove a product, which then updates the order total
 - Items in checkout show the caffeine scale, ingredients, rating, and sub-total

## Part Two - Angular Custom Directive: Caffeine Meter

In this exercise, we're going to revisit the angular tea shopping cart and create a custom directive to graphicaly display the ammount of caffeine in each tea.

# The caffeine display should look something like this:
![](https://i.gyazo.com/666d37af0d208915f33386ee47e80fb5.png)


The code should look someting like this:
```
<caffeine-meter caffeinemg="tea.caffeineScale" id="tea._id"></caffeine-meter>
```

![](https://i.gyazo.com/8c1d4c68b881d8a0431202e3b7469c8e.png)
