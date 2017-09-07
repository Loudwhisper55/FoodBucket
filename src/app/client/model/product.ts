/**
 * FoodBucket
 * This is a server API for FoodBucket project
 *
 * OpenAPI spec version: 0.0.1
 * Contact: support@foodbucket.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { IngredientsList } from './ingredientsList';


export interface Product {
    productId?: number;

    title: string;

    description: string;

    image?: string;

    price: number;

    category?: string;

    status?: boolean;

    discount?: number;

    promotions?: boolean;

    caloricity?: number;

    servingSize?: number;

    difficulty?: string;

    spiceLevel?: string;

    ingredients?: Array<IngredientsList>;

}