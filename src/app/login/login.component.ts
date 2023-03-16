import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder /*, private AuthenticationService: AuthenticationService, private router: Router*/) {
    this.form = this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          deviceId: ["178678668768"],
          deviceType:["DEVICE_TYPE_ANDROID"],
          notificationToken:["67657575eececc34"]
        })
      }
    )
  }

  ngOnInit(): void {}

  get Email() {
    return this.form.get("email");
  }
  get Password() {
    return this.form.get("password");
  }

  /*onSend(event:Event) {
    event.preventDefault;
    this.AuthenticationService.StartSession(this.form.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      this.router.navigate(['/portfolio']);

    })
  }*/

}
