import server from "./server";

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

server.listen(port, () => console.log("Server started"));
