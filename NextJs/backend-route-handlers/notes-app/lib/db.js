import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your .env file.");
}

const globalWithMongoose = globalThis;

const cached =
  globalWithMongoose.mongooseCache ??
  (globalWithMongoose.mongooseCache = {
    conn: null,
    promise: null,
  });

export async function connectToDB() {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "notes-app",
        serverSelectionTimeoutMS: 10000,
      })
      .then((instance) => instance)
      .catch((error) => {
        cached.promise = null;
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
