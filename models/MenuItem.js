var MenuItem = function(object) {
    // there are ways to do this with less code, i find this to be the most readable
    this.name = object.name;
    this.price = object.price;
    this.description = object.description;
    this.image_url = object.image_url;
    this.is_vegan = object.is_vegan;
    this.is_gluten_free = object.is_gluten_free;
};

MenuItem.prototype.toObject = function(depth, opts) { // console.log modifications
    return {
        name: this.name,
        price: this.price,
        description: this.description,
        image_url: this.image_url,
        is_vegan: this.is_vegan,
        is_gluten_free: this.is_gluten_free
    };
};

MenuItem.prototype.inspect = function(depth, opts) { // console.log modifications
    return this.toObject();
};

MenuItem.prototype.toJSON = function(depth, opts) { // console.log modifications
    return this.toObject();
};

MenuItem.prototype.toString = function(depth, opts) { // console.log modifications
    return this.toJSON();
};
module.exports = MenuItem;
