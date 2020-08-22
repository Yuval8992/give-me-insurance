import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('סיסמא').value;
    if (AC.get('אישור סיסמא').touched || AC.get('אישור סיסמא').dirty) {
      let verifyPassword = AC.get('אישור סיסמא').value;

      if (password != verifyPassword) {
        AC.get('אישור סיסמא').setErrors({ MatchPassword: true });
      } else {
        return null;
      }
    }
  }
}
