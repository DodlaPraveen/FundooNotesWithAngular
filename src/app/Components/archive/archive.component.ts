import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  noteArray: any;

  constructor(private note : NoteService) { }
  ngOnInit(): void {
    this. ArchiveList()
  }
  ArchiveList() {
    this.note.getall().subscribe((request: any) => {
      console.log("request data", request)
    this.noteArray = request
    console.log("request data", this.noteArray);
    this.noteArray=this.noteArray.reverse()
    this.noteArray=this.noteArray.filter((notedata:any)=>{
      return notedata.isArchive==true;
     

 })
 })
    
 }
 receiveMsgfromDisplay($event:any){
  
  this.ArchiveList();
}


}
