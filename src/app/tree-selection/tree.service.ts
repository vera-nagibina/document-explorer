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

    changeTheme(isDark: boolean){
        if (isDark) {
            document.documentElement.style.setProperty('--primary-color', '#212529');
            document.documentElement.style.setProperty('--primary-color-text', '#ffffff');
            document.documentElement.style.setProperty('--primary-color-button', '#3bd4f3');
            document.documentElement.style.setProperty('--primary-color-header', '#343a40');
        }
        else {
            document.documentElement.style.setProperty('--primary-color', '#f3f8ff');
            document.documentElement.style.setProperty('--primary-color-text', '#18181a');
            document.documentElement.style.setProperty('--primary-color-button', '#0d6efd');
            document.documentElement.style.setProperty('--primary-color-header', '#69a5fe');
        }

       
    }

    

    
    
}