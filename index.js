function signup(userName) {
    const registeredUsers = ["john_doe", "jane_doe", "user123", "admin"];

   
    if (registeredUsers.includes(userName)) {
        return "User Already Registered, Please Login";
    }

   
    registeredUsers.push(userName);
    return "Signup Successful, Please Login";//qadding comments
}

console.log(signup("john_doe")); 
console.log(signup("new_user")); 
