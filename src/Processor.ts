import { User } from './User'

export class Processor {
  static giveConsent(user: User): void {
    user.consentGiven = true
  }
  static verifyConsent(user: User): boolean {
    return user.consentGiven === true
  }
  static checkConsentEligibility(user: User): boolean {
    if (user.age < 18) {
      return false
    } else {
      return true
    }
  }
  static revokeConsent(user: User): boolean {
    return (user.consentGiven = false)
  }
}
