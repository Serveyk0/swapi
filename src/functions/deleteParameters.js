export const deleteParameters = ( obj ) => {
    delete obj.url;
    delete obj.created;
    delete obj.edited;
}