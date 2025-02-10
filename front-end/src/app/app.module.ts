import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: false,
      onSameUrlNavigation : "reload",
      
     }), // Hash-based routing enabled
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

