import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, RouterModule  } from '@angular/router';
import { NavbarRoute } from 'projects/obelisco-angular-lib/core/models';
//import { ONavbarModule } from 'projects/obelisco-angular-lib/navbar';
import {
  COMPONENTS_NAVIGATION,
  OTHERS_NAVIGATION,
  ICONS_NAVIGATION,
} from './constants/components.constants';
import { HighlightJsModule } from 'ngx-highlight-js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightJsModule, RouterModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  showSection: boolean = false;
  routes: NavbarRoute[] = [
    {
      title: 'Introducción',
      route: 'get-started',
    },
    {
      title: 'Componentes',
      route: 'components',
    },
  ];

  componentRoutes =
    COMPONENTS_NAVIGATION.concat(OTHERS_NAVIGATION).concat(ICONS_NAVIGATION);

  // searchItemsList = this.componentRoutes
  //   .flatMap((item) => {
  //     if (item['children']) {
  //       return item.children.flatMap((navItem) => [
  //         { title: `${item.title} | ${navItem.title}`, route: navItem.route },
  //         {
  //           title: `${item.title} | ${navItem.title} - Api`,
  //           route: `${navItem.route}/api`,
  //         },
  //         {
  //           title: `${item.title} | ${navItem.title} - Ejemplos`,
  //           route: `${navItem.route}/examples`,
  //         },
  //       ]);
  //     } else if (
  //       item.route === '/get-started' ||
  //       item.route === '/components' ||
  //       item.route === '/'
  //     ) {
  //       return item;
  //     } else {
  //       return [
  //         { title: item.title, route: item.route },
  //         { title: `${item.title} - Api`, route: `${item.route}/api` },
  //         {
  //           title: `${item.title} - Ejemplos`,
  //           route: `${item.route}/examples`,
  //         },
  //       ];
  //     }
  //   })
  //   .sort((a, b) => a.title.localeCompare(b.title));

  constructor(private router: Router) {
    // this.searchItemsList.push({ title: 'Inicio', route: '/home' });
    // this.searchItemsList.push({ title: 'Componentes', route: '/components' });
    // this.searchItemsList.push({ title: 'Comenzar', route: '/get-started' });
    // this.searchItemsList.sort((a, b) => a.title.localeCompare(b.title));
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/get-started') {
          document.body.classList.add('scrollable');
        } else {
          document.body.classList.remove('scrollable');
        }
      }
    });

    this.router.events.subscribe(() => {
      const allowedRoutes = ['/get-started', '/components'];
      this.showSection = allowedRoutes.some(route =>
        this.router.url.startsWith(route)
      );
    });
  }
}
