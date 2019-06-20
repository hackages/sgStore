// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent, BsHeaderComponent } from './components';

// routing
import { RoutingModule } from './app.routing';

// Services
import { CustomPreloadingStrategy } from './services/custom.strategy';

@NgModule({
  imports: [BrowserModule, RoutingModule],
  declarations: [AppComponent, BsHeaderComponent],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {}
