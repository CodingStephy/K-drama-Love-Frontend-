import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { SingleDramaComponent } from '../single-drama/single-drama.component';
import { KdramaService } from '../kdrama.service';
import { Show } from 'src/types';
import { MyListService } from '../mylist.service';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.sass']
})
export class MyListComponent implements OnInit {
  
  public isMenuCollapsed = true;
  kdsrv;
  mlsrv;
  id: number | null = null;
  route;
  shows: any= []
 
  router: Router;

  
  constructor(route: ActivatedRoute, router: Router, kdramaService: KdramaService, myListService: MyListService) {
    this.kdsrv = kdramaService
    this.mlsrv = myListService
    this.route = route
    this.router = router
    
    
   }

  ngOnInit(): void {
    // this.kdsrv.getShows(); 
    this.mlsrv.getShows()
      .subscribe(res=>{
        this.shows = res;

      }) 
     
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      const show = this.kdsrv.shows.find((s) => s[0].id == params.id);
      if(show[0]) {
        this.shows = show[0]
      }
    })
  }
  removeFromList(shows: any){
    this.mlsrv.removeFromList(shows)
  }  

}
