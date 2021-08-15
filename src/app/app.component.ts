import { Component, OnInit } from '@angular/core';
import { TreeService } from './tree-selection/tree.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'document-explorer';
  
  


  constructor(private treeService: TreeService) { }

  ngOnInit() {   

    

  }
} 
