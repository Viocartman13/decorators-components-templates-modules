import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyCustomComponentComponent} from './my-custom-component/my-custom-component.component';


@NgModule({
  declarations: [
    MyCustomComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyCustomComponentComponent
  ]
})
export class MyCustomModuleModule {
}
