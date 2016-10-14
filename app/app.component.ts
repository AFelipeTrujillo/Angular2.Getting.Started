import { Component } from 'angular2/core';
import { ProductListComponent } from './product/product-list.component';

@Component({
    selector: 'pm-app',
    template: `<div>
        <h1>{{pageTitle}}</h1>
        <p>My First Component</p>
        <pm-products></pm-products>
    </div>`,
    directives : [ProductListComponent]
})

export class AppComponent{
    pageTitle: string = 'Acme Product Manager';
}