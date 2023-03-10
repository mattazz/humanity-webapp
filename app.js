import { db_FirstNames, db_LastNames, 
    db_positiveAttr, db_negativeAttr,
db_milestone_general_events} from './db.js'

// General bio stats
let firstNames = db_FirstNames
let lastNames = db_LastNames
let positiveAttr = db_positiveAttr
let negativeAttr = db_negativeAttr
let milestoneGenEvents = db_milestone_general_events

/**
* Min and Max ages for each age era
*/
let age_config = {
    infant: [0, 4],
    toddler: [5, 11],
    child: [12, 17],
    young_adult: [18, 31],
    adult: [32, 999]
}

/**
 * Returns list of a randomly generated full name
 * @returns {Array} First name and Last name in a list [fname, lname]
 */
function generate_name(){
    // console.log('Generating name...')
    let selected_Fname = firstNames[generateRandomInt(firstNames.length)]
    let selected_Lname = lastNames[generateRandomInt(lastNames.length)]
    // console.log('Generated Name: ' + selected_Fname + ' ' + selected_Lname)
    return [selected_Fname, selected_Lname]
}

/**
 * Generates attributes
 * @param {number} max_amount Amount of attributes to generate
 * @returns {Array} Final list of character attributes
 */
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

/** Generates a random int from 0 to {max}

 * @param {number} max Maximum range of the integer
 * @returns The randomized number
 */
function generateRandomInt(max){
    let randNum = Math.floor(Math.random() * max)
    return randNum
}

/** Quick check if a number is between two numbers {min, max}
 * @param {Number} num Number to check
 * @param {Number} min Minimum number
 * @param {Number} max Maximum number
 * @returns True or False
 */
function between(num, min, max){
    return num >= min && num <= max
}
/**
* Main Character class including methods for generating milestones and aging up
* @param {string} fName Defaults to generating a random first name
* @param {string} lName Defaults to generating a random last name
* @param {number} age Defaults to 0 (Start of birth)
* @param {Array} attr Defaults to 3 random attributes into an array
* @param {Array} events No events at the starts, but can get filled with generate_milestones()
*/
class character{

    constructor({fName = generate_name()[0], 
        lName = generate_name()[1], 
        age = 0, 
        attr = generate_attributes(3),
        events = [],
        // Stats - Total of 100 | Each age era has random 20 roll
        stat_physical = generateRandomInt(20),
        stat_mental = generateRandomInt(20),
        stat_social = generateRandomInt(20)
    }){
        this.fName = fName
        this.lName = lName
        // Always starts as newborn for now
        this.age = age
        this.attr = attr
        this.events = events
        this.stat_physical = stat_physical
        this.stat_mental = stat_mental
        this.stat_social = stat_social
    }
    /** Used to generate milestones for the 'add_up_w_milestones()' method
     * @param {Number} max_milestones number of milestones per 
     */
    generate_milestones(max_milestones){
        let era = ''
        if(between(this.age, age_config['infant'][0], age_config['infant'][1])){
            era = 'infant'
        } else if(between(this.age, age_config['toddler'][0], age_config['toddler'][1])) {
            era = 'toddler'
        } else if(between(this.age, age_config['child'][0], age_config['child'][1])){
            era = 'child'
        } else if(between(this.age, age_config['young_adult'][0], age_config['young_adult'][1])){
            era = 'young_adult'
        } else if(between(this.age, age_config['adult'][0], age_config['adult'][1])){
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
            let numberOfEvents = selectedEra[selectedPositivity][selectedType].length
            console.log(`Generating... || ${era} || ${selectedPositivity} || ${selectedType}`)
            let event = selectedEra[selectedPositivity][selectedType][generateRandomInt(numberOfEvents)]['event']
            console.log("Specific event: " + event)
            console.log('Generating event for: ' + this.fName + ' : ' + event)
            console.log('NUM OF EVENTS: ' + numberOfEvents)
            this.events.push(event)
            i++

            // Writing to HTML
            $('#events').before(`<p> ${event} </p>`);
        }   
    }

    age_up(number_of_years){
        this.age += number_of_years
        // Check injury
        // Check status and effects
    }

    /** 
    * Ages the character up with a chance for milestone events.
    * @param {number} number_of_years - Number of years to add to the age
    */
    age_up_w_milestones(number_of_years){
        let i = 0
        while(i<number_of_years){
            this.age ++
            i ++
            // console.log('Aged up! New age is: ' + this.age)
            
            // Writing to HTML here because it needs to happen every age
            $('#events').before(`<h5> Age: ${this.age}`);
            this.generate_milestones(1) //Sets number of milestones per year


            // Check age roll
            switch(this.age){
                case age_config['toddler'][0]:
                    this.era_update_stats('a toddler')
                    break
                case age_config['child'][0]:
                    this.era_update_stats('a child')
                    break
                case age_config['young_adult'][0]:
                    this.era_update_stats('a young adult')
                    break
                case age_config['adult'][0]:
                    this.era_update_stats('an adult')
                    break
            }
            // Check injury - todo
            // Check status and effects - tdo
        }
    }

    /** Used for checking the age and rolling for stats when reaching the next era
     * @param {String} era 
     */
    era_update_stats(era){
        let physical_add = generateRandomInt(20)
        let mental_add = generateRandomInt(20)
        let social_add = generateRandomInt(20)

        this.events.push(`You've become a ${era}!`)
        $('#events').before(` <p><b>You've become ${era}! (+${physical_add} Physical | +${mental_add} Mental | +${social_add} Social)</b</p>`)
        
        this.stat_physical += physical_add
        this.stat_mental += mental_add
        this.stat_social += social_add
    }

    /**
     * Pushes the Character info to HTML
     */
    to_HTML(){
        // Writing general bio card to HTML
        $('#char-name').text(char1.fName + ' ' + char1.lName);
        $('#char-attr').text(`${char1.attr.join(' | ')}`);
        $('#char-age').text(`Age:  ${char1.age}`);
        $('#char-physical-stat').text(char1.stat_physical + ' / 100');
        $('#char-mental-stat').text(char1.stat_mental + ' / 100');
        $('#char-social-stat').text(char1.stat_social + ' / 100');
    }
}

// Testing character generation
let char1 = new character({})
char1.age_up_w_milestones(generateRandomInt(80))
char1.to_HTML()
console.log(char1)