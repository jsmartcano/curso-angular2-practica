import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestaurantesListComponent} from "./components/restaurantes-list.component";

@Component({
	selector: "mi-app",
	templateUrl: "app/view/home.html",
	directives:[ROUTER_DIRECTIVES, RestaurantesListComponent]
})

export class AppComponent {
	public titulo = "Registros 2";


}
