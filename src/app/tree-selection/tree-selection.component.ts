import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import {TreeNode} from 'primeng/api';



@Component({
  selector: 'app-tree-selection',
  templateUrl: './tree-selection.component.html',
  styleUrls: ['./tree-selection.component.scss'],
  
})
export class TreeSelectionComponent implements OnInit {



  files: TreeNode[] = [
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
editing: boolean = false;


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
      this.selectedFile.parent?.children?.push(file);
      
    }
    
  }

  selectFiles() {
    if (this.selectedFile.label === 'Documents' || this.selectedFile.icon === 'pi pi-file') {
      this.type = '.txt';
    }
    else if (this.selectedFile.label === 'Pictures' || this.selectedFile.icon === 'pi pi-image') {
      this.type = 'image/jpeg, image/png';
    }
    else if (this.selectedFile.label === 'Graphics' || this.selectedFile.icon === 'pi pi-image') {
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

  deleteFiles() {

    
      for (let i = 0; i < this.files.length; i++) {
        let index = this.files[i].children?.findIndex(item => item.label === this.selectedFile.label);
        if (index != undefined && index > -1) {
          this.files[i].children?.splice(index,1);
        }
      }

      
         
        
      
      
    
    
  }

  
  
 
}
