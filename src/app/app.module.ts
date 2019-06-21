import { AuthModule } from './AuthModule/auth.module';
// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent, BsHeaderComponent } from './components';

// routing
import { RoutingModule } from './app.routing';

// Services
import { CustomPreloadingStrategy } from './services/custom.strategy';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [BrowserModule, RoutingModule, StoreModule.forRoot({})],
  declarations: [AppComponent, BsHeaderComponent],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {}
