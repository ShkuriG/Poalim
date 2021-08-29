var configFile=require('./configs/mongotemp');

async function run() {
  try {
    // Connect the client to the server
    await MongoDBConnect(_mongoDbURL);
    // Establish and verify connection
    await GetDataBase("personsDB").command({ ping: 1 });
    await GetCollection("persons").updateOne({ _id: "571fd15840c4ed0d240d7d6c" }, { $set: { _t: "JobInterview",_v:"TAKE-ME!"} })
    .then(
      res => console.log(`Document updated`),
      err => console.error(`Something went wrong: ${err}`),
    );

  } finally {
    // Ensures to close when you finish/error you didn't supply a function to that
    configFile.closeDB(_mongoDbURL);
  }
}