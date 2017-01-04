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

	public restaurante: Restaurante;
	public errorMessage: string;
	public status: string;

	constructor(
		private _routeParams: RouteParams,
		private _restaurantesService: RestauranteService		
	) {}

	ngOnInit() {
		
		this.getRestaurante();
	}

	getRestaurante() {
		
		let id = this._routeParams.get("id");
		
		this._restaurantesService.getRestaurante(id)
						.subscribe(
							result => {
								this.restaurante = result.data;
								this.status = result.status;

								if (this.status !== "success") {
									alert("Error en el servidor");
								}
										
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