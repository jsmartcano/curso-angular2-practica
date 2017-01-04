import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";


@Component({
	selector: "restaurantes-detail",
	templateUrl: "app/view/restaurante-detail.html",
	providers: [RestauranteService]
})

export class RestauranteDetailComponent implements OnInit{

	private parametro: string

	constructor(
		private _routeParams: RouteParams,
		private _restaurantesService: RestauranteService
	) {}

	ngOnInit() {

		this.parametro = this._routeParams.get("id");
		//this.getRestaurante()
	}

	/*getRestaurante() {
		
		
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
	}*/
}