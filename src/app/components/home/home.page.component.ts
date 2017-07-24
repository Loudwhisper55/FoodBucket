import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

import { ModalCongratulationComponent } from '../modals/modal-congratulation/modal-congratulation.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  public openModalCongratulation() {
    this.modalService.show(ModalCongratulationComponent);
  }

  ngOnInit() {
  }

}
