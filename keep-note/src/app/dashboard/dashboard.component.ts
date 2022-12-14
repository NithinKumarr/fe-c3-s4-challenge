import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Note } from '../models/notes';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private services:ServiceService){}
}
