export {createCard, getLoginState, setLoginState, getUserFavorites, addUserFavorites};

const speech = new SpeechSynthesisUtterance();

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
		console.log("yo");
    }
}

// Function to create a card element containing a recipe name and image
function createCard(recipe){
    // Get the login state
    const {isLoggedIn , username} = getLoginState();

    // Create the card element
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the image div element
    const imgDiv = document.createElement("div");
    imgDiv.style.backgroundImage = `url('${recipe.imageSrc}')`;
    imgDiv.classList.add("imgDiv");

    // Create the text div element
    const textDiv = document.createElement("div");
    textDiv.append(recipe.name);
    textDiv.classList.add("textDiv");

    // Create the favorite button element
    const favoriteBtn = document.createElement("button");
    favoriteBtn.classList.add("favoriteBtn");

    // Check if user is logged in
    if(isLoggedIn){
        // Get the user's favorite recipes
        getUserFavorites(username, (favoriteRecipes) => {
            // Check if the recipe is already a favorite
            const isAlreadyFavorite = favoriteRecipes.some(favRecipe => favRecipe.name === recipe.name);

            // Set the favorite button's inner HTML and attribute based on if the recipe is a favorite
            if (isAlreadyFavorite) {
                favoriteBtn.innerHTML = '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>';
                favoriteBtn.setAttribute("isAlreadyFavorite", "yes");
            } else {
                favoriteBtn.innerHTML = '<i class="fa-regular fa-star"></i>';
                favoriteBtn.setAttribute("isAlreadyFavorite", "no");
            }
        });
    }
    else{
        // Set the favorite button's inner HTML and attribute as not a favorite when user is not logged in
        favoriteBtn.innerHTML = '<i class="fa-regular fa-star"></i>';
        favoriteBtn.setAttribute("isAlreadyFavorite", "no");
    }

    // Add a click event listener to the favorite button
    favoriteBtn.addEventListener("click", () => {
        // Get the login state
        const {isLoggedIn , username} = getLoginState();
        
        // Check if user is not logged in
        if(!isLoggedIn){
            // Show an alert message to log in to add favorites
            window.alert("Login for adding favorites");
            return;
        }

        // Get the user's favorite recipes
        getUserFavorites(username, (favoriteRecipes) => {
            // Check if the recipe is already a favorite
            if (favoriteBtn.getAttribute("isAlreadyFavorite") === "yes") {
                // Remove the recipe from the favorite recipes array
                favoriteRecipes = favoriteRecipes.filter(favRecipe => favRecipe.name !== recipe.name);
                // Update the favorite button's inner HTML and attribute
                favoriteBtn.innerHTML = '<i class="fa-regular fa-star"></i>';
                favoriteBtn.setAttribute("isAlreadyFavorite", "no");
            } else {
                // Add the recipe to the favorite recipes array
                favoriteRecipes.push(recipe);
                // Update the favorite button's inner HTML and attribute
                favoriteBtn.innerHTML = '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>';
                favoriteBtn.setAttribute("isAlreadyFavorite", "yes");
            }

            // Update the user's favorite recipes
            updateUserFavorites(username, favoriteRecipes);
        });
    })

    // Append the image div, text div, and favorite button to the card
    card.append(imgDiv);
    card.append(textDiv);
    card.append(favoriteBtn);

    // Create the info window for the recipe
    const infoWindow = createInfoWindow(recipe);

    // Add click event listeners to the image div and text div to show the info window
    imgDiv.addEventListener("click", () => {
        infoWindow.style.visibility = "visible";
        darkDiv.style.visibility = "visible";
    });

    textDiv.addEventListener("click", () => {
        infoWindow.style.visibility = "visible";
        darkDiv.style.visibility = "visible";
    });

    // Return the card element
    return card;
}

//function for changing the login state
function setLoginState(username, state){
    localStorage.setItem("loggedInUser", username);
    localStorage.setItem("isLoggedIn", state);

    window.dispatchEvent( new CustomEvent("loginStateChanged", {
        detail: { isLoggedIn: state, username }
    }) )
}

//gets the login state
function getLoginState(){
    return {
        isLoggedIn: localStorage.getItem("isLoggedIn") === 'true',
        username: localStorage.getItem("loggedInUser")
    }
}

//function for getting the user's favorite recipes
function getUserFavorites(username, callback) {
    const transaction = db.transaction("favorites", "readonly");
    const store = transaction.objectStore("favorites");
    const request = store.get(username);

    request.onsuccess = (e) => {
        const result = e.target.result;
        const favorites = result ? result.favoriteRecipes : [];
        callback(favorites);
    };

    request.onerror = (e) => {
        console.error("Error retrieving favorites:", e.target.error);
        callback([]);
    };
}

//function for updating the user's favorite recipes
function updateUserFavorites(username, favoriteRecipes) {
    const transaction = db.transaction("favorites", "readwrite");
    const store = transaction.objectStore("favorites");
    const userFavorites = { username: username, favoriteRecipes: favoriteRecipes };
    const putRequest = store.put(userFavorites);

    putRequest.onsuccess = () => { console.log("Favorites updated") };
    putRequest.onerror = (e) => { console.error("Error updating favorites:", e.target.error) };
}

function addUserFavorites(username){
    const transaction = db.transaction("favorites", "readwrite");
    const store = transaction.objectStore("favorites");

    const userFavorites = { username, favoriteRecipes: [] };
    const addRequest = store.add(userFavorites);
    addRequest.onsuccess = () => { console.log("Updated") };
    addRequest.onerror = (e) => { console.error(e) };
}

function capitalizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1);
}

//function for creating the info window
function createInfoWindow(recipe){
    
    // Get the login state
    const {isLoggedIn , username} = getLoginState();
    
    // Create the info window
    const infoWindow = document.createElement("div");
    const infoWindowImgDiv = document.createElement("div");
    const infoWindowDescription = document.createElement("div");

    // Set the background image of the info window image div
    infoWindowImgDiv.style.backgroundImage = `url('${recipe.imageSrc}')`;
    infoWindowImgDiv.classList.add("infoWindowImgDiv");
    
    // Create the close button
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeBtn.classList.add("closeBtn");

    // Add event listener to the close button
    closeBtn.addEventListener("click", () =>{
        infoWindow.style.visibility = "collapse";
        darkDiv.style.visibility = "collapse";
    })

    // Create the content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create the heading
    const heading = document.createElement("h1");
    heading.innerText = recipe.name;

    // Create the ingredients list
    const ul = document.createElement("ul");
    recipe.procedure.forEach( step => {
        const li = document.createElement("li");
        li.innerText = step;
        ul.append(li);
    } )

    const ingredientDiv = document.createElement("div");
    ingredientDiv.classList.add("ingredientDiv");

    const ingredientTitle = document.createElement("h4");
    ingredientTitle.textContent = "Ingredients";

    ingredientDiv.append(ingredientTitle);
    ingredientDiv.append(`${recipe.ingredients.map(capitalizeFirstLetter)}`);

    const ratingDiv = document.createElement("div");
    ratingDiv.classList.add("ratingDiv");
    ratingDiv.innerText = `Rating: ${recipe.reviewPoints}/5`;

    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("reviewDiv");

    const starIcon = '<i class="fa-regular fa-star"></i>';
    const reviewBtns = [];

    // Create the review buttons
    for (let i = 1; i <= 5; i++) {
        const reviewBtn = document.createElement("button");
        reviewBtn.classList.add("reviewBtn");
        reviewBtn.setAttribute("value", i);

        try{
            if(username in recipe.reviews && recipe.reviews[username] >= i) reviewBtn.innerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
            else reviewBtn.innerHTML = starIcon;
        }
        catch{
            reviewBtn.innerHTML = starIcon;
        }

        reviewBtns.push(reviewBtn);
        reviewDiv.append(reviewBtn);

        // Add event listener to the review buttons
        reviewBtn.addEventListener("click", (e) => {
            
            const {isLoggedIn , username} = getLoginState();

            if(!isLoggedIn){
                window.alert("Login for reviews");
                return;
            }

            reviewBtns.forEach((btn, index) => {
                if (index < Number(reviewBtn.value)) {
                    btn.innerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
                } else {
                    btn.innerHTML = starIcon;
                }
            });

            // Update the recipe ratings and reviews
            const recipes = JSON.parse(localStorage.getItem("recipes"));
            recipes.forEach((r) => {
                if(r.name === recipe.name) {
                    const reviewsLength = Object.keys(r.reviews).length;
                    if(username in r.reviews){
                        r.reviewPoints = ((r.reviewPoints * reviewsLength) + Number(reviewBtn.value) - r.reviews[username]) / (reviewsLength);
                    }
                    else{
                        r.reviewPoints = ((r.reviewPoints * reviewsLength) + Number(reviewBtn.value)) / (reviewsLength + 1);
                    }
                    r.reviews[username] = Number(reviewBtn.value);

                    localStorage.setItem("recipes", JSON.stringify(recipes));
                }
            })
        });
    }

    // Create the speak button
    const speakButton = document.createElement("button");
    speakButton.classList.add("speakBtn");
    speakButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';

    // Add event listener to the speak button
    speakButton.onclick = () => {
        window.speechSynthesis.cancel();
        const chunks = recipe.procedure.join(" ").match(/.{1,200}(\s|$)/g); // Split into ~200 character chunks

        let i = 0;
        function speakNext() {
            if (i < chunks.length) {
                const speech = new SpeechSynthesisUtterance(chunks[i]);
                speech.onend = speakNext;
                speech.onerror = (e) => console.error("Speech error:", e);
                window.speechSynthesis.speak(speech);
                i++;
            }
        }
    
        speakNext();

        speech.onend = function(event) {
            console.log('Finished speaking after ' + event.elapsedTime + ' milliseconds.');
        };
    
        speech.onerror = function(event) {
            console.error('An error has occurred with the speech synthesis: ' + event.error);
        };

    }

    content.append(heading);
    content.append(ul);
    content.append(ingredientDiv);
    content.append(ratingDiv);
    content.append(reviewDiv);
    content.append(speakButton);

    infoWindowDescription.append(content);

    infoWindow.classList.add("infoWindow");
    infoWindow.style.visibility = "collapse";

    infoWindow.append(infoWindowImgDiv);
    infoWindow.append(infoWindowDescription);
    infoWindow.append(closeBtn);
    document.body.append(infoWindow);

    return infoWindow;
}
