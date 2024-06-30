import {createCard, getLoginState, setLoginState, getUserFavorites, addUserFavorites} from "./util.js";
import {recipes} from "./recipes.js";

const ingredientSelector = document.getElementById("ingredientSelector");
const filter = document.getElementById("filter");
const filterBtn = document.getElementById("filterBtn");
const selectedPrepTime = document.getElementById("prepTime");
const selectedCuisine = document.getElementById("cuisine");
const selectedDietaryRestrictions = document.getElementById("dietaryRestrictions");
const result = document.getElementById("result");
const clearBtn = document.getElementById("clearBtn");
const submitBtn = document.getElementById("submitBtn");
const darkDiv = document.getElementById("darkDiv");
const addBtn = document.getElementById("addBtn");
const addRecipeDiv = document.getElementById("addRecipeDiv");
const addRecipeForm = document.getElementById("addRecipeForm");
const menubarBtn = document.getElementById("menubarBtn");
const menubarContainer = document.getElementById("menubarContainer");
const menubarCloseBtn = document.getElementById("menubarCloseBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

let ingredientCheckBox = [], ingredientLabel = [], favoriteRecipes = [];


// const recipes = [
//   {
//     name: "Chicken Stir-Fry",
//     ingredients: ["chicken", "rice", "bell peppers", "onions", "garlic", "olive oil"],
//     imageSrc: "./media/chicken_stir_fry.jpg",
//     procedure: [
//       "Cook rice according to package instructions.",
//       "Cut chicken and vegetables into bite-sized pieces.",
//       "Heat oil in a wok or large skillet.",
//       "Stir-fry chicken until cooked through.",
//       "Add vegetables and garlic, stir-fry until tender-crisp.",
//       "Season with desired sauces.",
//       "Serve over rice."
//     ],
//     cuisine: "Asian",
//     preparationTime: 30,
//     dietaryRestrictions: ["gluten-free"],
// 	reviews: {},
// 	reviewPoints: 0
//   },
//   {
//     name: "Spaghetti Bolognese",
//     ingredients: ["pasta", "ground beef", "tomatoes", "onions", "garlic", "olive oil"],
//     imageSrc: "./media/spaghetti_bolognese.jpg",
//     procedure: [
//       "Cook pasta according to package instructions.",
//       "In a large pan, brown ground beef.",
//       "Add chopped onions and garlic, sauté until soft.",
//       "Add tomatoes and simmer for 20 minutes.",
//       "Season with salt, pepper, and herbs.",
//       "Serve sauce over cooked pasta."
//     ],
//     cuisine: "Italian",
//     preparationTime: 45,
//     dietaryRestrictions: [],
// 	reviews: {},
// 	reviewPoints: 0
//   },
//   {
//     name: "Vegetable Omelette",
//     ingredients: ["eggs", "bell peppers", "onions", "spinach", "cheese"],
//     imageSrc: "./media/vegetable_omelette.jpg",
//     procedure: [
//       "Chop vegetables finely.",
//       "Beat eggs in a bowl.",
//       "Heat a non-stick pan and add beaten eggs.",
//       "When eggs begin to set, add vegetables and cheese to one half.",
//       "Fold the other half over the filling.",
//       "Cook until cheese melts and eggs are fully set."
//     ],
//     cuisine: "International",
//     preparationTime: 15,
//     dietaryRestrictions: ["vegetarian", "gluten-free"],
// 	reviews: {},
// 	reviewPoints: 0
//   },
//   {
//     name: "Loaded Baked Potato",
//     ingredients: ["potatoes", "cheese", "onions", "olive oil"],
//     imageSrc: "./media/loaded_baked_potato.jpg",
//     procedure: [
//       "Preheat oven to 425°F (220°C).",
//       "Wash and dry potatoes, prick with a fork.",
//       "Rub with olive oil and salt.",
//       "Bake for 45-60 minutes until tender.",
//       "Split potatoes and top with cheese and chopped onions.",
//       "Return to oven until cheese melts."
//     ],
//     cuisine: "American",
//     preparationTime: 60,
//     dietaryRestrictions: ["vegetarian", "gluten-free"],
// 	reviews: {},
// 	reviewPoints: 0
//   },
//   {
//     name: "Grilled Cheese Sandwich",
//     ingredients: ["bread", "cheese", "olive oil"],
//     imageSrc: "./media/grilled_cheese_sandwich.jpg",
//     procedure: [
//       "Heat a skillet over medium heat.",
//       "Butter one side of each bread slice.",
//       "Place one slice butter-side down in the skillet.",
//       "Add cheese and top with the other bread slice, butter-side up.",
//       "Cook until golden brown, then flip and cook the other side."
//     ],
//     cuisine: "American",
//     preparationTime: 10,
//     dietaryRestrictions: ["vegetarian"],
// 	reviews: {},
// 	reviewPoints: 0
//   },
//   {
//     name: "Tomato Soup",
//     ingredients: ["tomatoes", "onions", "garlic", "olive oil"],
//     imageSrc: "./media/tomato_soup.jpg",
//     procedure: [
//       "Sauté chopped onions and garlic in olive oil.",
//       "Add chopped tomatoes and cook until soft.",
//       "Add broth and simmer for 15-20 minutes.",
//       "Blend the soup until smooth.",
//       "Season with salt and pepper.",
//       "Reheat if necessary before serving."
//     ],
//     cuisine: "International",
//     preparationTime: 30,
//     dietaryRestrictions: ["vegetarian", "vegan", "gluten-free"],
// 	reviews: {},
// 	reviewPoints: 0
//   },
//   {
//     name: "Beef and Vegetable Stew",
//     ingredients: ["ground beef", "potatoes", "carrots", "onions", "tomatoes"],
//     imageSrc: "./media/beef_and_vegetable_stew.jpg",
//     procedure: [
//       "Brown ground beef in a large pot.",
//       "Add chopped onions and sauté.",
//       "Add diced potatoes, carrots, and tomatoes.",
//       "Pour in broth to cover ingredients.",
//       "Simmer for 1-2 hours until vegetables are tender.",
//       "Season with salt, pepper, and herbs."
//     ],
//     cuisine: "International",
//     preparationTime: 120,
//     dietaryRestrictions: ["gluten-free"],
// 	reviews: {},
// 	reviewPoints: 0
//   },
//   {
//     name: "Spinach and Cheese Quesadilla",
//     ingredients: ["bread", "spinach", "cheese"],
//     imageSrc: "./media/spinach_and_cheese_quesadilla.jpg",
//     procedure: [
//       "Heat a large skillet over medium heat.",
//       "Place a tortilla in the skillet.",
//       "Sprinkle cheese over half the tortilla.",
//       "Add a layer of spinach leaves.",
//       "Fold the tortilla in half.",
//       "Cook until cheese melts and tortilla is golden, then flip and cook other side."
//     ],
//     cuisine: "Mexican",
//     preparationTime: 15,
//     dietaryRestrictions: ["vegetarian"],
// 	reviews: {},
// 	reviewPoints: 0
//   },
//   {
//     name: "Fried Rice",
//     ingredients: ["rice", "eggs", "carrots", "onions", "garlic"],
//     imageSrc: "./media/fried_rice.jpg",
//     procedure: [
//       "Cook rice and let it cool.",
//       "Scramble eggs in a large wok or skillet.",
//       "Remove eggs and set aside.",
//       "Stir-fry chopped vegetables in the same pan.",
//       "Add cooled rice and stir-fry.",
//       "Mix in scrambled eggs.",
//       "Season with soy sauce and serve."
//     ],
//     cuisine: "Asian",
//     preparationTime: 30,
//     dietaryRestrictions: ["vegetarian"],
// 	reviews: {},
// 	reviewPoints: 0
//   },
//   {
//     name: "Pasta Primavera",
//     ingredients: ["pasta", "bell peppers", "carrots", "spinach", "garlic", "olive oil"],
//     imageSrc: "./media/pasta_primavera.jpg",
//     procedure: [
//       "Cook pasta according to package instructions.",
//       "In a large skillet, sauté garlic in olive oil.",
//       "Add chopped bell peppers and carrots, cook until tender-crisp.",
//       "Add spinach and cook until wilted.",
//       "Toss cooked pasta with the vegetables.",
//       "Season with salt, pepper, and grated cheese if desired."
//     ],
//     cuisine: "Italian",
//     preparationTime: 25,
//     dietaryRestrictions: ["vegetarian"],
// 	reviews: {},
// 	reviewPoints: 0
//   }
// ];

if(!localStorage.getItem("recipes")) localStorage.setItem("recipes", JSON.stringify(recipes));

let ingredients = [];

JSON.parse(localStorage.getItem("recipes")).forEach((recipe, index) => {
	const temp = recipe.ingredients;
	temp.forEach((ingredient, index) => {
		if(!ingredients.includes(ingredient)) ingredients.push(ingredient);
	})
});

const dbOpenReq = indexedDB.open("database", 1);
/** @type {IDBDatabase} */
var db = null;

dbOpenReq.onsuccess = (e) => {
    console.log("Success");

    /** @type {IDBDatabase} */
    db = e.target.result;
}

dbOpenReq.onerror = (e) => {
    console.warn(e);
}

dbOpenReq.onupgradeneeded = (e) => {
    console.log("Updated");

    /** @type {IDBDatabase} */
    db = e.target.result;

    if (!db.objectStoreNames.contains('userCredentials')) {
        db.createObjectStore('userCredentials', { keyPath: 'username' });
    }

    if (!db.objectStoreNames.contains('favorites')) {
        db.createObjectStore('favorites', { keyPath: 'username' });
    }
}

if(getLoginState().isLoggedIn){
	logoutBtn.style.display = "block";
	loginBtn.style.display = "none";
}
else{
	logoutBtn.style.display = "none";
	loginBtn.style.display = "block";
}

logoutBtn.onclick = () => {
	setLoginState(null, false);
	logoutBtn.style.display = "none";
	loginBtn.style.display = "block";
}

window.addEventListener("loginStateChanged", (e) => {
	const details = e.detail;
	if(!details.isLoggedIn){
		logoutBtn.style.display = "none";
		loginBtn.style.display = "block";
		while(result.firstChild) result.removeChild(result.firstChild);
	}
})

clearBtn.onclick = () => {
    ingredientCheckBox.forEach(ingredient => ingredient.checked = false);
	ingredientLabel.forEach(label => label.classList.remove("selected"));
}

menubarBtn.onclick = () => {
    darkDiv.style.visibility = "visible";
	menubarContainer.style.visibility = "visible";
	menubarContainer.style.animation = "slideLeft 0.5s";
}

menubarCloseBtn.onclick = () => {
	darkDiv.style.visibility = "collapse";
	menubarContainer.style.animation = "slideRight 0.5s";
	setTimeout( () => menubarContainer.style.visibility = "collapse", 500);
}

filterBtn.onclick = () => {
	if(filterBtn.value === "show") {
		filter.style.height = "auto";
		filter.style.padding = "1rem";
		filterBtn.value = "hide";
	}else{
		filter.style.height = "0%";
		filter.style.padding = "0rem";
		filterBtn.value = "show";
	}
}

addBtn.onclick = () => {
	const {isLoggedIn, username} = getLoginState();
	
	if(addBtn.getAttribute("state") === "add") {
		if(!isLoggedIn){
			window.alert("Please login first");
			return;
		}
	
		addRecipeDiv.style.visibility = "visible";
		darkDiv.style.visibility = "visible";
	
		addBtn.firstChild.style.rotate = "45deg";
		addBtn.style.backgroundColor = "red";
		addBtn.setAttribute("state", "exit");
	}
	else if(addBtn.getAttribute("state") === "exit") {
		addRecipeDiv.style.visibility = "hidden";
		darkDiv.style.visibility = "hidden";
	
		addBtn.firstChild.style.rotate = "0deg";
		addBtn.style.backgroundColor = "#61BAAD";
		addBtn.setAttribute("state", "add");
	}
}

// function for adding ingredients
ingredients.forEach( ingredient => {

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = ingredient;
    ingredientCheckBox.push(checkBox);
	
    const label = document.createElement("label");
    label.setAttribute("for", ingredient);
    label.textContent = capitalizeFirstLetter(ingredient);
	ingredientLabel.push(label);
	
    const lineBreak = document.createElement("br");
	
	checkBox.addEventListener("click", () => {
		if(checkBox.checked){
			label.classList.add("selected");
		}else{
			label.classList.remove("selected");
		}
	});

    ingredientSelector.append(checkBox);
    ingredientSelector.append(label);
} )

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

	searchRecipe();
})

addRecipeForm.addEventListener("submit", (e) => {
	e.preventDefault();
	addRecipe();
	addRecipeDiv.style.visibility = "hidden";
	darkDiv.style.visibility = "hidden";
	addBtn.firstChild.style.rotate = "0deg";
	addBtn.style.backgroundColor = "#61BAAD";
	addBtn.setAttribute("state", "add");
	window.alert("Recipe added successfully");
})


filter.addEventListener("change", (e) => {
	searchRecipe();
})

function capitalizeFirstLetter(string){
	for(let i =0;i<string.length;i++){
		if(string[i] !== " "){
			return string[i].toUpperCase() + string.slice(i+1);
		}else continue;
	}

}

function isSubArray(arr1, arr2) {
    return arr2.every(element => arr1.includes(element));
}

// Search for recipes
function searchRecipe() {

	const recipes = JSON.parse(localStorage.getItem("recipes"));
	

	let foundRecipe = false;
	
	// Clear the result element
	while (result.firstChild) result.removeChild(result.firstChild);

	// Get the selected ingredients
	let selectedIngredients = ingredientCheckBox.filter( (ingredient) => {return ingredient.checked;} );
	selectedIngredients = selectedIngredients.map( (ingredient) => {return ingredient.id} );


	recipes.forEach( (recipe, index) => {
		// Check if the recipe contains all the selected ingredients
		if(isSubArray(recipe.ingredients, selectedIngredients)) {
			
			// Check if the selected preparation time is greater than the recipe's preparation time
			if(selectedPrepTime.value != "--" && recipe.preparationTime > selectedPrepTime.value) {

				if(!foundRecipe && index === recipes.length - 1) result.append("No results");
				return;
			}

			// Check if the selected cuisine is not equal to the recipe's cuisine
			if(selectedCuisine.value != "--" && recipe.cuisine.toLowerCase() !== selectedCuisine.value.toLowerCase()) {

				if(!foundRecipe && index === recipes.length - 1) result.append("No results");
				return;
			}

			// Check if the selected dietary restriction is not present in the recipe's dietary restrictions
			if(selectedDietaryRestrictions.value != "--" && !recipe.dietaryRestrictions.includes(selectedDietaryRestrictions.value.toLowerCase())) {

				if(!foundRecipe && index === recipes.length - 1) result.append("No results");
				return;
			}


			foundRecipe = true;

			result.append(createCard(recipe));
		} else {
			// If no recipe is found and it is the last recipe, append "No results"
			if(!foundRecipe && index === recipes.length - 1) result.append("No results");
		}
	} );
}

function giveIndexOf(item, array){
	for(let i=0;i<array.length;i++){
		if(array[i].name === item.name){
			return i;
		}
	}
}

// function for adding recipe
function addRecipe(){
	const addedRecipeName = document.getElementById("addedRecipeName").value;
	const addedIngredients = document.getElementById("addedIngredients").value;
	const addedProcedure = document.getElementById("addedProcedure").value;
	const addedCuisine = document.getElementById("addedCuisine").value;
	const addedPrepTime = document.getElementById("addedPrepTime").value;
	const addedDietaryRestriction = document.getElementById("addedDietaryRestriction").value;

	const newRecipe = {
		name: addedRecipeName,
		ingredients: addedIngredients.split(","),
		procedure: addedProcedure.split("\n"),
		cuisine: addedCuisine || "International",
		prepTime: Number(addedPrepTime),
		dietaryRestrictions: [addedDietaryRestriction],
		imageSrc: "./media/default_image.jpg",
		reviewPoints: 0,
		reviews: {}
		
	}
	const existingRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
	localStorage.setItem("recipes", JSON.stringify([...existingRecipes, newRecipe]));
}