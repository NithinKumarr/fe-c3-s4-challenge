import { Component,OnInit,Input } from '@angular/core';
import{Note} from '../models/notes';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit{
  searchComponent(searchText:string){
    if(searchText == '' || searchText == null){
      this.service.getData().subscribe({
        next:(val:any) => {this.notes = val; console.log(this.notes)},
        error:err => console.log(err)
      })
    }
    else{
      this.service.getData().subscribe({
        next:(val:any) => {
          this.notes = val.filter((abc:any) => abc.title?.includes(searchText)); 
          console.log("data"+ this.notes)},
        error:err => console.log(err)
      })
     
    }
  }

  notes: Note[]=[];

  constructor(private service:ServiceService){}

  ngOnInit(): void {
    this.service.getData().subscribe({
      next:(val:any) => {this.notes = val; console.log(this.notes)},
      error:err => console.log(err)
    })
  }

  addedNoteComponet(data:any){
    this.notes.push(data)
  }

}