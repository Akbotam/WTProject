import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  name = 'Тренч ОБЪЕМНОГО КРОЯ'
  cost = '149 990,00'
  description = 'Тренч с воротником с лацканами, длинными рукавами с хлястиками, накладными передними карманами, складкой сзади и застежкой на пуговицы спереди.'
  constructor() { }

  ngOnInit() {
  }

}
