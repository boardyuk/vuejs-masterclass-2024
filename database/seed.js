import { fakerEN_US as faker } from '@faker-js/faker'

const personName = faker.person.fullName()
const personBio = faker.person.bio()

console.log(' Hi! My anme is ', personName, '. I am a ', personBio)