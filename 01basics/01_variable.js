const accountId = 3248923;
let email = "gourav@gm.com";
var isLoggedIn = true;
username = "gouravmalviya";

// accountId = 9234902; // not allowed

email = "kunal@kunal.com";
isLoggedIn = false;
username = "kunalkushwaha";

console.log(email)

console.table([accountId, email, isLoggedIn, username])

/*  
    Prefer not to use var
    because of issue in the block scope and function scope
 */

