import {createCard, getLoginState, setLoginState, getUserFavorites, addUserFavorites} from "./util.js";

const darkDiv = document.getElementById("darkDiv");
const result = document.getElementById("result");
const menubarBtn = document.getElementById("menubarBtn");
const menubarContainer = document.getElementById("menubarContainer");
const menubarCloseBtn = document.getElementById("menubarCloseBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

const {isLoggedIn, username} = getLoginState();

if(isLoggedIn){
	logoutBtn.style.display = "block";
	loginBtn.style.display = "none";
}
else{
	loginBtn.style.display = "block";
	logoutBtn.style.display = "none";
}

const dbOpenReq = indexedDB.open("database", 1);
/** @type {IDBDatabase} */
var db = null;

// Open the database and retrieve the user's favorite recipes
dbOpenReq.onsuccess = (e) => {
    console.log("Success");

    /** @type {IDBDatabase} */
    db = e.target.result;

    // Check if user is logged in
    if(isLoggedIn){
        getUserFavorites(username, (favoriteRecipes) => {
            // If there are favorite recipes, create a card for each and append to result
            if(favoriteRecipes.length > 0){
                favoriteRecipes.forEach( favoriteRecipe => {
                    result.append(createCard(favoriteRecipe));
                } );
                console.log("hello");
            }
            else{
                result.append("No Favorites");
            }
        });
		
    }
    else{
        result.append("Login for favorites");
    }
}

dbOpenReq.onerror = (e) => {
    console.warn(e);
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
		result.append("Login for favorites");
	}
})

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

function capitalizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1);
}

function giveIndexOf(item, array){
	for(let i=0;i<array.length;i++){
		if(array[i].name === item.name){
			return i;
		}
	}
}