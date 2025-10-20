import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

  studentNum: string = "";
  password: string = "";
  
  private url = "";

  constructor(private myRouter: Router){}

  async onSignIn(){
    try{

      const response = await fetch("http://localhost:8080/authenticate?studentnum="+this.studentNum+"&password="+this.password, {method: "POST"} );
      const data = await response.json();
      
      if (data.response == "Ack"){
        this.myRouter.navigate(['/placeorder'], { state: { studentNum: this.studentNum }});
      }

      else{
        alert(`Authentication Failed: Incorrect Username or Password`);
      }
    }
    catch(error){
      alert(`Authentication Failed: ${error}`);
    }
  }

}
