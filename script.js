
// your array of pets goes here (Step 4-5)
 // type you pet objects here  (Step 1-3)

// Function to display the pet objects on the webpage (Part 5)
function displayPets() {
  // Gets the HTML elements by their IDs to manipulate content on the webpage (Step 1)
  // You will learn how to do this later so for now it is given to you
  const petListSection = document.getElementById('petList');
  const selectedPetInfoSection = document.getElementById('selectedPetInfo');
  const rightButton = document.getElementById('rightButton');
  const leftButton = document.getElementById('leftButton');

  // Clears the pet list section before adding new pet names.
  // add code here (Step 2)

  // Iterates over the petList array to display each pet's name in the petListSection.
  petList.forEach((pet, index) => {
    const petName = document.createElement('p');
    // finish function here (Step 2)
  });

  // Index of the currently selected pet
  // initial first index here (Step 3)
  // Initialize by displaying information for the first pet
  // called function here (Step 3)

  // Function to display selected pet information in the right column
  function showPetInfo(pet, index) {
    // Display selected pet information
    //  =    // add HTML code and object info here (Step 4)
  }

  // Event listener for the left button
  leftButton.addEventListener('click', () => {
    // add if statement here (Step 5)
  });
  // Event listener for the right button
  rightButton.addEventListener('click', () => {
    // add if statement here (Step 5)
  });
}

// Initial display of pets
displayPets();
