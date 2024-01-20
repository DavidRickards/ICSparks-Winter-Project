// Array of pets
var petList = [
  { image: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg", name: "Fluffy", age: 3, species: "Cat", description: "A playful and fluffy cat." },
  { image: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*", name: "Whiskers", age: 2, species: "Dog", description: "A friendly and active dog." },
  { image: "https://static.bimago.pl/mediacache/catalog/product/cache/3/6/129163/image/750x1120/bb8426ff382faa4f6642966567bb457c/129163_6.jpg", name: "Polly", age: 5, species: "Parrot", description: "A colorful and talkative parrot." },
  { image: "https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg", name: "Thumper", age: 1, species: "Rabbit", description: "An adorable and hopping rabbit." },
  { image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ", name: "Bubbles", age: 2, species: "Fish", description: "A tiny and graceful fish." }
];

// Function to display pets
function displayPets() {
  const petListSection = document.getElementById('petList');
  const selectedPetInfoSection = document.getElementById('selectedPetInfo');
  const rightButton = document.getElementById('rightButton');
  const leftButton = document.getElementById('leftButton');

  // Display pet names in the left column
  petListSection.innerHTML = '';
  petList.forEach((pet, index) => {
    const petName = document.createElement('p');
    petName.innerText = pet.name;
    petListSection.appendChild(petName);
  });

  // Index of the currently selected pet
  let selectedIndex = 0;
  // Initialize by displaying information for the first pet
  showPetInfo(petList[selectedIndex], selectedIndex);

  // Event listener for the right button
  rightButton.addEventListener('click', () => {
    if (selectedIndex < petList.length - 1) {
      selectedIndex++;
      showPetInfo(petList[selectedIndex], selectedIndex);
    }
  });

  // Event listener for the left button
  leftButton.addEventListener('click', () => {
    if (selectedIndex > 0) {
      selectedIndex--;
      showPetInfo(petList[selectedIndex], selectedIndex);
    }
  });

  // Function to display selected pet information in the right column
  function showPetInfo(pet, index) {
    // Display selected pet information in the right column
    selectedPetInfoSection.innerHTML = `<section>
                                               <h2>Current Pet : ${pet.name}</h2>
                                               <img src="${pet.image}" alt="${pet.name}" width="400px">
                                               <p>Species: ${pet.species}</p>
                                               <p>Age: ${pet.age} years old</p>
                                               <p>${pet.description}</p>
                                           </section>`;
  }
}

// Initial display of pets
displayPets();
