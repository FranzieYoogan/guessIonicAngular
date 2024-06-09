import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderPage],
})
export class Tab1Page implements OnInit {
  constructor() {}

  ngOnInit(): void {

    const input:any = document.getElementById('input')
    const letter1:any = document.getElementById('letter1')
    const letter2:any = document.getElementById('letter2')
    const letter3:any = document.getElementById('letter3')
    const letter4:any = document.getElementById('letter4')
    const letter5:any = document.getElementById('letter5')
    const letter6:any = document.getElementById('letter6')
    const letter7:any = document.getElementById('letter7')
      
    input.addEventListener("keypress", (event: { key: string; }) => {

      if(event.key == "Enter") {

        if(input.value.toUpperCase() == letter1.innerHTML) {

          letter1.style.visibility = "visible"
          letter1.style.color = "green"

        }

        if(input.value.toUpperCase() == letter2.innerHTML) {

          letter2.style.visibility = "visible"
          letter2.style.color = "green"

        }

        if(input.value.toUpperCase() == letter3.innerHTML) {

          letter3.style.visibility = "visible"
          letter3.style.color = "green"

        }

        if(input.value.toUpperCase() == letter4.innerHTML) {

          letter4.style.visibility = "visible"
          letter4.style.color = "green"

        }

        if(input.value.toUpperCase() == letter5.innerHTML) {

          letter5.style.visibility = "visible"
          letter5.style.color = "green"

        }

        if(input.value.toUpperCase() == letter6.innerHTML) {

          letter6.style.visibility = "visible"
          letter6.style.color = "green"

        }

        if(input.value.toUpperCase() == letter7.innerHTML) {

          letter7.style.visibility = "visible"
          letter7.style.color = "green"

        }

        if(input.value.length > 1 || input.value.length == 0) {

          input.style.border = "1px solid red"

        }

        if(input.value.length == 1) {

          input.style.border = "1px solid burlywood"

        }

      }

    })

  }

}
