// Utility
function print(value){
    console.info(value)
}

// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores (){
    // create array with 10 elements
    const array =[17,82,23,4.9,5,6,71,8,89.9,10]
    // return the array
    return array
    }
// display value
print(`Scores Array: ${scores()}`)



// TODO: Access an element from the array
function accessScore(index){
    // using array above access the 3rd element
    const values =scores()
    const elememt = values[index]
    // return the elememt
    return elememt
}
// display value
print(`Third Score: ${accessScore(4)}`)

// TODO: Create an array that has multiple nested arrays
function nestedScores(){
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)
    const nesstedArray =[[5,6],[6,7,8],9]
    // return the nested arrays
    return nesstedArray[0][1]
}
// display value
print(`Nested Score Array: ${nestedScores()}`)


// TODO: Some array methods (length)
function getNumberOfScores(){
    // using either of the two arrays created above get the length of the array
    const nest = nestedScores()
    const len = nest.length
    // return the number of elements
    return len

}
// display value
print(`Number of elements: ${getNumberOfScores()}`)
// TODO: Some array methods(push)
function addElement(){
    // using either of the two arrays created above, add two new elements of your choice
    const studentscores=scores()
    studentscores.push(30,50,89,99,45,67)

    const otherscores = scores()
    const newOther = [...otherscores, 30,45,89,99,45,67]
    // return the new array with the elements that have been added
    return studentscores

}
// display value
print(`Added elements: ${addElement()}`)



// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student(){
    const studentX = {
        studentName: 'Churchill Winstone',
        studentAge: 24,
        studentEmail: "winstone51@gmail.com",
        studentNumber: 657363,
        isKenyan: true
    }
    
    // return student age
    return studentX
}
// display value
print(`Student: ${JSON.stringify(student())}`)

// TODO: Access student's age
function studentAge(){
    // access student age using key
    const studentDetails= student()
    const studentAge=studentDetails["studentAge"]
    // return student age
    return studentAge
    

}
// display value
print(`Student Age: ${studentAge()}`)


// TODO: Access student's age
function studentEmail(){
    // access student email using dot operator


    // return student email

}
// display value
// print(`Student Email: ${studentEmail()}`)


// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user(){
    // create user object
    const userX ={
        id:1,
        name:'Tonny',
        course:{
            name:'Course',
            number: 34
        }
    }
    print(userX)
    // return user object
    return userX

}
// display value
print(`User: ${JSON.stringify(user())}`)


// TODO: Some object methods (entries)
function getUserEntries(){
    // get user entries
    const entries=Object.entries(user)
    // return entries
    return entries

}
// display value
print(`User Entries: ${getUserEntries()}`)


// TODO: Some object methods (keys)
function getUserKeys(){
    // get user keys


    // return keys

}
// display value
// print(`User Keys: ${getUserKeys()}`)

