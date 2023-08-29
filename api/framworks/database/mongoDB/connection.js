module.exports = function connection(mongoose, config, options) {
  console.log('config.mongo.uri ', config.mongo.uri);
  function connectToMongo() {
    mongoose
      .connect(config.mongo.uri, options)
      .then(
        () => {},
        (err) => {
          console.info('Mongodb error', err);
        },
      )
      .catch((err) => {
        console.log('ERROR:', err);
      });
  }

  mongoose.connection.on('connected', () => {
    console.info('Connected to MongoDB!');
  });

  mongoose.connection.on('reconnected', () => {
    console.info('MongoDB reconnected!');
  });

  mongoose.connection.on('error', (error) => {
    console.error(`Error in MongoDb connection: ${error}`);
    mongoose.disconnect();
  });

  mongoose.connection.on('disconnected', () => {
    console.error('MongoDB disconnected! Reconnecting in ...');
    setTimeout(() => connectToMongo(), 1000);
  });

  return {
    connectToMongo,
  };
};
