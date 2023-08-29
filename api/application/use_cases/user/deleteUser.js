const response = require('../../../utils/response');

const deleteOne =
  ({ userDb }) =>
  async (params) => {
    console.log(' this is the id ', params.id);
    try {
      const result = await userDb.findOneByIdAndDelete(params.id);
      console.log('result ', result);
      return response.success({ data: result });
    } catch (error) {
      return response.failure();
    }
  };
module.exports = deleteOne;
