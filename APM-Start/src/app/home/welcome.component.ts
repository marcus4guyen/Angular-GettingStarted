import { Component } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
