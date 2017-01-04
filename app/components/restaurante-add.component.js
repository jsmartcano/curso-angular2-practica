System.register(["angular2/core", "angular2/router", "../services/restaurante.service", "../models/restaurante"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, restaurante_service_1, restaurante_1;
    var RestauranteAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            },
            function (restaurante_1_1) {
                restaurante_1 = restaurante_1_1;
            }],
        execute: function() {
            RestauranteAddComponent = (function () {
                function RestauranteAddComponent(_routeParams, _restaurantesService, _router) {
                    this._routeParams = _routeParams;
                    this._restaurantesService = _restaurantesService;
                    this._router = _router;
                }
                RestauranteAddComponent.prototype.ngOnInit = function () {
                    this.restaurante = new restaurante_1.Restaurante(0, this._routeParams.get("nombre"), this._routeParams.get("direccion"), this._routeParams.get("descripcion"), "null", this._routeParams.get("bajo"));
                    console.log("Componente RestauranteAdd cargado");
                };
                RestauranteAddComponent = __decorate([
                    core_1.Component({
                        selector: "restaurantes-add",
                        templateUrl: "app/view/restaurante-add.html",
                        providers: [restaurante_service_1.RestauranteService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, restaurante_service_1.RestauranteService, router_1.Router])
                ], RestauranteAddComponent);
                return RestauranteAddComponent;
            }());
            exports_1("RestauranteAddComponent", RestauranteAddComponent);
        }
    }
});
//# sourceMappingURL=restaurante-add.component.js.map