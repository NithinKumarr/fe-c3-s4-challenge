import { Component,Output,EventEmitter } from '@angular/core';
import{Note} from '../models/notes';
import{ServiceService} from '../service/service.service'
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  addedNote : Note={};

  @Output()
  myNote = new EventEmitter();
  add(){
    this.myNote.emit(this.addedNote)
  }
  
  // @Output()
  // addNote:note = new EventEmitter<note>();
  
  // add(){
  //   this.addedNote.emit(this.addNote)
  // }
  
  constructor(private services:ServiceService){}
  saveNote(){
    this.services.addNote(this.addedNote).subscribe(abc => {
      alert("New Blog Added");
      this.addedNote = {}
    })
  }
  
  // data = {this.addNote.id, this.addNote.title, this.addNote.content}
  
  }
