import { Component, inject, signal } from '@angular/core';
import { Links } from 'src/app/interfaces/links.interface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  private scrollService  = inject(UiService);

  public links = signal<Links[]>([
    {
      url:'about',
      value:'about'
    },
    {
      url:'experience',
      value:'experience'
    },
    {
      url:'work',
      value:'work'
    },
    {
      url:'contact',
      value:'Contact'
    }
  ])

  navigateToSection(sectionId: string,hrefId:string): void {
    this.scrollService.scrollToElement(sectionId,hrefId);
  }

}
