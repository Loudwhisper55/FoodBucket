'use strict';
const Category = require('../model/category');

/**
 * Create category
 * This endpoint allows to create new category.
 *
 * body Category Category object
 * returns Category
 **/
exports.createCategory = function (body) {
    return new Promise(function (resolve, reject) {
        let newCategory = {};
        let { category_id, title, image, description } = body;
        newCategory['application/json'] = new Category({
            "category_id": category_id,
            "title": title,
            "image": image,
            "description": description
        });

        newCategory['application/json'].save().then(
            categoryDoc => { console.log('Saved category', categoryDoc); },
            error => { console.log('Unable to save category'); }
        );

        if (Object.keys(newCategory).length > 0) {
            resolve(newCategory[Object.keys(newCategory)[0]]);
        } else {
            reject();
        }
    });
}


/**
 *
 * id Long ID of the category to delete
 * no response value expected for this operation
 **/
exports.deleteCategoryById = function(id) {
    return new Promise(function (resolve, reject) {
        let oneCategory = {};

        Category.findOneAndRemove({ category_id: id }).then(
            oneCategoryDoc => {
                oneCategory['application/json'] = oneCategoryDoc;
                if (Object.keys(oneCategory).length > 0) {
                    resolve(oneCategory[Object.keys(oneCategory)[0]]);
                } else {
                    reject();
                }
            },
            error => { console.log('Unable to remove category'); }
        );
    });
}


/**
 *
 * id Long ID of the category to get
 * returns Category
 **/
exports.findCategoryById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "image",
  "category_id" : 0,
  "description" : "description",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
exports.findCategoryById = function (id) {
    return new Promise(function (resolve, reject) {
        let oneCategory = {};

        Category.findOne({ category_id: id }).then(
            oneCategoryDoc => {
                oneCategory['application/json'] = oneCategoryDoc;
                if (Object.keys(oneCategory).length > 0) {
                    resolve(oneCategory[Object.keys(oneCategory)[0]]);
                } else {
                    reject();
                }
            },
            error => { console.log('Unable to get category'); }
        );
    });
}


/**
 *
 * offset Integer start position for quering from DB
 * limit Integer number of items to query from DB
 * isActive Boolean returns active categories (optional)
 * returns List
 **/
exports.getAllCategories = function (offset, limit, isActive) {
    return new Promise(function (resolve, reject) {
        let categories = [];
        Category.find().then(
            categoriesDoc => {
                categories['application/json'] = categoriesDoc;

                if (Object.keys(categories).length > 0) {
                    resolve(categories[Object.keys(categories)[0]]);
                } else {
                    reject();
                }
            },
            error => { console.log('Unable to get categories'); }
        );
    });
}


/**
 *
 * id Long Id of the Category being updated
 * updated_category Category The updated Category
 * no response value expected for this operation
 **/
exports.updateCategoryById = function(id, updated_category) {
    return new Promise(function (resolve, reject) {
        let oneCategory = {};
        let { title, image, description } = updated_category;

        Category.findOneAndUpdate({ category_id: id },
                  {
                      title: updated_category.title,
                      image: updated_category.image,
                      description: updated_category.description,
                  }).then(
            oneCategoryDoc => {
                oneCategory['application/json'] = updated_category;
                if (Object.keys(oneCategory).length > 0) {
                    resolve(oneCategory[Object.keys(oneCategory)[0]]);
                } else {
                    reject();
                }
            },
            error => { console.log('Unable to get category'); }
        );
    });
}
