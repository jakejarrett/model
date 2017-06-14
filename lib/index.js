export class Model {
  constructor(options) {
    if (null == options) options = {};
    this.attributes = options;
  }

  get(key) {
    return this.attributes[key];
  }

  set(key, value) {
    this.attributes[key] = value;
  }

  freeze() {
    return Object.assign({}, this.attributes);
  }

  isNew() {
    return this.get("id") == null;
  }
}