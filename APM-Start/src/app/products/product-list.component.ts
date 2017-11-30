import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

import { ProductService } from './product.service';
import { error } from 'util';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;

    errorMessage: string;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filterProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filterProducts: IProduct[];
    products: IProduct[] = []; 

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this._productService.getProducts()
                    .subscribe(
                        products => {
                            this.products = products;
                            this.filterProducts = this.products;
                            //this.listFilter = 'cart';
                        },
                        error => this.errorMessage = <any>error);
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    toogleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}