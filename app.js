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
        is_dead = false,
        attr = generate_attributes(3),
        events = [],
        relations =[], //[0] is FATHER and [1] is MOTHER
        connection = '',
        npc = false,
        // Stats - Total of 100 | Each age era has random 20 roll
        stat_physical = generateRandomInt(20),
        stat_mental = generateRandomInt(20),
        stat_social = generateRandomInt(20)
    }){
        this.fName = fName
        this.lName = lName
        // Always starts as newborn for now
        this.age = age
        this.is_dead = is_dead
        this.attr = attr
        this.events = events
        this.relations = relations
        this.stat_physical = stat_physical
        this.stat_mental = stat_mental
        this.stat_social = stat_social
        this.npc = npc
        this.connection = connection


        if(this.npc == false){
            this.create_parents()
        }
    }
    /** Used to generate milestones for the 'add_up_w_milestones()' method
     * @param {Number} max_milestones number of milestones per 
     */
    generate_milestones(max_milestones){
        if (this.is_dead == false){

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

            // console.log('Generating milestone for Era: ' + era)

            let i = 0
            while(i < max_milestones){
                let selectedEra = milestoneGenEvents[era]
                let selectedPositivity = positivity[generateRandomInt(positivity.length)]
                let selectedType = type[generateRandomInt(type.length)]
                let numberOfEvents = selectedEra[selectedPositivity][selectedType].length
                // console.log(`Generating... || ${era} || ${selectedPositivity} || ${selectedType}`)
                let event = selectedEra[selectedPositivity][selectedType][generateRandomInt(numberOfEvents)]['event']
                // console.log("Specific event: " + event)
                // console.log('Generating event for: ' + this.fName + ' : ' + event)
                // console.log('NUM OF EVENTS: ' + numberOfEvents)
                this.events.push(event)
                i++

                // Writing to HTML
                if(this.npc == false){
                    $('#events').before(`<p> ${event}</p>`);
                }
            }   
        }
    }

    chance_of_death(){
        if (this.is_dead == false){
            if (generateRandomInt(100) > 50){
                console.log('Rolling for death for: ' + this.fName + ' ' + this.lName)
                this.is_dead = true
                this.fName = this.fName + ' (DEAD)'
                this.lName = this.lName + ' (DEAD)'
                this.events.push('Character died!')
            }
        }
    }

    create_parents(){
        let age_diff = 20
        let father = new character({
            lName: this.lName,
            age: 0,
            npc: true, //Stops form infinetly generating parents upon creation 
            connection: 'father'
        })
        let mother = new character({
            lName: this.lName,
            age: 0,
            npc: true,
            connection: 'mother'
        })
        // Ages the NPC parents
        father.age_up_w_milestones((age_diff + generateRandomInt(20)), 1, false)
        mother.age_up_w_milestones((generateRandomInt(20) + age_diff), 1, false)

        // Adds to Character's relations array
        this.relations.push(mother)
        this.relations.push(father)
    }

    interact_with_main_char(){
        if(generateRandomInt(100) > 50){
            $('#events').before(`<p> ${this.fName} ${this.lName} (${this.connection}) interacted with you! (social + 2) </p>`) //just a template
        }
    }

    /** 
    * Ages the character up with a chance for milestone events.
    * @param {number} number_of_years - Number of years to add to the age
    * @param {number} num_of_milestones - How many events will happen?
    * @param {boolean}with_interaction - Will hae NPCs try and interact with the main character
    */
    age_up_w_milestones(number_of_years, num_of_milestones, with_interaction){
        let i = 0
        while(i<number_of_years){

            if(this.is_dead == false){
                this.age ++
                i ++
                // Writing to HTML here because it needs to happen every age
                if (this.npc == false){
                    $('#events').before(`<h5> Age: ${this.age}`);
                }

                this.generate_milestones(num_of_milestones) //Sets number of milestones per year


                // Check age roll
                if(this.npc == false){
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
                }
                
                // Check injury and death- todo
                if (this.age > 60){
                    this.chance_of_death()
                }
                // Check status and effects - todo
                // Check social interactions from NPC
                if(this.npc == true && with_interaction == true && this.is_dead == false){
                    this.interact_with_main_char()
                }

                // Relations age up as well
                for(const i of this.relations){
                    console.log('CHECKING CHARACTER: ' + i.fName + ' ' + i.lName)
                    if (i.is_dead == false){
                        i.age_up_w_milestones(1, 1, true)
                    }
                }
            }            
            
            
        }
    }

    /** Used for checking the age and rolling for stats when reaching the next era in 'age_up_w_miletones()
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
        $('#char-name').text(mainChar.fName + ' ' + mainChar.lName);
        $('#char-attr').text(`${mainChar.attr.join(' | ')}`);
        $('#char-age').text(`Age:  ${mainChar.age}`);
        $('#char-physical-stat').text(mainChar.stat_physical + ' / 100');
        $('#char-mental-stat').text(mainChar.stat_mental + ' / 100');
        $('#char-social-stat').text(mainChar.stat_social + ' / 100');

        let relations = mainChar.relations
        $('#char-father').text(`${JSON.stringify(relations[0])} `);
        $('#char-mother').text(`${JSON.stringify(relations[1])} `);
    }
}

// Testing character generation
let mainChar = new character({})
// mainChar.age_up_w_milestones(generateRandomInt(80), generateRandomInt(5))

$('.age-up').click(function (e) { 
    e.preventDefault();
    mainChar.age_up_w_milestones(1,3, true)
    mainChar.to_HTML()
    
});

mainChar.to_HTML()
console.log(mainChar)