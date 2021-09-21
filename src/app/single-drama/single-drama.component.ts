import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import{KdramaService} from "../kdrama.service"
import {Show} from "../../types"
import { MyListService } from '../mylist.service';
@Component({
  selector: 'app-single-drama',
  templateUrl: './single-drama.component.html',
  styleUrls: ['./single-drama.component.sass']
})
export class SingleDramaComponent implements OnInit {
 
  public isMenuCollapsed = true;
  mlsrv;
  kdsrv;
  id: number | null = null;
  route;
  shows: Show ={
    image: "",
    actors: [{      
      name: "",
      photo: "",
    }],
    description: "",
    episode_numbers: "",
    genre: "",    
    release_year: "",
    streaming_platform: "",
    title: "",
    writer: "",
  }
 
  router: Router;


  constructor(route: ActivatedRoute, router: Router,
     kdramaService: KdramaService, myListService : MyListService) {
    this.kdsrv = kdramaService
    this.route = route
    this.router = router
    this.mlsrv = myListService    
   }
   mylist = []
   ngOnInit(): void {
    // this.kdsrv.getShows();    
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      const show = this.kdsrv.shows.find((s) => s[0].id == params.id);
      
      if(show[0]) {
        this.shows = show[0]
      }
    })
    
  }

  addToList(shows: any){
    this.mlsrv.addToList(shows)
    console.log('is it working?')
  }

    // handleAddToList(): void{
    //   this.kdsrv.addToList(this.shows.id).subscribe(()=> {
    //       console.log('it works!')
    //   })
    // }

    // handleRemoveFromList(){
    //   let item = {
    //     kdsrvId?: this.id
    //   }
    //   this.kdsrv.removeFromList(item).subscribe()
    // }

}

