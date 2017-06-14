// @flow
export class Model {

    /**
     * The object we mutate for storing the data
     */
    attributes: Object;

    /**
     * Construct a new model
     * 
     * @param {Object} options The initialization options
     */
    constructor (options: Object) : void {
        if (null == options) options = {}
        this.attributes = options;
    }

    /**
     * Get a value
     * 
     * @param {string} key The key we use to lookup values in the attributes object
     * @returns {any|null} Can return a null/undefined value or whatever was set (Which can also be null)
     */
    get (key: string) : any | null {
        return this.attributes[key];

    }

    /**
     * Set a value in the attributes object
     * 
     * @param {string} key The key to use when we lookup this value
     * @param {*} value The value we return when we try to get this value
     * @returns {void} Nothing
     */
    set (key: string, value: any) : void {
        this.attributes[key] = value;
    }

    /**
     * Return an object with the attributes set (And won't be mutated by any changes after the fact)
     * 
     * @returns {Object} The current attributes
     */
    freeze () : Object {
        return Object.assign({}, this.attributes);
    }

    /**
     * Check if the model is new
     * 
     * @returns {Boolean} True if the model is new
     */
    isNew () : Boolean {
        /** We do type coercion to simplify the logic */
        return this.get("id") == null;
    }
}
