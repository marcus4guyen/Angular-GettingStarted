import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');

    this._productService.getProduct(id)
        .subscribe((product: IProduct) => {
          this.product = product;
        });
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
