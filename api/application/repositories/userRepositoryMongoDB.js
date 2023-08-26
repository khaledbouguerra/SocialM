let User = require('../../framworks/database/mongoDB/models/User');
let { create,
    createMany,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    softDelete,
    softDeleteMany,
    findOne,
    findMany,
    count } = require('../../framworks/database/mongoDB/repositories/repositoryMongoDB')(User);
//require('../db/inMemory/dbService');
//require('../db/postgreSQL/dbService');

module.exports = {
    create,
    createMany,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    softDelete,
    softDeleteMany,
    findOne,
    findMany,
    count
};