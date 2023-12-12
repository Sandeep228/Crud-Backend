const mongoose = require("mongoose");


mongoose
  .connect(
    "mongodb+srv://sandeep:sOgCoKWjRAGqPRVH@cluster0.c4adroo.mongodb.net/crud?retryWrites=true&w=majority"
  )
  .then(async () => {
    console.log("Database Connected Successfully");
  })
  .catch((err:any) => {
    console.error("No Connection to Database:", err);
  });
