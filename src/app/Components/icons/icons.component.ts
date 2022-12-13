import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  @Input() notecard:any;
  
  data:any;
  noteID:any;
  constructor() {  }
  
 trash(){
  let req={
    NotesId:[this.notecard.noteID],
    Trash:true,

  }
  console.log(req)
 }




}
