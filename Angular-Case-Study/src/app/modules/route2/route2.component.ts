import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {
  products = [
    {
      name: 'Headphone',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      price: 3999
    },
    {
      name: 'Bottles',
      image: 'https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png',
      price: 500
    },
    {
      name: 'Watch',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      price: 4999
    },
    {
      name: 'Camera',
      image: 'https://images.pexels.com/photos/7206225/pexels-photo-7206225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 45999
    },
    {
      name: 'Loation',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg',
      price: 5999
    },
    {
      name: 'Laptop',
      image: 'https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=500&format=pjpg&exif=1&iptc=1',
      price: 99999
    },
    {
      name: 'Iphone',
      image: 'https://www.volusion.com/blog/content/images/2021/07/Product-Photos.jpg',
      price: 74999
    },
    {
      name: 'Shoes',
      image: 'http://img1a.flixcart.com/fk-sp-static/21072015/blue-24744-yepme-8-400x400-imadqtjww8cwpthg.jpeg',
      price: 3999
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.filter()
  }

  changeView(view: 'list' | 'grid') {
    let mainDiv = document.getElementById('cards')
    let cards = document.querySelectorAll('#eachCard')
    let cardsArray = Array.from(cards)
    if(view == 'list') {
      mainDiv?.classList.add('cards-list-view')
      for (const each of cardsArray) {
        each.classList.add('list-view')
      }
    } else {
      mainDiv?.classList.remove('cards-list-view')
      for (const each of cardsArray) {
        each.classList.remove('list-view')
      }
    }
  }

  filter() {
    let type = (<HTMLInputElement>document.getElementById('filter')).value
    console.log(type)
    if(type == 'lowToHigh')
      this.products = this.products.sort((a,b) => a.price-b.price)
    else  
      this.products = this.products.sort((a,b) => b.price-a.price)
  }

}
