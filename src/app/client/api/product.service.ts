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

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { Product } from '../model/product';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomQueryEncoderHelper }                          from '../encoder';


@Injectable()
export class ProductService {

    protected basePath = 'http://localhost:3000/api';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * This endpoint allows to create new product. 
     * @summary Create product
     * @param body Product object
     */
    public createProduct(body: Product, extraHttpRequestParams?: any): Observable<Product> {
        return this.createProductWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @param id ID of the product to delete
     */
    public deleteProductById(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteProductByIdWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @param id ID of the product to get
     */
    public findProductById(id: number, extraHttpRequestParams?: any): Observable<Product> {
        return this.findProductByIdWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @param offset start position for quering from DB
     * @param limit number of items to query from DB
     * @param isActive returns active products
     */
    public getAllProducts(offset: number, limit: number, isActive?: boolean, extraHttpRequestParams?: any): Observable<Array<Product>> {
        return this.getAllProductsWithHttpInfo(offset, limit, isActive, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @param id content of the product is being updated
     * @param updatedProduct The updated product
     */
    public updateProductById(id: number, updatedProduct: Product, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateProductByIdWithHttpInfo(id, updatedProduct, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Create product
     * This endpoint allows to create new product. 
     * @param body Product object
     */
    public createProductWithHttpInfo(body: Product, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product';

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createProduct.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param id ID of the product to delete
     */
    public deleteProductByIdWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteProductById.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param id ID of the product to get
     */
    public findProductByIdWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findProductById.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param offset start position for quering from DB
     * @param limit number of items to query from DB
     * @param isActive returns active products
     */
    public getAllProductsWithHttpInfo(offset: number, limit: number, isActive?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/products';

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'offset' is not null or undefined
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getAllProducts.');
        }
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getAllProducts.');
        }
        if (isActive !== undefined) {
            queryParameters.set('isActive', <any>isActive);
        }

        if (offset !== undefined) {
            queryParameters.set('offset', <any>offset);
        }

        if (limit !== undefined) {
            queryParameters.set('limit', <any>limit);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param id content of the product is being updated
     * @param updatedProduct The updated product
     */
    public updateProductByIdWithHttpInfo(id: number, updatedProduct: Product, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateProductById.');
        }
        // verify required parameter 'updatedProduct' is not null or undefined
        if (updatedProduct === null || updatedProduct === undefined) {
            throw new Error('Required parameter updatedProduct was null or undefined when calling updateProductById.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: updatedProduct == null ? '' : JSON.stringify(updatedProduct), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
