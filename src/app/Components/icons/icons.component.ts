
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  @Input() notecard:any;
  @Output() displaytoIcons = new EventEmitter<string>()
  data:any;
  noteID:any
 
  
  
  

  constructor(private note : NoteService) {  }
  
 trash(){
  let req={
    noteID:[this.notecard.noteID],
    isTrash:true,

  }
  console.log(req)
  this.note.trashnote(req).subscribe((response: any) => {
    console.log(response);
    this.displaytoIcons.emit(response);
    
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
    this.displaytoIcons.emit(response);
  
  })
 }
 colors: Array<any>=[
  {code:'#fff',name:"white"},
  {code:'#f28b82',name:"red"},
  {code:'#fbbc04',name:"orange"},
  {code:'#ffff00',name:"yellow"},
  {code:'#ccff90',name:"green"},
  {code:'#a7ffeb',name:"teal"},
  {code:'#cbf0f8',name:"blue"},
  {code:'#aecbfa',name:"darkblue"},
  {code:'#d7aefb',name:"purple"},
  {code:'#e6c9a8',name:"brown"},
  

]
setcolor(color:any){
  
 
  this.notecard.color=color
  let data={
    color:color,
    noteID:[this.notecard.noteID],
  }
  console.log(data);
  this.note.changecColor(data).subscribe((response:any)=>{
    console.log(response);
  })
}


}
