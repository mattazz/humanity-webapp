import { db_FirstNames, db_LastNames, 
    db_positiveAttr, db_negativeAttr,
db_milestone_general_events} from './db.js'

let firstNames = db_FirstNames
let lastNames = db_LastNames
let positiveAttr = db_positiveAttr
let negativeAttr = db_negativeAttr
let milestoneGenEvents = db_milestone_general_events

// Returns list [0] = First name [1] = Last name
function generate_name(){
    // console.log('Generating name...')
    let selected_Fname = firstNames[generateRandomInt(firstNames.length)]
    let selected_Lname = lastNames[generateRandomInt(lastNames.length)]
    // console.log('Generated Name: ' + selected_Fname + ' ' + selected_Lname)
    return [selected_Fname, selected_Lname]
}

function generate_attributes(max_amount){
    let final_list = []

    let i = 0
    while(i < max_amount){
        let totalAttr = [positiveAttr, negativeAttr]
        let category = totalAttr[generateRandomInt(totalAttr.length)]
        let attr = category[generateRandomInt(category.length)]
        while (final_list.indexOf(attr) != -1){
            console.log('Found duplicate attribute: ' + attr +  ' | Selecting another...')
            attr = category[generateRandomInt(category.length)]
        }
        final_list.push(attr)
        i ++
    }
    return final_list
}

// For generating random numbers
function generateRandomInt(max){
    let randNum = Math.floor(Math.random() * max)
    return randNum
}

function between(num, min, max){
    return num >= min && num <= max
}

// Main character class
class character{
    constructor({fName = generate_name()[0], 
        lName = generate_name()[1], 
        age = 0, 
        attr = generate_attributes(5),
        events = []
    }){
        this.fName = fName
        this.lName = lName
        // Always starts as newborn for now
        this.age = age
        this.attr = attr
        this.events = events
    }
    // Used to generate events in their lives
    generate_milestones(age, max_milestones){
        let era = ''
        if(between(this.age,0, 4)){
            era = 'infant'
        } else if(between(this.age, 5, 11)) {
            era = 'toddler'
        } else if(between(this.age, 12, 17)){
            era = 'child'
        } else if(between(this.age, 18, 24)){
            era = 'young_adult'
        } else if(between(this.age, 25, 999)){
            era = 'adult'
        }

        let positivity = ['positive', 'negative']
        let type = ['physical', 'mental', 'social']

        console.log('Generating milestone for Era: ' + era)

        let i = 0
        while(i < max_milestones){
            let selectedEra = milestoneGenEvents[era]
            let selectedPositivity = positivity[generateRandomInt(positivity.length)]
            let selectedType = type[generateRandomInt(type.length)]
            console.log(`Generating... || ${era} || ${selectedPositivity} || ${selectedType}`)
            let event = selectedEra[selectedPositivity][selectedType][0]['event']
            console.log("Specific event: " + event)
            console.log('Generating event for: ' + this.fName + ' : ' + event)
            this.events.push(event)
            i++

            // Writing to HTML
            $('#events').before(event);
        }   
    }

    age_up(number_of_years){
        this.age += number_of_years
        // Check injury
        // Check status and effects
    }

    age_up_w_milestones(number_of_years){
        let i = 0
        while(i<number_of_years){
            this.age ++
            i ++
            console.log('Aged up! New age is: ' + this.age)
            
            // Writing to HTML test
            $('#events').before(`<h5> Age: ${this.age}`);

            this.generate_milestones(this.age, 1) //Sets number of milestones per year
            // Check injury
            // Check status and effects
        }
    }
}

// Testing character generation
let char1 = new character({})
$('h1').text(char1.fName + ' ' + char1.lName);
$('h1').after(`<p>Attributes: ${char1.attr}`);
char1.age_up_w_milestones(generateRandomInt(80))
$('h1').after(`<p>Age:  ${char1.age} </p>`);
console.log(char1)