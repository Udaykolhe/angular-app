import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
 getStudent(){
  return [
    {Name : 'Uday' , Age : 24 , City : 'Delhi'},
    {Name : 'Vipul' , Age : 25 , City : 'Pune'},
    {Name : 'Rahul' , Age : 24 , City : 'Siwal'},
    {Name : 'Mayur' , Age : 25 , City : 'MH'}
  ]
 }

}
