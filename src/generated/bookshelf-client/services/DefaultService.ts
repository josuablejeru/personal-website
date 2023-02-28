/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * the openapi definition of this api
     * Returns this openapi definition to be used by external services
     * @returns any return openapi definition as JSON
     * @throws ApiError
     */
    public static getOpenapiDefinition(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/openapi.json',
        });
    }

}
