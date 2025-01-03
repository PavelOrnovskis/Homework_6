import { User } from '../src/User'
import { Processor } from '../src/Processor'

describe('Processor test', () => {
  let user1: User
  beforeAll(() => {
    user1 = new User('P', 18, 'O', '3', 'VA')
  })
  test('Default state undefined', () => {
    const user1 = new User('P', 18, 'O', '3', 'VA')
    expect(user1.consentGiven).toBeUndefined()
  })

  test('State is true', () => {
    const user1 = new User('P', 18, 'O', '3', 'VA')
    Processor.giveConsent(user1)
    expect(user1.consentGiven).toBe(true)
  })
  test('Processor verify consent test', () => {
    const user1 = new User('P', 18, 'O', '3', 'VA')
    Processor.giveConsent(user1)
    expect(Processor.verifyConsent(user1)).toBeTruthy()
  })
  test('Processor consent fail', () => {
    const user1 = new User('P', 18, 'O', '3', 'VA')
    expect(Processor.verifyConsent(user1)).toBeFalsy()
  })
  test('age lower than 18 check', () => {
    const user1 = new User('P', 17, 'O', '3', 'VA')
    expect(Processor.checkConsentEligibility(user1)).toBe(false)
  })
  test('age is 18 or older check', () => {
    const user1 = new User('P', 18, 'O', '3', 'VA')
    expect(Processor.checkConsentEligibility(user1)).toBe(true)
  })
  test('revokeConsent is giving false', () => {
    const user1 = new User('P', 18, 'O', '3', 'VA')
    expect(Processor.revokeConsent(user1)).toBe(false)
  })
})
