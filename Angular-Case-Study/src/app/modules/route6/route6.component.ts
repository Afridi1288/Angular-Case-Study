import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss']
})
export class Route6Component implements OnInit {
  divs = [];
  index = 0;
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event: any) {
    this.createDivs()
  }
  constructor() { }

  ngOnInit(): void {
    //Creating initial div's
    for (this.index = 1; this.index < 16;) {
      this.createDivs()
    }

  }

  createDivs() {
    let section = document.getElementById('divs');
    //Creating dynamic div
    let div = document.createElement("div")
    div.setAttribute("class", "div-dimension")
    div.setAttribute("id", `${this.index}`)
    div.style.width = '200px'
    div.style.height = '200px'
    div.style.border = '1px solid black'
    div.style.margin = '20px'
    div.style.position = 'relative';
    //Creating a dynamic button inside div
    let btn = document.createElement("button")
    btn.setAttribute("class", "btn btn-primary")
    btn.innerHTML = `DIV no. ${this.index}`
    btn.style.position = 'absolute';
    btn.style.top = '50%';
    btn.style.left = '50%';
    btn.style.transform = 'translate(-50%, -50%)';
    btn.addEventListener("click", ()=> {this.btnClicked(div.id)})

    div.appendChild(btn)
    section?.appendChild(div)
    this.index++
  }

  btnClicked(id: any) {
    let number = this.getSUffix(id)
    alert(`Button in ${number} div  clicked`)
  }

  getSUffix(i: number) {
    var j = i % 10, k = i % 100;
    if (j == 1 && k != 11) 
        return i + "st";
    if (j == 2 && k != 12)
        return i + "nd";
    if (j == 3 && k != 13)  
        return i + "rd";
    return i + "th";
  }

}
