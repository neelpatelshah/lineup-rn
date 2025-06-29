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
/**
 * From T, pick a set of properties whose keys are in the union K
 * @export
 * @interface PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus
 */
export interface PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus {
    /**
     * 
     * @type {string}
     * @memberof PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus
     */
    sourceImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus
     */
    imageUrlLow?: string;
    /**
     * 
     * @type {number}
     * @memberof PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus
     */
    aspectRatio?: number;
    /**
     * 
     * @type {number}
     * @memberof PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus
     */
    id: string;
}

/**
 * Check if a given object implements the PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus interface.
 */
export function instanceOfPickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus(value: object): value is PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus {
    if (!('sourceImageUrl' in value) || value['sourceImageUrl'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatusFromJSON(json: any): PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus {
    return PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatusFromJSONTyped(json, false);
}

export function PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'imageUrl': json['imageUrl'] == null ? undefined : json['imageUrl'],
        'sourceImageUrl': json['sourceImageUrl'],
        'imageUrlLow': json['imageUrlLow'] == null ? undefined : json['imageUrlLow'],
        'aspectRatio': json['aspectRatio'] == null ? undefined : json['aspectRatio'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
        'id': json['id'],
    };
}

export function PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatusToJSON(json: any): PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus {
    return PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatusToJSONTyped(json, false);
}

export function PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatusToJSONTyped(value?: PickSimpleDTOClassPropertiesImageEntityExcludeKeyofSimpleDTOClassPropertiesImageEntityPersistedStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'imageUrl': value['imageUrl'],
        'sourceImageUrl': value['sourceImageUrl'],
        'imageUrlLow': value['imageUrlLow'],
        'aspectRatio': value['aspectRatio'],
        'width': value['width'],
        'height': value['height'],
        'id': value['id'],
    };
}

