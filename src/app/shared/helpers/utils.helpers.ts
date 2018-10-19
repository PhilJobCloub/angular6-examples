export class UtilsHelpers {
    /* immutable state */
    public updateObject(oldObject, updatedProperties) {
            return {
                ...oldObject,
                ...updatedProperties
            };
        }


    /* flatten and turn array in object */
    public flatten(arr : any[]) {
        const entities = arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
        return entities;
    }
}
