import { Injectable } from '@angular/core';
import {Show} from "../types"
@Injectable({
  providedIn: 'root'
})
export class KdramaService {
  url = 'https://myappchk.herokuapp.com/show'
  url1= 'https://myappchk.herokuapp.com/signup'
  url2= 'https://myappchk.herokuapp.com/login'

  shows: Array<Show> = [];
  constructor() { 
    this.getShows()
  }
  async getShows(){
    const response = await fetch(this.url);
    const data = await response.json();
    this.shows = data
    return data
  }
}
