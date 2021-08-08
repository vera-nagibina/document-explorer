import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TreeModule} from 'primeng/tree';
import {TreeSelectionComponent} from './tree-selection/tree-selection.component';
import {HttpClientModule} from '@angular/common/http';
import {EditorModule} from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TreeService} from './tree-selection/tree.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [
    AppComponent,
    TreeSelectionComponent   
  ],
  imports: [
    BrowserModule,
    TreeModule,
    HttpClientModule,    
    EditorModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule    
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
