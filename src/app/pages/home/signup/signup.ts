import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
  standalone: true
})
export class Signup {

  studentNum: string = "";
  password1: string = "";
  password2: string = "";

  constructor (private myRouter: Router) {}

  async onSignUp(){
    if (this.password1 === this.password2){
      try{
        const response = await fetch("http://localhost:8080/createuser?studentNum="+this.studentNum+"&password="+this.password1);
        const data = await response.json();

        if (data.response === "Ack"){
          alert("Sign up successful");
          this.myRouter.navigate(['/']);
        }

        else{
          alert("Sign up failed");
        }

      }
      catch(error){
        alert(`Sign up failed: ${error}`);
      }
    }
  }

}
