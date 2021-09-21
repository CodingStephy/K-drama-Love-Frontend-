import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyListService {
    myDramaList: any =[]
    showList = new BehaviorSubject<any>([])

    constructor(){

    }
    getShows(){
       return this.showList.asObservable()
    }
    setShow(show: any){
        this.myDramaList.push(...show)
        this.showList.next(show)
    }
    addToList(show: any){
        this.myDramaList.push(show)
        this.showList.next(this.myDramaList)
        console.log(this.myDramaList )
    }
    removeFromList(show: any){
        this.myDramaList.map((a: any, index: any) =>{
            if(show.id === a.id){
                this.myDramaList.splice(index, 1)
            }
        })
    }
}
