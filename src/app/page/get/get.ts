import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from "../header/header";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-get',
  imports: [FormsModule, NgForOf, Header, RouterLink],
  templateUrl: './get.html',
  styleUrl: './get.css',
})

export class Get {
  itemlist: any = null;
  showModal: boolean = false;
  selectedItem: any = null;

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

  openUpdateModal(item: any) {
    this.selectedItem = item;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedItem = null;
  }

  updateItem(item: any) {
    console.log(item);
    this.http.put("http://localhost:8080/update", item).subscribe({
      next: (response) => {
        alert("Item updated successfully!");
        this.closeModal();
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
      
        this.http.delete("http://localhost:8080/delete-by-id/" + itemCode).subscribe({
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
