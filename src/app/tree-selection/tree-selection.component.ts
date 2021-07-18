import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import {TreeNode} from 'primeng/api';



@Component({
  selector: 'app-tree-selection',
  templateUrl: './tree-selection.component.html',
  styleUrls: ['./tree-selection.component.scss'],
  
})
export class TreeSelectionComponent implements OnInit {



  pictures: TreeNode[] = [
    {
      label: 'Documents',
      data: 'Documents Folder',
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: []
  },
     {
        label: 'Pictures',
        data: 'Pictures Folder',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: []
    },
    
  {
    label: 'Graphics',
    data: 'Documents Folder',
    expandedIcon: 'pi pi-folder-open',
    collapsedIcon: 'pi pi-folder',
    children: []
}
  ];


selectedFile: TreeNode = {};
uploadedFiles: any[] = [];
type: string = '';
imageUrl: string = '';
text: string = '';
docType: boolean = false;
imageType: boolean = false;


  constructor() { }

  ngOnInit(): void {

    
    
    
  }
  uploadFiles(event: any) {
    const files = event.target.files;
 
    for (let i = 0; i < files.length; i++) {
      const file = {
        label: '',
        icon: '',
        data: {} 
        
              
      }
      file.label = files[i].name;
      
      file.data = files[i];
   
      if (this.type === '.txt') {
        file.icon = 'pi pi-file';
      }
      else file.icon = 'pi pi-image';
    
      this.selectedFile.children?.push(file);
      
    }
    
  }

  selectFiles() {
    if (this.selectedFile.label === "Documents") {
      this.type = '.txt';
    }
    else {
      this.type = 'image/jpeg, image/png';
    }
    if (this.selectedFile.icon === 'pi pi-image') {
      this.imageType = true;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result + '';
      }
      reader.readAsDataURL(this.selectedFile.data);

    }
    else this.imageType = false;

    if (this.selectedFile.icon === 'pi pi-file') {
      this.docType = true;
      const reader = new FileReader();
      reader.onload = () => {
        this.text = reader.result + '';
      }
      reader.readAsText(this.selectedFile.data);
    }
    else this.docType = false;

    
    
  }
  
 
}
