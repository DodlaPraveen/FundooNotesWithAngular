
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
  
  

  constructor(private note : NoteService) {  }
  
 trash(){
  let req={
    noteID:[this.notecard.noteID],
    isTrash:true,

  }
  console.log(req)
  this.note.trashnote(req).subscribe((response: any) => {
    console.log(response);
    
  })
 }
 archive(){
  let req={
    noteID:[this.notecard.noteID],
   isArchive:true,
  }
  console.log(req)
  this.note.Archive(req).subscribe((response:any)=>{
    console.log(response)
  
  })
 }


}
