/** packages */


/** using schemas */
const schema = require("../schemas/user.schema");

/*schema.statics = {
    /**create: function (data, cb) {
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function (query, cb) {
        //this.find(query, cb);
        console.log("Alejo");
    }/*,
    getByCode: function (query, cb) {
        this.find(query, cb);
    },
    update: function (query, data, cb) {
        this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
    },
    update: function (query, cb) {
        this.findOneAndDelete(query);
    }/
};*/

//const dto = mongoose.model("coll_user", schema);
//module.exports = dto;