/* tslint:disable */
/* eslint-disable */
/**
 * lineup-backstage
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ImageEntity } from './ImageEntity';
import {
    ImageEntityFromJSON,
    ImageEntityFromJSONTyped,
    ImageEntityToJSON,
    ImageEntityToJSONTyped,
} from './ImageEntity';

/**
 * From T, pick a set of properties whose keys are in the union K
 * @export
 * @interface PickArtistExcludeKeyofArtistId
 */
export interface PickArtistExcludeKeyofArtistId {
    /**
     * 
     * @type {ImageEntity}
     * @memberof PickArtistExcludeKeyofArtistId
     */
    imageUrl?: ImageEntity;
    /**
     * 
     * @type {string}
     * @memberof PickArtistExcludeKeyofArtistId
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PickArtistExcludeKeyofArtistId
     */
    genre: string;
    /**
     * 
     * @type {string}
     * @memberof PickArtistExcludeKeyofArtistId
     */
    bio?: string;
}

/**
 * Check if a given object implements the PickArtistExcludeKeyofArtistId interface.
 */
export function instanceOfPickArtistExcludeKeyofArtistId(value: object): value is PickArtistExcludeKeyofArtistId {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('genre' in value) || value['genre'] === undefined) return false;
    return true;
}

export function PickArtistExcludeKeyofArtistIdFromJSON(json: any): PickArtistExcludeKeyofArtistId {
    return PickArtistExcludeKeyofArtistIdFromJSONTyped(json, false);
}

export function PickArtistExcludeKeyofArtistIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickArtistExcludeKeyofArtistId {
    if (json == null) {
        return json;
    }
    return {
        
        'imageUrl': json['imageUrl'] == null ? undefined : ImageEntityFromJSON(json['imageUrl']),
        'name': json['name'],
        'genre': json['genre'],
        'bio': json['bio'] == null ? undefined : json['bio'],
    };
}

export function PickArtistExcludeKeyofArtistIdToJSON(json: any): PickArtistExcludeKeyofArtistId {
    return PickArtistExcludeKeyofArtistIdToJSONTyped(json, false);
}

export function PickArtistExcludeKeyofArtistIdToJSONTyped(value?: PickArtistExcludeKeyofArtistId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'imageUrl': ImageEntityToJSON(value['imageUrl']),
        'name': value['name'],
        'genre': value['genre'],
        'bio': value['bio'],
    };
}

