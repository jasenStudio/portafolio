import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild, inject, signal } from '@angular/core';
import { Links } from 'src/app/interfaces/links.interface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'shared-nav-bar-movil',
  templateUrl: './nav-bar-movil.component.html',
  styleUrls: ['./nav-bar-movil.component.css']
})
export class NavBarMovilComponent {

  @ViewChild('ulLink') listUl?:ElementRef;



  @Output() toogleValue = new EventEmitter<boolean>();


  public toggleNavBarSide= signal<boolean>(false);
  public activeNavBar:boolean = false;
  public activeBtn = signal<boolean>(false);


  constructor( private renderer2:Renderer2){

  }

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


  @Output() toggleWasClicked = new EventEmitter<boolean>();

  toggleNavBar(e:Event):void {

    this.activeNavBar = !this.activeNavBar;

    this.toggleWasClicked.emit(this.activeNavBar);

    if( this.activeNavBar ){

      e.preventDefault();
      let  sidebar=document.querySelector(".sidebar");
      sidebar?.classList.remove("hide");
      sidebar?.classList.add("show");
    }


    if(! this.activeNavBar ){
      e.preventDefault();
      let sidebar=document.querySelector(".sidebar");
      sidebar?.classList.remove("show");
      sidebar?.classList.add("hide");
    }


  }

  navigateToSection(sectionId: string,hrefId:string): void {
    const { active } = this.scrollService.scrollToElementNavBarMovil(sectionId,hrefId,this.activeNavBar);

    this.activeNavBar = active;
  }

}
