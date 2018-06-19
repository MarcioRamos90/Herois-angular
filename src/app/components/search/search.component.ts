import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "../../services/heroes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  heroes: Heroe[];
  termino: string;

  constructor(
    private heroisService: HeroesService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(res => {
      this.termino = res["termino"];
      this.heroes = this.heroisService.buscarHeroe(res["termino"]);
      console.log(this.heroes);
      return false;
    });
  }

  verHeroe(index) {
    this.router.navigate(["/heroe", this.heroes[index].index]);
  }
}
