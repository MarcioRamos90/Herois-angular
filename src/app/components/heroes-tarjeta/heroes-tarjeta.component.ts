import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes-tarjeta",
  templateUrl: "./heroes-tarjeta.component.html",
  styleUrls: ["./heroes-tarjeta.component.css"]
})
export class HeroesTarjetaComponent implements OnInit {
  @Input() heroe: any;
  @Input() index: number;

  @Output() HeroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.HeroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  verHeroe() {
    // this.router.navigate(["heroe", this.index]);
    this.HeroeSeleccionado.emit(this.index);
  }
}
