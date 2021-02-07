import { Component, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TOGGLE_MENU } from './reducers/menu-reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOpen: boolean;
  constructor(
    private store: Store<any>,
  ) {
    store.pipe(select('menu'))
      .subscribe(menuOpen => {
        this.menuOpen = menuOpen;
      })
  }
  @HostListener('document:click', ['$event'])
  public onClick(event) {
    const isOutside = !event.target.className.includes("menu-button") &&
      !event.target.className.includes("material-icons") &&
      !event.target.className.includes("mat-drawer-inner-container")
    if (isOutside) {
      this.menuOpen = false;
      this.store.dispatch({ type: TOGGLE_MENU, payload: this.menuOpen });
    }
  }
}
