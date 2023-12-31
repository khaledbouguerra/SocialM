module.exports = function mongoDbService(Model) {
  const create = async (data) => {
    return await Model.create(data);
  };

  const createMany = async (data) => {
    return await Model.insertMany(data);
  };

  const updateOne = async (filter, data) => {
    return await Model.findOneAndUpdate(filter, data, { returnOriginal: false });
  };

  const updateOneById = async (filter, data) => {
    return await Model.findByIdAndUpdate(filter, data, { returnOriginal: false });
  };

  const updateMany = async (filter, data) => {
    return await Model.updateMany(filter, data);
  };

  const deleteOne = async (filter) => {
    return await Model.deleteOne(filter);
  };
  const findOneByIdAndDelete = async (filter) => {
    return await Model.findByIdAndDelete(filter);
  };

  const deleteMany = async (filter, options = {}) => {
    return await Model.deleteMany(filter, options);
  };

  const softDelete = async (filter) => {
    return await Model.findOneAndUpdate(filter, { isDelete: true }, { returnOriginal: false });
  };

  const softDeleteMany = async (filter) => {
    return await Model.updateMany(filter, { isDelete: true });
  };

  const findOne = async (filter) => {
    return await Model.findOne(filter);
  };

  const findById = async (filter) => {
    return await Model.findById(filter);
  };

  const findMany = async (filter) => {
    return await Model.find(filter);
  };

  const count = async (filter) => {
    return await Model.where(filter).countDocuments();
  };

  return Object.freeze({
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
  });
};
