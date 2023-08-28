let User = require('../../framworks/database/mongoDB/models/User');
let { create,
    createMany,
    updateOne,
    updateOneById,
    updateMany,
    deleteOne,
    findOneByIdAndDelete,
    deleteMany,
    softDelete,
    softDeleteMany,
    findOne,
    findById,
    findMany,
    count } = require('../../framworks/database/mongoDB/repositories/repositoryMongoDB')(User);
//require('../db/inMemory/dbService');
//require('../db/postgreSQL/dbService');

module.exports = {
    create,
    createMany,
    updateOne,
    updateOneById,
    updateMany,
    deleteOne,
    findOneByIdAndDelete,
    deleteMany,
    softDelete,
    softDeleteMany,
    findOne,
    findById,
    findMany,
    count
};