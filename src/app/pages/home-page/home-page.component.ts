import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
  Renderer2,
  inject,
  AfterViewInit,
  signal,
  computed,
  OnInit,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RepositorioResponse } from '../../interfaces/repositorios,interface';
import { UiService } from 'src/app/services/ui.service';
import * as AOS from "aos";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit , OnInit{


  private cd             = inject(ChangeDetectorRef);
  private responsive     = inject(BreakpointObserver);
  private _uiService     = inject(UiService);

  public navBar = signal<boolean>(true);
  public footer = computed(() => this.navBar());
  public navbarfixed = signal<boolean>(false);
  public dataNavBar?: boolean;


  @ViewChildren('single') private singleNamesRef!: QueryList<ElementRef>;


  constructor(){}

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    this._MediaQueries();
    this.cd.detectChanges();


  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    window.scrollY > 100
      ? this.navbarfixed.set(true)
      : this.navbarfixed.set(false);
  }

  buttonMenuWasClicked(dataFromChild: boolean) {
    this.dataNavBar = dataFromChild;
    this._uiService.dataNavBar(this.dataNavBar,this.singleNamesRef);
  }

  private _MediaQueries(): void {
    this.responsive
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.navBar.set(true);
        }

        breakpoints[Breakpoints.HandsetPortrait]
          ? this.navBar.set(false)
          : this.navBar.set(true);
      });
  }






}
