export let db_FirstNames = ['Miguel', 'Sadie', 'Simon', 'Ramon', 'Adri', 'Stephen', 'Mark', 'Sarah','Celine']
export let db_LastNames = ['Santos', 'Stephens', 'Colbert', 'Azada', 'Rudfowl', 'Bessinger', 'Rogan']

export let db_positiveAttr = ['Brave', 'Intelligent', 'Charismatic', 'Attractive', 'Social']
export let db_negativeAttr = ['Clumsy', 'Ugly', 'Fickle', 'Evil', 'Introvert']


// Replace above if it works
// Severity = scale from -10 to 10 neg to pos
// Category = physical, mental, or social
export let db_milestone_general_events = {
    infant: {
        positive:{
            physical:
                [
                {event: 'Ate a good meal',
                severity: 0,
                condition: ''},
                {event: 'Da-da played with me',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Listened to good music',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event: 'Played with ma-ma',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Ate something spoiled',
                severity: 0,
                condition: ''},
                {event: 'Rolled around my bed',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Everyone was too loud!',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event: 'Ma-ma got mad at me',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        }
    },
    toddler: {
        positive:{
            physical:
                [
                {event: 'Visited a park',
                severity: 0},
                {event: 'Met a dog today',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Remembered a nice memory',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event: 'Had a play date with a friend',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Bit my tongue!',
                severity: 0,
                condition: ''},
                {event: 'Smelled a fart!',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Got a headache',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event: 'A kid pushed me!',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        }
    },
    child: {
        positive:{
            physical:
                [
                {event: 'Ate a good meal',
                severity: 0,
                condition: ''},
                {event: 'Friend told me I was good looking',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Solved a puzzle!',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event: 'Played with friends at the park',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Injured my knee',
                severity: 0,
                condition: ''},
                {event: 'Had a cough.',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Could not solve a puzzle',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event: 'I was left alone at home',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        }
    },
    young_adult: {
        positive:{
            physical:
                [
                {event: 'Got good grades this sem',
                severity: 0,
                condition: ''},
                {event: 'Had a good date',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Listened to good music',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event: 'Spent time with my family',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Broke my wrist',
                severity: 0,
                condition: ''},
                {event: 'Got bullied at school',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Could not finish my homework',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event:  'None of my friends were available to hang out',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        }
    },
    adult: {
        positive:{
            physical:
                [
                {event: 'Played video games!',
                severity: 0,
                condition: ''},
                {event: 'Won a basketball tournament',
                severity: 0,
                condition: ''},
                {event: 'Got a new job!',
                severity: 0,
                condition: 'has_no_job'},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Finished my homework!',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event: 'Joined a hobby club',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Felt some back pain',
                severity: 0,
                condition: ''},
                {event: 'Got the flu',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            mental:
                [
                {event: 'Got fired from work!',
                severity: 0,
                condition: 'has_job'},
                {event: '',
                severity: 0,
                condition: ''}
            ],
            social:
                [
                {event: 'Loved one died!',
                severity: 0,
                condition: ''},
                {event: '',
                severity: 0,
                condition: ''}
            ],
        }
    },
}

let db_unique_milestone_events = {
    infant: {
        positive: [],
        negative: []
    },
    toddler: {
        positive: [],
        negative: []
    },
    child: {
        positive: [],
        negative: []
    },
    young_adult: {
        positive: [],
        negative: []
    },
    adult: {
        positive: [],
        negative: []
    }
}