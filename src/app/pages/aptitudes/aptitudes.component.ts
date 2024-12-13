import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aptitude } from '../../interfaces/aptitudesInterfaces';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class AptitudesComponent implements OnInit {
  aptitudes: Array<Aptitude>;

  constructor() {
    this.aptitudes = [
      {
        img: './app/assets/img/aptitudes-logos/html-logo.svg',
        descripcion: 'HTML',
      },
      {
        img: './app/assets/img/aptitudes-logos/jg-logo.svg',
        descripcion: 'JavaScript',
      },
      {
        img: './app/assets/img/aptitudes-logos/ts-logo.svg',
        descripcion: 'TypeScript',
      },
      {
        img: './app/assets/img/aptitudes-logos/react-logo.svg',
        descripcion: 'React',
      },
      {
        img: './app/assets/img/aptitudes-logos/angular-logo.svg',
        descripcion: 'Angular',
      },
      {
        img: './app/assets/img/aptitudes-logos/nodejs-logo.svg',
        descripcion: 'Node.js',
      },
      {
        img: './app/assets/img/aptitudes-logos/express-logo.svg',
        descripcion: 'Express',
      },
      {
        img: './app/assets/img/aptitudes-logos/nest-logo.svg',
        descripcion: 'NestJs',
      },
      {
        img: './app/assets/img/aptitudes-logos/graphql-logo.svg',
        descripcion: 'Graphql',
      },
      {
        img: './app/assets/img/aptitudes-logos/css-logo.svg',
        descripcion: 'CSS',
      },
      {
        img: './app/assets/img/aptitudes-logos/sass-logo.svg',
        descripcion: 'SASS',
      },
      {
        img: './app/assets/img/aptitudes-logos/bt-logo.svg',
        descripcion: 'Bootstrap',
      },
      {
        img: './app/assets/img/aptitudes-logos/tailwind-logo.svg',
        descripcion: 'Tailwind',
      },
      {
        img: './app/assets/img/aptitudes-logos/git-logo.svg',
        descripcion: 'Git',
      },
      {
        img: './app/assets/img/aptitudes-logos/github-logo.svg',
        descripcion: 'Github',
      },
    ];
  }

  ngOnInit(): void {}
}
