import { style } from '@angular/animations';
import { ElementRef, Injectable, QueryList, Renderer2, ViewChildren, inject, RendererFactory2, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {


  private renderizar:Renderer2;




  constructor(rendererFactory: RendererFactory2) {
    this.renderizar = rendererFactory.createRenderer(null, null);

 }


  scrollToElement(elementId: string,hrefId:string): void {

    const element = document.getElementById(elementId);
    const href    = document.getElementById('section-'+ hrefId);
    const localStorageActive = localStorage.getItem('linkActive');

    localStorage.setItem('linkActive',`section-${hrefId}`);

    if (element) {
      href!.classList.add('a-active');
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if(localStorageActive != (`section-${hrefId}`)){
      document.getElementById(`${localStorageActive}`)?.classList.remove('a-active');
    }


  }

  scrollToElementNavBarMovil(elementId: string,hrefId:string,activeNavBar:boolean) {

    const element = document.getElementById(elementId);
    const href    = document.getElementById('section-'+ hrefId);
    const localStorageActive = localStorage.getItem('linkActive');
    const sidebar=document.querySelector(".sidebar");
    const single = document.getElementById('single');
    const btn_hamburguer = document.getElementById('btn-hamburguer');

    localStorage.setItem('linkActive',`section-${hrefId}`);

    if (element) {
      href!.classList.add('a-active');
      element.scrollIntoView({ behavior: 'smooth' });

      single?.removeAttribute('style');
      btn_hamburguer?.classList.remove('active');
      sidebar?.classList.remove("show");
      sidebar?.classList.add("hide");
      document.body.style.overflow = 'auto';

    }

    if(localStorageActive != (`section-${hrefId}`)){
      document.getElementById(`${localStorageActive}`)?.classList.remove('a-active');
    }

    return { active: !activeNavBar }
  }


  dataNavBar(dataNavBar:boolean,singleNamesRef:QueryList<ElementRef>):void{

    if (dataNavBar) {
      singleNamesRef.forEach((element) => {

        this.renderizar.setStyle(element.nativeElement, 'filter', 'blur(5px)');
      });
      document.body.style.overflow = 'hidden';
    }

    if (!dataNavBar) {
      singleNamesRef.forEach((element) => {
        this.renderizar.removeStyle(element.nativeElement, 'filter');
      });

      document.body.style.overflow = 'auto';
    }

  }

}
