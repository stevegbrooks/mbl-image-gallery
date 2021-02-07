import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TOGGLE_MENU } from '../reducers/menu-reducer';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  menuOpen: boolean;
  constructor(
    private store: Store<any>
  ) {
    store.pipe(select('menu'))
      .subscribe(menuOpen => {
        this.menuOpen = menuOpen;
      })
  }
  ngOnInit() {
  }
  toggleMenu() {
    this.store.dispatch({ type: TOGGLE_MENU, payload: !this.menuOpen    });
  }
}
