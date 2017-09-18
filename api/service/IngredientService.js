'use strict';
const utils = require('../utils/writer.js');
const Ingredient = require('../model/ingredient');
const debug = require('debug')('foodbucket:ingredientService');

/**
 * Create ingredient
 * This endpoint allows to create new ingredient.
 *
 * body Ingredient Ingredient object
 * returns Ingredient
 **/
exports.createIngredient = function({ingredient_id, image, measure, quantity, price, title}) {
    return new Promise( (resolve, reject) => {
       let newIngredient = new Ingredient ({
            "image": image,
            "measure" : measure,
            "quantity" : quantity,
            "price" : price,
            "title" : title
        });

       newIngredient.save().then(
            ingredientDoc => {
                if (Object.keys(ingredientDoc).length > 0) {
                    let {ingredient_id, title, image, measure, quantity, price} = ingredientDoc;
                    resolve(utils.respondWithCode(201, {ingredient_id, title, image, measure, quantity, price}));
                } else {
                    reject(utils.respondWithCode(404, {"code": 404, "message": "Ingredient is not created, please try again."}));
                }
                debug('Saved ingredient: %O', ingredientDoc);
            },
            error => { debug('Unable to save ingredient: %O', error); }
       );
    });
};


/**
 *
 * id Long ID of the ingredient to delete
 * no response value expected for this operation
 **/
exports.deleteIngredientById = function(id) {
    return new Promise( (resolve, reject) => {
        Ingredient.findOneAndRemove({ ingredient_id: id }).then(
            oneIngredientDoc => {
                oneIngredientDoc = oneIngredientDoc || {};
                if (Object.keys(oneIngredientDoc).length > 0) {
                    let {ingredient_id, title, image,  measure, quantity, price} = oneIngredientDoc;
                    resolve(utils.respondWithCode(200, {ingredient_id, title, image,  measure, quantity, price}));
                } else {
                    reject(utils.respondWithCode(404, {"code": 404, "message": "Ingredient is not deleted, please try again."}));
                }
    },
        error => { console.log('Unable to remove ingredient'); }
    );

    });
}


/**
 *
 * id Long ID of the ingredient to get
 * returns Ingredient
 **/
exports.findIngredientById = function(id) {
    return new Promise( (resolve, reject) => {
        Ingredient.findOne({ ingredient_id: id }).then(
            oneIngredientDoc => {
                oneIngredientDoc = oneIngredientDoc || {};
                if (Object.keys(oneIngredientDoc).length > 0) {
                    let {ingredient_id, title, image,  measure, quantity, price} = oneIngredientDoc;
                    resolve(utils.respondWithCode(200, {ingredient_id, title, image,  measure, quantity, price}));
                } else {
                    reject(utils.respondWithCode(404, {"code": 404, "message": "Ingredient is not found, please try again."}));
                }
            },
            error => { debug('Unable to get ingredient: %O', error); }
        );
    });
};


/**
 *
 * offset Integer start position for quering from DB
 * limit Integer number of items to query from DB
 * returns List
 **/
exports.getAllIngredients = function(offset,limit, sort, sort_col) {
    return new Promise( (resolve, reject) => {
         return Ingredient.count().
            then(
                total => {
                     Ingredient.find().sort({[sort_col]: sort}).then(
                         (ingredientsDoc) => {
                            ingredientsDoc = ingredientsDoc || [];
                            if (Object.keys(ingredientsDoc).length > 0) {
                                ingredientsDoc = ingredientsDoc.map( ({ ingredient_id, title, image,  measure, quantity, price}) => {
                                    return { ingredient_id, title, image,  measure, quantity, price };
                                });
                                resolve({total: total, body: utils.respondWithCode(200, ingredientsDoc)});
                            } else {
                                reject(utils.respondWithCode(404, {"code": 404, "message": "Ingredients are not found, please try again."}));
                            }
                        },
                        error => { debug('Unable to get ingredients: %O', error); }
                    );
                }
        );
    });
};



/**
 *
 * id Long Id of the Ingredient being updated
 * updatedIngredient Ingredient The updated Ingredient
 * no response value expected for this operation
 **/
exports.updateIngredientById = function(id,updatedIngredient) {
    return new Promise((resolve, reject) => {
        let { title, image, measure, quantity, price } = updatedIngredient;

        Ingredient.findOneAndUpdate({ ingredient_id: id }, { title, image,  measure, quantity, price }).then(
            oneIngredient => {
                if (Object.keys(updatedIngredient).length > 0 && oneIngredient !== null) {
                    let ingredient_id = oneIngredient.ingredient_id;
                    resolve(utils.respondWithCode(200, {ingredient_id, title, image,  measure, quantity, price}));
                } else {
                    reject(utils.respondWithCode(400, {"code": 400, "message": "Ingredient is not updated, please try again."}));
                }
            },
            error => { debug('Unable to get ingredient: %O', error); }
         );
    });
};

