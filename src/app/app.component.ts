import { Component } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recaptcha-v3';
  public form: FormGroup;

  constructor(private recaptchaV3Service: ReCaptchaV3Service) {
    this.form = new FormGroup({
      name: new FormControl(null)
    });
  }


  /**
   * If we get the token means, the button is not clicked by the bot and it is a valid user.
   * Generating a token means that the user is valid,
   * but if the token is not generated then that means a Bot is trying to execute this action, and this will be logged in the Google console
   * https://www.google.com/recaptcha/admin/site/656044454
   */
  public send(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token: string) => {
        console.log(`Token [${token}] generated`);
      }, (err) => {
        console.log(`Error => ${err}`);
      });
  }

}
