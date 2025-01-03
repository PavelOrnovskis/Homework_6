export class User {
  name: string
  age: number
  surname: string
  phoneNumber: string
  address: string
  consentGiven: boolean | undefined

  constructor(name: string, age: number, surname: string, phoneNumber: string, address: string) {
    this.name = name
    this.age = age
    this.surname = surname
    this.phoneNumber = phoneNumber
    this.address = address
  }
}
