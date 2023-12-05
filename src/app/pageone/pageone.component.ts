import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pageone',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './pageone.component.html',
  styleUrl: './pageone.component.scss',
})
export class PageoneComponent {}
