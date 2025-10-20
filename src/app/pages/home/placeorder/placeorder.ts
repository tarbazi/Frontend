import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-placeorder',
  imports: [RouterLink, FormsModule ],
  templateUrl: './placeorder.html',
  styleUrl: './placeorder.css',
  standalone: true
})
export class Placeorder {

  message: string = "";
  studentNum: string = "";

  ngOnInit(): void{
    const state = history.state;

    if (state && state.studentNum){
      this.studentNum = state.studentNum;
    }

  }

  async onSubmit(){
    try{
  
      const response = await fetch("http://localhost:8080/placeOrder?studentnum=" + this.studentNum + "&ordermessage=" + this.message, {method : "POST"});
      const data = await response.json();

      alert(`${data.response}`);
    
      if (data.response === "Ack"){
        alert("Order placed successfully")
      }

      else{
        alert("Order failed");
      }

    }
    catch (error){
      alert(`Order failed: ${error}`);
    }
  }

}
