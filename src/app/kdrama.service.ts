import { Injectable } from '@angular/core';
import {Show} from "../types"
@Injectable({
  providedIn: 'root'
})
export class KdramaService {
  url = 'https://myappchk.herokuapp.com/show'
  url1= 'https://myappchk.herokuapp.com/signup'
  url2= 'https://myappchk.herokuapp.com/login'
  // Array<Array<Show>>
  shows: Array<any> = [];
  myDramaList: any = [];
  constructor() { 
    this.getShows()
    
  }
  async getShows(){
    const response = await fetch(this.url);
    const data = await response.json();
    this.shows = data
    return data
    
  }
  setDrama(shows : any){
    this.myDramaList.push(...shows)
    // this.shows.next(this.myDramaList)
  }
  addToList(shows : any) {
   this.myDramaList.push(shows)
  }

 

  removeFromList(shows: any){
   this.myDramaList.map((a: any, index: any)=>{
     if(shows.id === a.id ){
       this. myDramaList.splice(index,1)
     }
   })
  }
}
