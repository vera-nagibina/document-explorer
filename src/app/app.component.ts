import { Component, OnInit } from '@angular/core';
import { TreeService } from './tree-selection/tree.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'document-explorer';
  isDark: boolean = false;
  


  constructor(private treeService: TreeService) { }

  ngOnInit() {   

    if (localStorage.getItem('theme') === 'isDark') {
      this.isDark = true; 
      this.treeService.changeTheme(this.isDark);          
    }

  }
  
  onChange() {

    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.treeService.changeTheme(this.isDark));    
  }
}
