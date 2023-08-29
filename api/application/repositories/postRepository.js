const Post = require('../../framworks/database/mongoDB/models/Post');
const {
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
  count,
} = require('../../framworks/database/mongoDB/repositories/repositoryMongoDB')(Post);
// require('../db/inMemory/dbService');
// require('../db/postgreSQL/dbService');

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
  count,
};
