// `Brioche loves ${activity}`

function preActivity(gender){
    const hisHer = gender=='M'?'His':'Her'
    const heShe = gender=='M'?'He':'She'

    const preActivities = [
        `${hisHer} favorite activity is`,
        `${heShe} loves`,
        `${heShe} can often be found`,
        `${heShe} likes`,
        `${heShe}'s always`
    ]

    return(preActivities[Math.floor(Math.random()*preActivities.length)])
}

const activities = [
    'watching the birds',
    'chasing a ball around',
    'wreaking havoc',
    'eating',
    'playing with the window blinds',
    'sleeping',
    'cuddling',
    'screaming at nothing',
    'carrying a conversation',
    'being alone',
    'lying about dinner time',
    'saving a few bites of breakfast for later',
    'watching birds on TV',
    'walking across your computer keyboard',
    'getting attention',
    'getting ear scratches',
    'getting belly rubs',
    'smelling feet',
    'playing with shoelaces',
    'zooming around in the middle of the night',
    'waking up at the crack of dawn',
    'playing with other cats',
    'listening to music',
    'getting into trouble'
]

module.exports = {activities,preActivity}