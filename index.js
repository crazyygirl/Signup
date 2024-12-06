function signup(userName) {
    const registeredUsers = ["john_doe", "jane_doe", "user123", "admin"];

   
    if (registeredUsers.includes(userName)) {
        return "User Already Registered, Please Login";
    }

   
    registeredUsers.push(userName);
    return "Signup Successful, Please Login";
}

function login(userName, password) {
    const registeredUsers = ["john_doe", "jane_doe", "user123", "admin"];

    if (registeredUsers.includes(userName)) {
        if (password === "Emp@123") {
            return "Login Successful...";
        } else {
            return "Wrong Password...";
        }
    }

    return "User Not Found, Please Signup";
}




console.log(signup("john_doe")); 
console.log(signup("new_user")); 
console.log(login("john_doe", "Emp@123"));
console.log(login("john_doe", "WrongPass")); 
console.log(login("new_user", "Emp@123")); 
