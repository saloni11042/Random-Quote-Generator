let quotes=[
    'People inspire you, or they drain you. Pick them wisely.',
    'To be heroic is to be courageous enough to die for something; to be inspirational is to be crazy enough to live a little.',
    'Instead of being intimidated by the limitations, be inspired to find new ways around them.',
    'Inspiration exists, but it has to find you working.',
    'If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes.',
    'Inspire yourself to be great. Being good isn\'t good enough.',
    'Genius is one percent inspiration and ninety-nine percent perspiration.',
    'If you need inspiration, don\'t do it.”',
    'Amateurs sit and wait for inspiration, the rest of us just get up and got to work.',
    'You can\'t wait for inspiration. You have to go after it with a club. '
]
let authors=[
    'Les Brown',
    'Criss Jami',
    'Ralph Marston',
    'Pablo Picasso',
    'Andrew Carnegie',
    'Gurbaksh Chahal',
    'Thomas Edison',
    'Elon Musk',
    'Stephen King',
    'Jack London'
]

let q=document.getElementById('quote')
let a = document.getElementById('author')

q.innerHTML=quotes[0];
a.innerHTML=authors[0];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function handleClick(){
    let i = getRndInteger(0,quotes.length);
    console.log(i);
    q.innerHTML=quotes[i];
    a.innerHTML=authors[i];
  }