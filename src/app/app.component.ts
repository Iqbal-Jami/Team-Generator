import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team Generator';
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }

  addMember() {
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    console.log(this.members);

  }
}
