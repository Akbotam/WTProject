import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService }  from '../product.service';

import { Product } from '../product';
import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
    this.getClothes();
  }

  clothes = []

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { 
    route.params.subscribe(val => {
      this.getClothes();
    });
  }

  ngOnInit() {
    this.getClothes();
  }

  getClothes():void{
    const category = +this.route.snapshot.paramMap.get('category');
    if(category===0){
      this.productService.getProducts().subscribe(product => this.clothes = product);
    } 
    else{
      this.productService.getProductsByCategory(category)
      .subscribe(product => this.clothes = product);
    }
    
  }

}
