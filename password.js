// Problem 4

// Make a great password.

function password(obj){
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
        return 'invalid';
    }

    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let pass = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;

    return pass;
}

const checkPassword = password({name: "kolimuddin", birthYear: 1999, siteName: "google"});
console.log(checkPassword); // Output => Google#kolimuddin@1999

const checkPassword2 = password({name: "rahat", birthYear: 2002, siteName: "Facebook"});
console.log(checkPassword2); // Output => Facebook#rahat@2002

const checkPassword3 = password({name: "toky", birthYear: 200, siteName: "Facebook"});
console.log(checkPassword3); // Output => invalid

const checkPassword4 = password({name: "maisha", birthYear: 2002});
console.log(checkPassword4); // Output => invalid