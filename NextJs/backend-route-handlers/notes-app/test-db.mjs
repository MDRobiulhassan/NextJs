import "dotenv/config";
import dns from "node:dns/promises";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

async function testConnection() {
  try {
    const srvRecords = await dns.resolveSrv(
      "_mongodb._tcp.notes-app.ncf5jfo.mongodb.net",
    );

    console.log("Node.js SRV lookup succeeded:");
    console.log(srvRecords.map(({ name, port }) => ({ name, port })));

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully.");
    console.log("Database:", mongoose.connection.name);
  } catch (error) {
    console.error("Diagnostic failed.");
    console.error("Name:", error.name);
    console.error("Code:", error.code);
    console.error("Message:", error.message);

    if (error.reason?.servers) {
      for (const [host, server] of error.reason.servers) {
        console.error("Server:", host);
        console.error(
          "Server error:",
          server.error?.message ?? "No specific error",
        );
      }
    }
  } finally {
    await mongoose.disconnect().catch(() => {});
  }
}

testConnection();
