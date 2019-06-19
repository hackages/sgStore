import { HttpClientModule } from '@angular/common/http';
// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent, BsHeaderComponent } from './components';

// routing
import { routes, CustomPreloadingStrategy } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy
    })
  ],
  declarations: [AppComponent, BsHeaderComponent],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {}
