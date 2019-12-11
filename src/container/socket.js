import socket from "../service/socket";

export const onSocket = function(props) {
  const renter = JSON.parse(window.localStorage.getItem("renters")) || [];
  const rooms = renter.map(element => element.room);
  socket.emit("all-room", rooms);

  socket.on("cancel-rent-server", () => {
    props.changeAccept(false);
  });

  socket.on("accept-contract", data => {
    props.changeAccept(data);
  });

  socket.on("cancel-contract", data => {
    props.removeRenter({ room: data.room });
  });

  socket.on("chat", data => {
    props.addMessage(data);
  });

  socket.on("load-mentor-online", data => {
    props.mentors_online(data);
  });

  socket.on("load-rent-mentor", data => {
    data.type = "mentor";
    props.add_renter(data);
    socket.emit("joint-room", { room: data.room });
  });

  if (props.info && props.info.mentor) {
    socket.emit("on-mentor", props.info);
  }
};

export const onUpdate = props => {
  if (props.info && props.info.mentor) {
    socket.emit("on-mentor", props.info);
  }
};

export const clearSocket = function(props) {
  socket.removeAllListeners();
};
