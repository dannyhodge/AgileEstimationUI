import { io } from "socket.io-client";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io("http://localhost:3000");

    this.socket.emit("successful connection");

    this.socket.on("connect", () => {
      console.log("Connected as " + this.socket.id);
    });
  }

  emitMyScore(player, score) {
    this.socket.emit("new score", player, score);
  }
}

export default new SocketioService();
