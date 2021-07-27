import { Component } from '@angular/core';
import { TreeService } from './tree-selection/tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'document-explorer';
  isDark: boolean = false;
  constructor(private treeService: TreeService) { }
  
  onChange() {

    this.isDark = !this.isDark;
    this.treeService.changeTheme(this.isDark);
    
    
  }
}
