/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookResponse } from '../models/BookResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BooksService {

    /**
     * get my public bookshelf
     * Returns a collection of books I found valuable
     * @returns BookResponse successful operation
     * @throws ApiError
     */
    public static getBookshelfBooks(): CancelablePromise<BookResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bookshelf/books',
        });
    }

}
