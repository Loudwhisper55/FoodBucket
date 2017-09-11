import {Component, OnInit, OnDestroy} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {FlashMessagesService} from 'ngx-flash-messages';
import {IngredientService} from '../../../client/api/ingredient.service';

@Component({
    selector: 'app-adminingredients-form',
    templateUrl: './adminingredients-form.component.html',
    styleUrls: ['./adminingredients-form.component.css']
})
export class AdminIngredientsFormComponent implements OnInit, OnDestroy {

    title: string;
    measure: string;
    quantity: number;
    price: number;
    image: string;
    action: {
        id: number,
        name: string
    };
    urlSubscription: Subscription;

    constructor(
        protected ingredientService: IngredientService,
        protected route: ActivatedRoute,
        private flashMessagesService: FlashMessagesService
    ) { }

    ngOnInit() {
        this.urlSubscription = this.route.url
            .subscribe(
                (segments) => {
                    const seg1 = segments[0].path,
                        seg2 = segments[1] !== undefined ? segments[1].path : '';

                    if (!isNaN(parseInt(seg1, 10)) && seg2 === 'edit') {

                        this.fillIngredient(parseInt(seg1, 10));

                        this.action = {
                            id: parseInt(seg1, 10),
                            name: seg2
                        };
                    } else {
                        this.action = {
                            id: 0,
                            name: seg1
                        };
                    }
                }
            );
    }

    ngOnDestroy() {
        this.urlSubscription.unsubscribe();
    }

    onSubmit(form: NgForm) {
        const ingredientObject = {
            title: form.value.title,
            measure: form.value.measure,
            quantity: Number(form.value.quantity),
            price: Number(form.value.price),
            image: form.value.image,
        };

        if (this.action.name === 'create') {
            this.createIngredient(ingredientObject);
        } else {
            this.updateIngredient(this.action.id, ingredientObject);
        }
    }

    createIngredient(ingredientObject) {
        this.ingredientService.createIngredient(ingredientObject)
            .subscribe(
                ingredient => {
                    this.flashMessagesService.show(`Ingredient with id:${ingredient['ingredient_id']} was successfully created!`, {
                        classes: ['alert', 'alert-success'],
                        timeout: 3000,
                    });
                    this.resetFormFields();
                },
                err => console.log(err)
            );
    }

    updateIngredient(id: number, ingredientObject) {
        this.ingredientService.updateIngredientById(id, ingredientObject)
            .subscribe(
                ingredient => {
                    this.flashMessagesService.show(`Ingredient with id:${id} was successfully updated!`, {
                        classes: ['alert', 'alert-warning'],
                        timeout: 3000,
                    });

                },
                err => console.log(err)
            );
    }

    fillIngredient(id: number) {
        this.ingredientService.findIngredientById(id)
            .subscribe(
                ingredient => {
                    this.title = ingredient.title;
                    this.measure = ingredient.measure;
                    this.quantity = ingredient.quantity;
                    this.price = ingredient.price;
                    this.image = ingredient.image;
                },
                err => console.log(err)
            );
    }

    resetFormFields() {
        this.title = '';
        this.measure = '';
        this.quantity = null;
        this.price = null;
        this.image = '';
    }
}
