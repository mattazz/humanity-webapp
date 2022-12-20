export let db_FirstNames = ['Matt', 'Adi', 'Shadow']
export let db_LastNames = ['Azada', 'Amor', 'Shiba']

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
                condition: None},
                {event: 'positive infant event',
                severity: 0}
            ],
            mental:
                [
                {event: 'Listened to good music',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'Played with ma-ma',
                severity: 0,
                condition: None}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Ate something spoiled',
                severity: 0,
                condition: None},
                {event: 'Rolled around my bend',
                severity: 0,
                condition: None}
            ],
            mental:
                [
                {event: 'Everyone was too loud!',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'Ma-ma got mad at me',
                severity: 0,
                condition: None}
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
                condition: None}
            ],
            mental:
                [
                {event: 'Remembered a nice memory',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'Had a play date with a friend',
                severity: 0,
                condition: None}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Bit my tongue!',
                severity: 0,
                condition: None},
                {event: 'Smelled a fart!',
                severity: 0,
                condition: None}
            ],
            mental:
                [
                {event: 'Got a headache',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'A kid pushed me!',
                severity: 0,
                condition: None}
            ],
        }
    },
    child: {
        positive:{
            physical:
                [
                {event: 'Ate a good meal',
                severity: 0,
                condition: None},
                {event: 'Friend told me I was good looking',
                severity: 0,
                condition: None}
            ],
            mental:
                [
                {event: 'Solved a puzzle!',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'Played with friends at the park',
                severity: 0,
                condition: None}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Injured my knee',
                severity: 0,
                condition: None},
                {event: 'Had a cough.',
                severity: 0,
                condition: None}
            ],
            mental:
                [
                {event: 'Could not solve a puzzle',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'I was left alone at home',
                severity: 0,
                condition: None}
            ],
        }
    },
    young_adult: {
        positive:{
            physical:
                [
                {event: 'Got good grades this sem',
                severity: 0,
                condition: None},
                {event: 'Had a good date',
                severity: 0,
                condition: None}
            ],
            mental:
                [
                {event: 'Listened to good music',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'Spent time with my family',
                severity: 0,
                condition: None}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Broke my wrist',
                severity: 0,
                condition: None},
                {event: 'Got bullied at school',
                severity: 0,
                condition: None}
            ],
            mental:
                [
                {event: 'Could not finish my homework',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'Played with ma-ma',
                severity: 0,
                condition: None}
            ],
        }
    },
    adult: {
        positive:{
            physical:
                [
                {event: 'Ate a good meal',
                severity: 0,
                condition: None},
                {event: 'positive infant event',
                severity: 0,
                condition: None}
            ],
            mental:
                [
                {event: 'Listened to good music',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'Played with ma-ma',
                severity: 0,
                condition: None}
            ],
        },
        negative:{
            physical:
                [
                {event: 'Ate a good meal',
                severity: 0,
                condition: None},
                {event: 'positive infant event',
                severity: 0,
                condition: None}
            ],
            mental:
                [
                {event: 'Listened to good music',
                severity: 0,
                condition: None}
            ],
            social:
                [
                {event: 'Played with ma-ma',
                severity: 0,
                condition: None}
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