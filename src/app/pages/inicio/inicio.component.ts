import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { HeaderNavigationService } from '../../services/headerNavigationService/header-navigation.service';
import { InicioPresentacionComponent } from '../inicio-presentacion/inicio-presentacion.component';
import { TrabajosComponent } from '../trabajos/trabajos.component';
import { AptitudesComponent } from '../aptitudes/aptitudes.component';
import { ContactameComponent } from '../contactame/contactame.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InicioPresentacionComponent,
    TrabajosComponent,
    AptitudesComponent,
    ContactameComponent
  ],
})
export class InicioComponent implements OnInit {
  currentTag: string = '';
  tagsSubscription: Subscription;

  constructor(private navigationService: HeaderNavigationService) {
    this.currentTag = this.navigationService.getNavigationTag();
    this.tagsSubscription = this.navigationService
      .gettagChanges()
      .subscribe((tag) => {
        this.scrollTo(tag);
      });
  }

  ngOnInit(): void {}

  scrollTo(section: string) {
    var element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
