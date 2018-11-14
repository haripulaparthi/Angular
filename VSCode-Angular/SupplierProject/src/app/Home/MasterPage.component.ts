import { Component, Injector } from '@angular/core';
import { Logger } from '../Utility/Utility.Logger';

@Component({
  selector: 'app-root',
  templateUrl: './MasterPage.view.html'
})
export class MasterPageComponent {
  title = 'Supplier Project';
  _logger:Logger = null; 
  constructor(_injector:Injector){
    this._logger = _injector.get('F');
  }
}

 