import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    // Serve index.html for unmatched routes
    "/*": index,

    // "/api/hello": {
    //   async GET(req) {
    //     return Response.json({
    //       message: "Hello, world!",
    //       method: "GET",
    //     });
    //   },
    //   async PUT(req) {
    //     return Response.json({
    //       message: "Hello, world!",
    //       method: "PUT",
    //     });
    //   },
    // },

    // "/api/hello/:name": async req => {
    //   const name = req.params.name;
    //   return Response.json({
    //     message: `Hello, ${name}!`,
    //   });
    // },
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true, // Enable browser HMR in development
    console: true, // Echoes browser logs to server
  },
});

console.log(`🚀 Server running at ${server.url}`);
