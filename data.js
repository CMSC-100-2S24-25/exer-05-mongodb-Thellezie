// ====== THIS FILE CONTAINS ALL THE CONSTANT DATA NEEDED FOR THE FUNCTIONS REQUIRED IN EXERCISE ========== //

// For single add of student
export const studentSingle = {
    stdnum: "202312438",
    fname: "Luthelle",
    lname: "Fernandez",
    age: 20
};

// --> POST /save-student
export const studentsData = [
    { stdnum: "202310001", fname: "Mary Jane", lname: "Watson", age: 20 },
    { stdnum: "202312438", fname: "Luthelle", lname: "Fernandez", age: 20 },
    { stdnum: "202310002", fname: "Joy", lname: "Ping", age: 19 },
    { stdnum: "202310003", fname: "Paul", lname: "Ling", age: 21 },
    { stdnum: "202310004", fname: "JD", lname: "David", age: 22 }
];

// --> POST /update
export const updateData_MaryJane = {
    fname: "Mary Jane",
    newLname: "Parker"
};

// --> POST /remove-user
export const removeStudent = {
    stdnum: "123456789" // e.g of student does not exist
};

export const removeStudent_existing = {
    stdnum: "202312438" // e.g of student that exists
};
  
// --> POST /remove-all-user
// --> GET /user
// --> GET /members
