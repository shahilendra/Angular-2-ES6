import {Component, View} from 'angular2/angular2';
import { _settings } from '../../settings'
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {Inject} from 'angular2/di';
import {Router} from 'angular2/router';
import {AchievementsService} from '../../services/achievementsService';

@Component({
    selector: 'Login',
  injectables: [FormBuilder]
})
@View({
        templateUrl: _settings.buildPath + '/components/Login/Login.html',
  directives: [formDirectives]
})
export class Login {
    addLoginForm: any;

  constructor( @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(Router) private router: Router) {

      this.addLoginForm = formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  LogIn() {
      //this.achievementsService.addAnAchievement(this.addLoginForm.value)
      //.map(r => r.json())
      //.subscribe(result => {
      //  this.router.parent.navigate('/');
      //});
      console.log(this.addLoginForm.value);
  }
}
