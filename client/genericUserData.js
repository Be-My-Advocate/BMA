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

export const genericData = {
  patientObject, advocateObject, advocateLocationArray, vegasLocation
}