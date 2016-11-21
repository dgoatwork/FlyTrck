import { Component} from '@angular/core';

@Component({
  selector:'header-menu',
  templateUrl :'./header-menu.component.html',
  styleUrls: ['./header-menu.component.less']
})
export class HeaderMenuComponent{
  private _menuVisible : boolean = false;
  constructor(){

  }
  toggleMenu(){
    this._menuVisible = !this._menuVisible;
  }
}
