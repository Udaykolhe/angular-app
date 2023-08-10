import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
     public name = "Uday Kolhe";
     public displayName = "";

     getName(value:string){
      this.displayName = value;
     }
}
