import { Component, Input, inject } from '@angular/core';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'shared-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.css']
})
export class ButtonActionComponent {

  @Input() action!:string;
  @Input() destination!:string;


  private UiService:UiService = inject(UiService);

  onSection(){
 this.UiService.scrollToElement('work','work')
  }

}
