import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    SidenavComponent,
  ],
  exports: [
    SidenavComponent,
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule
  ]
})
export class SharedModule { }
