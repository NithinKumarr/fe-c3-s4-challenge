import { Component,Input } from '@angular/core';
import {Note} from '../models/notes';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input()
  viewData:Note={};
}
