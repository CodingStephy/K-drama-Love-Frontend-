import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import{KdramaService} from "../kdrama.service"
import {Show} from "../../types"
import { myListService } from '../mylist.service';
@Component({
  selector: 'app-single-drama',
  templateUrl: './single-drama.component.html',
  styleUrls: ['./single-drama.component.sass']
})
export class SingleDramaComponent implements OnInit {
 
  public isMenuCollapsed = true;
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


  constructor(route: ActivatedRoute, router: Router, kdramaService: KdramaService, myListService : myListService) {
    this.kdsrv = kdramaService
    this.route = route
    this.router = router
   }
   addToList(){
    myListService.addToList()
  }
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

}

