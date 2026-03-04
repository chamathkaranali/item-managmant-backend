import { Component } from '@angular/core';
import { Search } from "../search/search";
import { Update } from "../update/update";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [Search, Update, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
