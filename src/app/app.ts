import { NgForOf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  itemlist: any = null;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.localData();
  }

  localData() {
    this.http.get("http://localhost:8080/get").subscribe(data => {
      this.itemlist = data;
      this.cdr.detectChanges();
      console.log(data);
    });
  }

  updateItem(item: any) {
    this.http.put("http://localhost:8080/update", item).subscribe({
      next: (response) => {
        alert("Item updated successfully!");
        this.localData();
      },
      error: (error) => {
        console.error("Error updating item", error);
        alert("Failed to update the item.");
      }
    });
  }

  deleteItem(itemCode: String) {
    if (confirm("Are you sure you want to delete this item?")) {
      
        this.http.delete(`http://localhost:8080/delete/${itemCode}`).subscribe({
        next: (response) => {
          alert("Item deleted successfully!");
          this.localData();
        },
        error: (error) => {
          console.error("Error deleting item", error);
          alert("Failed to delete the item.");
        }
      });
    }
  }
}