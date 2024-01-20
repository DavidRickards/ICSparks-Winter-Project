# Pet Shop Manager

## Objective
The objective of this activity is to create a simple pet shop page that utilizes objects, array and data type in Javascript. Objects will represent as pets, and all of them will be held inside an array.

## Difficulty
Intermediate

## Prerequisites
* Understanding of HTML structures
* Understanding of event listener
* Understanding structure and defining of objects
* Understanding array structure
* Understand how to add elements to HTML

## Part 1 HTML Setup
1) To start off we will add a header to our site called "Pet Shop Animals"
2) Below our head we will list all the names of the pets in the shop (our array) and we will do this by creating a ```<div>``` with the id="petList"
3) Below our pet list we will have ```<div>``` with the class "navigation-buttons". Inside we will have a 2 buttons, ```id="rightButton"``` called "Previous" and a ```id="rightButton"``` called "Next". These will be used to traver through the petList array 
4) Then at the bottom in another ```<div>``` we will give it the ```id="selectedPetInfo"```. This is where the Pets information will be presented.

## Part 2 SCC Setup
1) You can just use the provided CSS for this project as it changes very little.

## Part 3 Javascript Creating Objects & Arrays
1) First lets start by creating a pet object with properties like this:

```const pet = { image: "", name: "", age: , species: "", description: "" }``` 
* Every property except the last one should be followed by a comma
2) Next fill these properties with what ever you want (make sure age is a number and image is an image address) For example:

   ```{ image: "https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg", name: "Thumper", age: 1, species: "Rabbit", description: "An adorable and hopping rabbit." },```
3) Now create and fill out 4 more pet objects.
4) Now wrap all the object in an array like so:

```var petList = [ {object1}, {object2}, ...etc. ]```
* Every object except the last one should be followed by a comma
5) In our petList array the top object will be in the first index and the bottom object will be in the last index.

## Part 4: Javascript Displaying the Pet Objects
1) Use document.getElementById to get references to the HTML elements by their IDs we made in the HTML doc and assign these references to variables.
* The variable "petListSection" will reference "petList".
* The variable "selectedPetInfoSection" will reference the id "selectedPetInfo"
* The variable "leftButton" will reference the id "leftButton"
* The variable "rightButton" will reference the id "rightButton"

For example : The variable "petListSection" will reference "petList".

```const petListSection = document.getElementById('petList');```
2) Now we will print the pet names to the site and we do this by first:
* Clear the content of the petListSection. by adding ```.innerHTML = '';``` after it.
* Now we will use a ```.forEach((pet, index) => { });``` loop to iterate through the "petList" variable array.
* For each pet name we will create a ```const``` variable called "petName" and create a new <p> element to set it equal to like so:

```document.createElement('p');```
* Next, set the inner text of the <p> element of the petName (same command```.innerText```) equal to the objects name so ```pet.name```.
* Append the variable "petName" to the "petListSection" variable.

3) To keep track of the currently selected pet, initialize a ```let``` variable called "selectedIndex" and set it equal to the start or our array ```0```;
* To ensure the pet objects information is shown we will call a "showPetInfo" function  with the properties ```petList[selectedIndex], selectedIndex``` to display information for the first pet. (we will fill this out at the end)


## Stretch Goals
To improve this project you can:
1) Make the buttons loops back around to the start/end of the array.
2) Create a highlighted tag that highlights the currently selected pet name from the array of listed pets at teh top of the site.