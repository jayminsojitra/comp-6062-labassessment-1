const studentFullName = "Jaymin Sojitra";    //create a vatiable
console.log(studentFullName);
const studentNumber = 1213822;               //create a variable
console.log(studentNumber);
console.log(`${studentFullName}-${studentNumber}`);      

const headerContent = document.querySelector("h1");                             //to access the h1
headerContent.innerHTML = `${studentFullName}-${studentNumber}`;                // to change the content of the h1
headerContent.classList.add("headingPrimary");                                  //to add the class to the h1    
console.log(headerContent.classList);

