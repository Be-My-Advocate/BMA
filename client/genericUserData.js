const patientObject = {
  id: 2,
  username: 'patient',
  password: 'patient',
  fname: 'Taylor',
  lname: 'Smith',
  email: 'tay@gmail.com',
  role: 'patient'
}

const advocateObject = {
  id: 1,
  username: 'advocate',
  password: 'advocate',
  fname: 'Zane',
  lname: 'Jackson',
  email: 'zane@gmail.com',
  role: 'advocate',
  location: {lat: '36', lng: '-115'},
}

const vegasLocation = {
  lat: 36.114647,
  lng: -115.172813
}

const advocateLocationArray = [
  {
    id: 3,
    username: 'adv',
    password: 'adv',
    fname: 'Bob',
    lname: 'Mackson',
    email: 'bob@gmail.com',
    role: 'advocate',
    location: {lat: 36.1162, lng: -115.1745},
  },
  {
    id: 4,
    username: 'ad',
    password: 'ad',
    fname: 'Kay',
    lname: 'Lake',
    email: 'kay@gmail.com',
    role: 'advocate',
    location: {lat: 36.06799, lng: -115.101026},
  },
  {
    id: 5,
    username: 'aaa',
    password: 'aaa',
    fname: 'George',
    lname: 'Corbin',
    email: 'george@gmail.com',
    role: 'advocate',
    location: {lat: 36.1196, lng: -115.1581},
  },
]

const calendarData = [
  {date: 'Tuesday, November 5th', data: 'Webinar w/ Jane C. @ 3pm'},
  {date: 'Friday, November 8th', data: 'Appointment w/ Dr.Joe @ 8am'},
  {date: 'Wednesday, November 13th', data: 'Women\'s Support Group @ 7pm'},
  {date: 'Thursday, November 21st', data: 'Learn About Humira @ 5pm'},
  {date: 'Friday, November 22nd', data: 'Video Chat w/ Kelsey'},
]

const learnData = ['Women\'s Support', 'About Humira', 'IBD Facts', 'Teen Issues', 'Women 18-35', 'What Now?', 'OMG IBD', 'Crohns', 'Diabetes in Women', 'Pregnancy over 40', 'Anxiety Medication', 'Coping With Depression']

export const genericData = {
  patientObject, advocateObject, advocateLocationArray, vegasLocation, calendarData, learnData
}