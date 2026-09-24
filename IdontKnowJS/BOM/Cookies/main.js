// Cookies
// document.cookie = (
// "name=value;
// expires=date; 
// path=path; 
// domain=domain; 
// secure";)

// * a cookie is written as name=value (with "=", not ":"),
// * and an expires date in the past deletes it immediately, so compute a future one
let expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString(); // one week from now

document.cookie = "fName=Fady; expires=" + expires + "; path=/";
// document.cookie = "lName=Amer; path=/";

// modify the cookie (same name and path, new value)
document.cookie = "fName=FADY; expires=" + expires + "; path=/";

// delete cookie (same name and path, expires in the past)
document.cookie = "fName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; 