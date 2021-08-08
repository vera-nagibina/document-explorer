import { Component, OnInit } from '@angular/core';


import {TreeNode} from 'primeng/api';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-tree-selection',
  templateUrl: './tree-selection.component.html',
  styleUrls: ['./tree-selection.component.scss'],
  
})
export class TreeSelectionComponent implements OnInit {

  files: TreeNode[] = [];
  selectedFile: TreeNode = {};
  type: string = '';
  imageUrl: string = '';
  text: string = '';
  docType: boolean = false;
  imageType: boolean = false;
  editing: boolean = false;
     

  constructor(private treeService: TreeService) { }

  ngOnInit(): void { 
 
    if (this.treeService.getDataFromLocalStorage()) {
      this.files =this.treeService.getDataFromLocalStorage();
    }
    else this.treeService.getData().subscribe((data) => this.files = data as TreeNode[]);   
    
    this.selectedFile = this.files[0];
  }  

  async uploadFiles(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {

      const file = {
        label: '',
        icon: '',
        data: ''          
      }      
      file.data = await this.treeService.readFileAsync(files[i], this.type);     
      file.label = files[i].name;   
      if (this.type === '.txt') {file.icon = 'pi pi-file';}          
      else {file.icon = 'pi pi-image';}
      
      this.selectedFile.children?.push(file);
      this.selectedFile.parent?.children?.push(file);     
    }
    
    this.treeService.setDataToLocalStorage(this.files);    
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
      this.imageUrl = this.selectedFile.data;

    }
    else this.imageType = false;

    if (this.selectedFile.icon === 'pi pi-file') {
      this.docType = true;
      this.text = this.selectedFile.data;
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
      this.treeService.setDataToLocalStorage(this.files);         
    
  }
   
}
