import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NewAccountComponent } from '../new-account/new-account.component';
import { ForgotPassComponent } from '../forgot-pass/forgot-pass.component';
import { AuthService } from '../../../client/api/auth.service';
import { Login } from '../../../client/model/login';
import { User } from './user';
import { DataService } from '../../../services/data/data.service';
import { CongratulationComponent } from '../congratulation/congratulation.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    public title = 'Login to Foodbucket';
    model: Login;
    constructor(
        public bsModalRef: BsModalRef,
        private loginAPI: AuthService,
        private modalService: BsModalService,
        public data: DataService
    ) {
        this.model = new User('', '');
    }
    public logInOperation() {
        this.loginAPI.loginWithHttpInfo(this.model).subscribe(reg => {
            if (reg.ok) {
                sessionStorage.setItem('currentUser', JSON.stringify(reg.json().userId));
                this.openModal('You are Logged In');
                this.changeLogBtnText(false, reg.json().firstName);
            } else {
                this.openModal('Sorry, you are\'t logged. Try again please!');
            }
        },
            err => {
                this.openModal('Sorry, you are\'t logged. Try again please!');
            });
    }
    public openNewAccount() {
        this.modalService.show(NewAccountComponent);
    }
    public changeLogBtnText(message: boolean, btnText: string) {
        this.data.changeIsLogged(message);
        this.data.changeLogBtnText(btnText);
    }
    public  openModal(text: string) {
        this.data.changeMessage(text);
        this.modalService.show(CongratulationComponent);
    }
    public openForgotPass() {
        this.modalService.show(ForgotPassComponent);
    }
    ngOnInit() {
  }
}
