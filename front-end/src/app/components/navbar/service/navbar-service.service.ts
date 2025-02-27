import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {
  private sidenavCollapsed  = new BehaviorSubject<boolean>(false);

  sidenavCollapsed$ = this.sidenavCollapsed.asObservable();

  toggleSidenav(){
    this.sidenavCollapsed.next(!this.sidenavCollapsed.value)
  }
}
