import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderNavigationService } from '../../services/headerNavigationService/header-navigation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
})
export class HeaderComponent implements OnInit {
  langAns: Boolean = false;
  menuShowed: Boolean = false;

  constructor(
    private translate: TranslateService,
    private navigationService: HeaderNavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setNavigationTag('about');
  }

  cambiarIdioma(ans: Boolean) {
    this.langAns = !ans;

    if (ans) {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
  }

  moveToSection(headerTag: string) {
    this.navigationService.setNavigationTag(headerTag);
    this.menuShowed = false;
  }
}
