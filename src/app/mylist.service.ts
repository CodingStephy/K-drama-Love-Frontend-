import { Injectable } from '@angular/core';
import {Show} from "../types"
import { SingleDramaComponent } from './single-drama/single-drama.component';
@Injectable({
  providedIn: 'root'
})
export class myListService {
    items: SingleDramaComponent[] = []
    addToList(SingleDramaComponent: SingleDramaComponent) {
      this.items.push(SingleDramaComponent)
    }
  
    getItems(){
      return this.items
    }
  
    clearList(){
      this.items = []
      return this.items
    }
  
}
