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

    

    
    
}