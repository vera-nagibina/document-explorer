import { Component, OnInit } from '@angular/core';


import {TreeNode} from 'primeng/api';
import { TreeService } from './tree.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-tree-selection',
  templateUrl: './tree-selection.component.html',
  styleUrls: ['./tree-selection.component.scss'],
  
})
export class TreeSelectionComponent implements OnInit {

  files: TreeNode[] = [];
  selectedFile: TreeNode = {};
  imageUrl: string = '';
  text: string = '';
  docType: boolean = false;
  imageType: boolean = false;
  items: MenuItem[] = [];
  isDark: boolean = false;

  constructor(private treeService: TreeService) { }

  ngOnInit(): void { 

    this.items = [
      {
        label: 'New', 
        icon: 'pi pi-fw pi-plus',
        items: [
            {label: 'Document',
            icon: 'pi pi-file',
            command: (event) => this.inputFiles('document')
            },
            {label: 'Picture',
            icon: 'pi pi-image',
            command: (event) => this.inputFiles('picture')
          },
            {label: 'Graphic',
            icon: 'pi pi-chart-line',
            command: (event) => this.inputFiles('graphic')
          }
        ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash',
              command: (event) => this.deleteFiles()
              }              
          ]
      }
  ];

    if (localStorage.getItem('theme') === 'isDark') {
      this.isDark = true; 
      this.treeService.changeTheme(this.isDark);          
    }
 
    if (this.treeService.getDataFromLocalStorage()) {
      this.files =this.treeService.getDataFromLocalStorage();
    }
    else this.treeService.getData().subscribe((data) => this.files = data as TreeNode[]); 
    
  } 
  
  inputFiles(type: string) {
    const input = document.createElement('input');
    input.type = 'file';
    if (type === 'document') input.accept = '.txt';
    else input.accept = 'image/jpeg, image/png';
    input.click();
    input.addEventListener("change", ($event) => this.uploadFiles($event, type), false);
  }

  async uploadFiles(event: any, type: string) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {

      const file = {
        label: '',
        icon: '',
        data: ''          
      }      
      file.data = await this.treeService.readFileAsync(files[i], type);     
      file.label = files[i].name;   
      if (type === 'document') {
        file.icon = 'pi pi-file';
        this.files[0].children?.push(file);
      }          
      else if (type === 'picture') {
        file.icon = 'pi pi-image';
        this.files[1].children?.push(file);
      }
      else {
        file.icon = 'pi pi-chart-line';
        this.files[2].children?.push(file);
      }
               
    }
    
    this.treeService.setDataToLocalStorage(this.files);    
  }  

  selectFiles() {
   
    if (this.selectedFile.icon === 'pi pi-image' || this.selectedFile.icon === 'pi pi-chart-line') {
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

  onChange() {

    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.treeService.changeTheme(this.isDark));    
  }

   
}
