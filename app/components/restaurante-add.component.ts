import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";


@Component({
	selector: "restaurantes-add",
	templateUrl: "app/view/restaurante-add.html",
	providers: [RestauranteService]
})

export class RestauranteAddComponent implements OnInit{

	public restaurante: Restaurante;
	public errorMessage: string;
	public status: string;

	constructor(
		private _routeParams: RouteParams,
		private _restaurantesService: RestauranteService,
		private _router: Router
	) {}

	ngOnInit() {
		this.restaurante = new Restaurante(
			0,
			this._routeParams.get("nombre"),
			this._routeParams.get("direccion"),
			this._routeParams.get("descripcion"),
			"null",
			"bajo"
			);
		console.log("Componente RestauranteAdd cargado");		
	}


	onSubmit() {
		this._restaurantesService.addRestaurante(this.restaurante).subscribe(
			response => {
				this.status = response.status;
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
		this._router.navigate(["Home"]);
	}
}