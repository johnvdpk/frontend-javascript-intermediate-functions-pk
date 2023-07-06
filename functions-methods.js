// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */

/* Een collectie van docenten */

const docenten = [

    {
        name: 'Marloes',
        email: 'marlies@novi-education.nl',
        school: 'novi',
    },
    {
        name: 'Robbert',
        email: 'robbert@outlook.com',
        school: 'novi',
    },
    {
        name: 'Ted',
        email: 'ted@novi.nl',
        school: 'novi',
    },

    {
        name: 'Marvin',
        email: 'marvin@outlook.com',
        school: 'novi',
    },
    {
        name: 'Sanne',
        email: 'sanne@novi.nl',
        school: 'novi',
    },
    {
        name: 'Rene',
        email: 'rene@novi-education.nl',
        school: 'novi',
    },


];

// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com





function getEmailDomain(werknemers) {

    for (let i = 0; i < werknemers.length; i++) {
        const name = werknemers[i].name;
        const email = werknemers[i].email;
        const domain = email.split('@')[1];
        console.log( "naam van werknemer = "+ name + " Met het email domein " + domain);
    }

}

getEmailDomain(docenten);
console.log("\n \n")




/* Opdracht  2 */

// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(werknemers) {

    for (let i = 0; i < werknemers.length; i++) {

        if (werknemers[i].email.split('@')[1] === 'novi-education.nl'){
            console.log("Student");
        }
        else if (werknemers[i].email.split('@')[1] !== 'novi.nl') {
            console.log("Medewerker");
            continue;
        }
        else if (werknemers[i].email.split('@')[1] !== 'outlook.com') {
            console.log("Extern");
            continue;
        } else
        console.log("Extern");

    };


};

typeOfEmail(docenten);



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in


function checkEmailValidity (werknemers) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (let i = 0; i < werknemers.length; i++) {
        const email = werknemers[i].email;
        const isValid = emailRegex.test(email);
        console.log(email + ": " + (isValid ? "Geldig" : "Ongeldig"));
    }
};

checkEmailValidity(docenten);