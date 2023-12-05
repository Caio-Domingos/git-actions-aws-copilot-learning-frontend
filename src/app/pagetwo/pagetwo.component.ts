import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ItemsService } from '../services/items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagetwo',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './pagetwo.component.html',
  styleUrl: './pagetwo.component.scss',
})
export class PagetwoComponent implements OnInit {
  list: any[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((items: any) => {
      console.log(items);
      this.list = items;
    });
  }
}
