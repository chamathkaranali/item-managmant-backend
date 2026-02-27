import { NgForOf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Additem } from "./page/additem/additem";
import { GetItem } from "./page/get-item/get-item";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
   ngOnInit(): void {
    initFlowbite();
  }
  protected readonly title = signal('item-managmant-backend');
}

// cdr: ChangeDetectorRef
// this.cdr.detectChanges()