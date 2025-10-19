import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  async onSubmit(){
    try{
      const response = await fetch("http://localhost:8080/placeOrder?studentNum=" + this.studentNum + "&orderMessage=" + this.message, {method : "POST"});
      //const data = await response.json();

      alert(`${response}`);
    
      /*if (data.response === "Ack"){
        alert("Order placed successfully")
      }

      else{
        alert("Order failed");
      }*/

    }
    catch (error){
      alert(`Order failed: ${error}`);
    }
  }

}
