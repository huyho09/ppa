import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/**
 * Service to manage the state of the sidenav
 */
@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {
  private sidenavCollapsed  = new BehaviorSubject<boolean>(false);
  /**
   * Toggles the collapsed state of the sidenav
   */

  sidenavCollapsed$ = this.sidenavCollapsed.asObservable();

  toggleSidenav(){
    this.sidenavCollapsed.next(!this.sidenavCollapsed.value)
  }
}
