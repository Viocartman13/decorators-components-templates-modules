import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyCustomModuleModule} from '../my-custom-module/my-custom-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyCustomModuleModule
  ]
})
export class MyCustomModule2Module {
}
