import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        localStorage.setItem('showAPhrase', JSON.stringify(true));
        localStorage.setItem('cartContentObjCreated', JSON.stringify(false));
    }

    title = 'app';

}
