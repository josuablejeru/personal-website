/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Book = {
    id?: string;
    title?: string;
    subtitle?: string;
    authors?: Array<string>;
    publishedDate?: string;
    description?: string;
    identifiers?: Array<{
        type?: string;
        identifier?: string;
    }>;
    imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
    };
};

