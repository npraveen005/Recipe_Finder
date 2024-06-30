import {createCard, getLoginState, setLoginState, getUserFavorites, addUserFavorites} from "./util.js";

const loginBtns = document.querySelectorAll("#loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const container = document.getElementById("container");
const loginFrom = document.getElementById("loginForm");
const formTitle = document.getElementById("formTitle");
const enteredUsername = document.getElementById("username");
const enteredPassword = document.getElementById("password");
const menubarBtn = document.getElementById("menubarBtn");
const menubarContainer = document.getElementById("menubarContainer");
const menubarCloseBtn = document.getElementById("menubarCloseBtn");
const darkDiv = document.getElementById("darkDiv");

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
	loginBtns.forEach(loginBtn => loginBtn.style.display = "none");
    loginFrom.style.display = "none";
    formTitle.innerText = "Logout";
    container.appendChild(logoutBtn);
}
else{
	logoutBtn.style.display = "none";
	loginBtns.forEach(loginBtn => loginBtn.style.display = "block");
}

logoutBtn.onclick = () => {
	setLoginState(null, false);
}

window.addEventListener("loginStateChanged", (e) => {
	const details = e.detail;
    console.log(details)
	if(!details.isLoggedIn){
		logoutBtn.style.display = "none";
        loginBtns.forEach(loginBtn => loginBtn.style.display = "block");
        loginFrom.style.display = "flex";
        formTitle.innerText = "Login";
        document.querySelector("#navbar").append(logoutBtn);
	}
    else if(details.isLoggedIn){
        logoutBtn.style.display = "block";
        loginBtns.forEach(loginBtn => loginBtn.style.display = "none");
        loginFrom.style.display = "none";
        formTitle.innerText = "Logout";
        container.appendChild(logoutBtn);
        console.log("sjdgcxh")
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

// Login
loginFrom.onsubmit = (e) => {
    e.preventDefault();
    if (!db) {
        console.log("Database not loaded");
        return;
    }

    // Validate username and password length
    if (enteredUsername.value.length < 8) {
        console.log("Username must be 8 character long");
        return;
    } else if (enteredPassword.value.length < 8) {
        console.log("Password must be 8 character long");
        return;
    }

    // Perform login operation
    const transaction = db.transaction("userCredentials", "readwrite");
    const store = transaction.objectStore("userCredentials");

    const getRequest = store.get(enteredUsername.value);

    getRequest.onsuccess = (e) => {
        const result = e.target.result;
        
        if (result) {
            const username = e.target.result.username;
            const password = e.target.result.password;
    
            if (enteredPassword.value === password) {
                window.alert("Logged in successfully");
                setLoginState(username, true);
            } else {
                window.alert("wrong password");
            }
        } else {
            const user = {
                username: enteredUsername.value,
                password: enteredPassword.value
            }

            const addRequest = store.add(user);

            addRequest.onsuccess = (e) => {
                window.alert("Successfully added user");

                addUserFavorites(user.username);

                setLoginState(user.username, true);
            }

            addRequest.onerror = (e) => {
                console.error(e);
            }
        }

    }
}
