import { db_FirstNames, db_LastNames, 
    db_positiveAttr, db_negativeAttr,
db_milestone_events} from './db.js'

let firstNames = db_FirstNames
let lastNames = db_LastNames
let positiveAttr = db_positiveAttr
let negativeAttr = db_negativeAttr
let milestoneEvents = db_milestone_events

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
        if (final_list.indexOf(attr) > -1){
            console.log('Found duplicate attribute: ' + attr +  ' | Selecting another...')
            attr = category[generateRandomInt(category.length)]
        }
        final_list.push(attr)
        i ++
    }
    return final_list
}

function generate_milestones(age, max_milestones){
    let era = 'toddler'
    let selectedEra = milestoneEvents[era]
    let event = selectedEra[generateRandomInt(selectedEra.length)]
    
    console.log(event)
}


// For generating random numbers
function generateRandomInt(max){
    let randNum = Math.floor(Math.random() * max)
    return randNum
}

// Main character class
class character{
    constructor({fName = generate_name()[0], 
        lName = generate_name()[1], 
        age = 0, 
        attr = generate_attributes(3),
        events = []
    }){
        this.fName = fName
        this.lName = lName
        // Always starts as newborn for now
        this.age = age
        this.attr = attr
        this.events = events
    }
}

// Testing character generation
let char1 = new character({})

generate_milestones(0,1)