import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService }  from '../product.service';

import { Product} from '../product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  url = 'https://static.zara.net/photos///2019/V/0/1/p/2240/661/756/3/w/1920/2240661756_1_1_1.jpg?ts=1551270868031'
  name = 'Тренч ОБЪЕМНОГО КРОЯ'
  cost = '149 990,00'
  description = 'Тренч с воротником с лацканами, длинными рукавами с хлястиками, накладными передними карманами, складкой сзади и застежкой на пуговицы спереди.'

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {

  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

}
