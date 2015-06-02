/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, For, If, bootstrap} from 'angular2/angular2';

class FriendsService {
  names: Array<string>;
  constructor() {
    this.names= ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}

@Component({
  selector: 'display',
   //injectables: [FriendsService]
    injectables: [FriendsService]
})
@View({
  templateUrl: "list.html",
  directives: [
    For,
    If
    ]
})



class DisplayComponent {
  myName: string;
  names: Array<string>;
  
  constructor(friendsService : FriendsService) {
  this.myName = "Shahzad Ali";  
  this.names = friendsService.names;//["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}



bootstrap(DisplayComponent);