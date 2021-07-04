import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MyCustomComponentSecondComponent} from './my-custom-module-2/my-custom-component-second/my-custom-component-second.component';
import {MyCustomModuleModule} from './my-custom-module/my-custom-module.module';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomComponentSecondComponent
  ],
  imports: [
    BrowserModule,
    MyCustomModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
