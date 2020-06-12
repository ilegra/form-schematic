import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { ExampleRoutingModule } from './example-routing.module';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
