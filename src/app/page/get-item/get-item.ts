import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-get-item',
  imports: [NgForOf],
  templateUrl: './get-item.html',
  styleUrl: './get-item.css',
})
export class GetItem {
  itemlist:any=null;
  

  constructor(private http:HttpClient,private cdr: ChangeDetectorRef){
    this.localData();
  }
  localData(){
    this.http.get("http://localhost:8080/item").subscribe(data=>{
      this.itemlist=data;
      this.cdr.detectChanges()
      console.log(data);
    })
  }
}
