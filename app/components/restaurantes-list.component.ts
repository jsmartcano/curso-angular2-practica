import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";


@Component({
	selector: "restaurantes-list",
	templateUrl: "app/view/restaurantes-list.html",
	providers: [RestauranteService],
	directives: [ROUTER_DIRECTIVES]
})

export class RestaurantesListComponent implements OnInit{
	public titulo = "Listado de restaurantes";
	public restaurantes: Restaurante[];
	public status: string;
	public errorMessage: any;

	constructor(private _restaurantesService: RestauranteService){}

	ngOnInit() {		
		console.log("restaurantes-list component cargado");
		this.getRestaurantes();
	}

	getRestaurantes() {
		let box_restaurantes = <HTMLElement>document.querySelector("restaurantes-list .loading");
		box_restaurantes.style.visibility = "visible";

		this._restaurantesService.getRestaurantes()
						.subscribe(
							result => {
								this.restaurantes = result.data;
								this.status = result.status;

								if (this.status !== "success") {
									alert("Error en el servidor");
								}
								box_restaurantes.style.display = "none";
		
							},

							error => {
								this.errorMessage = <any>error;
								if (this.errorMessage !== null) {
									console.log(this.errorMessage);
									alert("Error en la petición");
								}
							}
						);
	}
}
