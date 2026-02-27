import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { item } from '../../model/type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-additem',
  imports: [FormsModule],
  templateUrl: './additem.html',
  styleUrl: './additem.css',
})
export class Additem {
  // itemlist:any=null;

  itemObject: item = {
    itemCode: '',
    description: '',
    packSize: '',
    unitPrice: 0,
    qty: 0
  }

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  addItem() {
    console.log("item ojb" + this.itemObject);
    this.http.post("http://localhost:8080/add", this.itemObject).subscribe(res => {
      console.log(this.itemObject.itemCode)
    });
  }
}
