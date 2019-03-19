import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  clothes = [
    {
      url: "https://static.zara.net/photos///2019/V/0/1/p/8372/034/704/2/w/560/8372034704_2_1_1.jpg?ts=1550575015487",
      name: "Тренч цвета карамель",

    },
    {
      url: "https://static.zara.net/photos///2019/V/0/1/p/8531/744/756/2/w/560/8531744756_2_2_1.jpg?ts=1546593984005",
      name: "Стильное пальто",

    },
    {
      url: "https://static.zara.net/photos///2019/V/0/1/p/2731/043/305/2/w/560/2731043305_2_4_1.jpg?ts=1552584631176",
      name: "Длинное льняное пальто",

    },
    {
      url: "https://static.zara.net/photos///2019/V/0/1/p/0518/055/506/2/w/560/0518055506_1_1_1.jpg?ts=1552581687839",
      name: "Длинный тренч",

    },
    {
      url: "https://static.zara.net/photos///2019/V/0/1/p/2601/830/330/2/w/560/2601830330_1_1_1.jpg?ts=1552562746508",
      name: "Текстурированный длинный жилет",

    },
    {
      url: "https://static.zara.net/photos///2018/I/0/1/p/3046/256/505/2/w/560/3046256505_1_1_1.jpg?ts=1535706983552",
      name: "Плащ цвета хаки",

    },
    {
      url: "https://static.zara.net/photos///2019/V/0/1/p/2411/727/708/2/w/560/2411727708_2_4_1.jpg?ts=1552584258830",
      name: "Карамельное пальто с ремнем",

    },
    {
      url: "https://static.zara.net/photos///2019/V/0/1/p/2222/649/251/2/w/560/2222649251_2_3_1.jpg?ts=1551861537048",
      name: "Длинное белое",

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
