import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    settings = {
        selectMode: 'multi',
        actions:{
            position: 'right'
        },
        pager:{
            display:true
        },
        columns: {
            id: {
                title: 'ID',
                width:'5%'
            },
            name: {
                title: 'Name'
            },
            surname: {
                title: 'Surname'
            },
            email: {
                title: 'Email'
            },
            phone:{
                title:'Phone'
            },
            city:{
                title:'City'
            },
            adress:{
                title:'Adress'
            },
        }
    };

    data = [
        {
            id: 1,
            name: "Leanne",
            surname: "Bret",
            email: "Sincere@april.biz",
            phone: "06566565",
            city:"Kiev",
            adress:"St.Peremogy, 95"
        },
        {
            id: 2,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 3,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 4,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 5,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 6,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 7,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 8,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 9,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 10,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 11,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        },
        {
            id: 12,
            name: "Katya",
            surname: "Kvitka",
            email: "kvitka@april.biz",
            phone: "06566565",
            city:"Zhytomir",
            adress:"St.Peremogy, 95"
        }
    ];

}