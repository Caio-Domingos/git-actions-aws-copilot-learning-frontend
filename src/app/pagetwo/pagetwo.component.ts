import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pagetwo',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './pagetwo.component.html',
  styleUrl: './pagetwo.component.scss',
})
export class PagetwoComponent {}
