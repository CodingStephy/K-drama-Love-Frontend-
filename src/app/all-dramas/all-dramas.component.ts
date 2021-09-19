import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import{KdramaService} from "../kdrama.service"
import {Show} from "../../types"

@Component({
  selector: 'app-all-dramas',
  templateUrl: './all-dramas.component.html',
  styleUrls: ['./all-dramas.component.sass']
})
export class AllDramasComponent implements OnInit {
  kdsrv: KdramaService;
  id: number | null = null;
  route;
  // shows: Show ={
  //   image: "",
  //   actors: [{      
  //     name: "",
  //     photo: "",
  //   }],
  //   description: "",
  //   episode_numbers: "",
  //   genre: "",    
  //   release_year: "",
  //   streaming_platform: "",
  //   title: "",
  //   writer: "",
  // }


  router: Router;

  constructor(route: ActivatedRoute, router: Router, kdramaService: KdramaService) {
    this.kdsrv = kdramaService
    this.route = route
    this.router = router
   }
    

  ngOnInit(): void {
    this.kdsrv.getShows();
    // this.route.params.subscribe((params) => {
    //   this.id = params['id'];
    //   const show = this.kdsrv.shows.find((s) => s.id == params.id);
    //   if(show) {
    //     this.shows = show
    //   }
    // })
  }

}
