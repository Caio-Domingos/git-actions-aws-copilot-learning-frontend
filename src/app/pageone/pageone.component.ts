import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-pageone',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './pageone.component.html',
  styleUrl: './pageone.component.scss',
})
export class PageoneComponent {
  constructor(private utilsService: UtilsService) {
    console.log(this.utilsService.getEnvs());
  }
}
