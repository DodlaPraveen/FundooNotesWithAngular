import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
  noteArray: any;
  trashlist:any;
  

  constructor(private note : NoteService){}
  ngOnInit(): void {
    this.TrashList()

  }
  TrashList() {
    this.note.getall().subscribe((request: any) => {
      console.log("request data", request)
    this.noteArray = request
    console.log("request data", this.noteArray)
    this.noteArray=this.noteArray.reverse();
      this.noteArray=this.noteArray.filter((notedata:any)=>{
      
        return notedata.isArchive==false;
      })
    })
  }

}
