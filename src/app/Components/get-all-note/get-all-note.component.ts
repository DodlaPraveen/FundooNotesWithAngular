import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent {
  noteArray: any;
  msg: any;
  constructor(private note: NoteService) { }
  ngOnInit(): void {
    this.getallnotes()
  }
  getallnotes() {
    this.note.getall().subscribe((request: any) => {
      console.log("request data", request)
      this.noteArray = request
      console.log("request data", this.noteArray)
    })
  }
}
