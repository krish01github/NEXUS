
function meet(){
    console.log("Lets meet!");
}
function dance(){
    console.log("I am dancing");
}
function greet(passedfunctin){
    console.log("Hello bhai");
    passedfunctin();
    console.log("Well next time then!");
}

// greet(meet()); // first meet will get exectued.then greet.
greet(meet); //  // first greet will get exectued. pass by reference.
greet(dance); //  // first greet will get exectued. pass by reference.