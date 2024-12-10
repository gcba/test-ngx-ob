import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  public ngxObelisco = `
npm install @gcba/ngx-obelisco
`;

  public boxicons = `
npm install boxicons
`;

  public materialIcons = `
npm install material-symbols@latest
`;
  public materialIconsCss = `
@import "material-symbols/index.css";

.material-symbols-rounded {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
`;

  public boxiconsCDN = `
<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
/>
`;

  public materialIconsCDN = `
<link 
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" 
  rel="stylesheet"
/>
`;

  public typography = `
<link
  href="https://fonts.googleapis.com/css2?
    family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
  rel="stylesheet"
/>

<link
  href="https://fonts.googleapis.com/css2?
    family=Nunito:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
`;

  public js = `
<script 
  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" 
  integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" 
  crossOrigin="anonymous">
</script>

<script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
  integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" 
  crossOrigin="anonymous">
</script>
`;

  public iconImport = `
"styles": [
  "src/styles.scss",
  "node_modules/boxicons/css/boxicons.min.css"
],`;

  public stylesImport = `
"styles": [
  "src/styles.scss",
  "node_modules/@gcba/ngx-obelisco/scss/obelisco.scss"
]`;

  public accessImport = `
import { OButtonModule } from '@gcba/obelisco-angular/button';
import { OAlertModule } from '@gcba/obelisco-angular/alert';
  `;

  public ngxImport = `
import { NgxObeliscoModule } from '@gcba/obelisco-angular/ngx-obelisco';
  `;

  currentSection = 'section1';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('.section-intro') as NodeListOf<HTMLElement>;
    sections.forEach((section: HTMLElement) => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        this.currentSection = section.id;
      }
    });
  }

  scrollTo(section: string) {
    document.querySelector('#' + section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.currentSection = section;
  }
}
