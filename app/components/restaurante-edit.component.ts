import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";


@Component({
	selector: "restaurantes-edit",
	templateUrl: "app/view/restaurante-add.html",
	providers: [RestauranteService]
})

export class RestauranteEditComponent implements OnInit{
	public titulo = "Editar restaurante";
	public restaurante: Restaurante;
	public errorMessage: string;
	public status: string;

	public filesToUpload: Array<File>;
	public resultUpload;

	constructor(
		private _routeParams: RouteParams,
		private _restaurantesService: RestauranteService,
		private _router: Router
	) {}

	


	onSubmit() {
		this._restaurantesService.editRestaurante(this.restaurante).subscribe(
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

	getRestaurante() {
			let id = this._routeParams.get("id");
		
		this._restaurantesService.getRestaurante(id)
						.subscribe(
							result => {
								this.restaurante = result.data;
								this.status = result.status;

								if (this.status !== "success") {
									//alert("Error en el servidor");
									this._router.navigate(["Home"]);
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

	ngOnInit() {
		this.restaurante = new Restaurante(
			parseInt(this._routeParams.get("id")),
			this._routeParams.get("nombre"),
			this._routeParams.get("direccion"),
			this._routeParams.get("descripcion"),
			"null",
			this._routeParams.get("precio")
			);
		this.getRestaurante();		
	}

	fileChangeEvent(fileInput: any) {
		this.filesToUpload = <Array<File>>fileInput.target.files;
		this.makeFileRequest("http://133.100.1.180:81/curso-angular2-practica/api-rest/restaurantes-api.php/upload-file",[], this.filesToUpload)
			.then(
				(result) => {
					this.resultUpload = result;
					this.restaurante.imagen = this.resultUpload.filename;
					console.log(this.resultUpload.filename);
				},
				(error) => {
					console.log(error);
				}
			);
	}



	makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
		return new Promise((resolve,reject) => {

			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for (var i=0; i < files.length; i++) {
				formData.append("uploads[]", files[i], files[i].name);
			}

			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			}
			xhr.open("POST", url, true);
			xhr.send(formData);

		});

		
	}
}