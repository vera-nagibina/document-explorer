import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {TreeNode} from 'primeng/api';
import { Observable } from "rxjs";



@Injectable ()

export class TreeService {

    

    constructor(private http: HttpClient) {}

    getData(){
        
        return this.http.get('assets/tree.data.json'); 
                   
    }

    readFileAsync(files: any, type: string) {
        return new Promise <string>((resolve, reject) => {

            const reader = new FileReader();
                reader.onload = () => {
                resolve(reader.result + '');
              }

            if (type === '.txt') {        
              reader.readAsText(files);              
            }
            else {
              reader.readAsDataURL(files);
            }
              
        })
    }
    

    
    setDataToLocalStorage(files:TreeNode[]) {
        localStorage.setItem('files', JSON.stringify(files, ['label', 
        'expandedIcon', 'collapsedIcon', 'children', 'icon', 'data']));

    }

    getDataFromLocalStorage() {
        const f = localStorage.getItem('files');
        if (f !== null) {
            return JSON.parse(f);
        }

    }

    changeTheme(isDark: boolean){
        if (isDark) {
            document.documentElement.style.setProperty('--primary-color', '#212529');
            document.documentElement.style.setProperty('--primary-color-text', '#ffffff');
            document.documentElement.style.setProperty('--primary-color-button', '#44505c');
            document.documentElement.style.setProperty('--primary-color-header', '#343a40');
            return 'isDark';
        }
        else {
            document.documentElement.style.setProperty('--primary-color', '#f3f8ff');
            document.documentElement.style.setProperty('--primary-color-text', '#18181a');
            document.documentElement.style.setProperty('--primary-color-button', '#0d6efd');
            document.documentElement.style.setProperty('--primary-color-header', '#69a5fe');
            return 'isLight';
        }

       
    }  

    
    
}