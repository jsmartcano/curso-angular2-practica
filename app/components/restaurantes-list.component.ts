import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
	selector: "restaurantes-list",
	templateUrl: "app/view/restaurantes-list.html"	
})

export class RestaurantesListComponent {
	public titulo = "Listado de restaurantes";
}
