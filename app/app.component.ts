import { Component } from 'angular2/core';
import { ProductListComponent } from './product/product-list.component';
import { ProductService } from './product/product.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './product/product-detail.component';
import 'rxjs/Rx';

@Component({
    selector: 'pm-app',
    template: 
    `<div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink] = "['Welcome']">Home</a></li>
                    <li><a [routerLink] = "['Products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>`,
    directives : [ROUTER_DIRECTIVES],
    providers: [ProductService,HTTP_PROVIDERS,ROUTER_PROVIDERS]
})

@RouteConfig([
    {path : '/welcome' , name : 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path : '/product', name : 'Products', component: ProductListComponent},
    {path : '/product/:id' , name : 'ProductDetail', component : ProductDetailComponent}
])

export class AppComponent{
    pageTitle: string = 'Acme Product Manager';
}