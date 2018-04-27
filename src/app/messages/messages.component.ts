import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor( public Messages: MessagesService ) {
  }

  ngOnInit() {
  }
  
  delete(i: number){
    this.Messages.Messages.splice(i, 1);
}
}