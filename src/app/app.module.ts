import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TreeModule} from 'primeng/tree';
import { TreeSelectionComponent } from './tree-selection/tree-selection.component';
import {HttpClientModule} from '@angular/common/http';
import {FileUploadModule} from 'primeng/fileupload';
import {EditorModule} from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    TreeSelectionComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    TreeModule,
    HttpClientModule,
    FileUploadModule,
    EditorModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
