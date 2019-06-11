var ws = new WebSocket("ws://stocks.mnet.website");
ws.onopen = function() {
  ws.send("Message to send");
  console.log("Message is sent...");
};
ws.onmessage = function (evt) {
  var received_msg = JSON.parse(evt.data);
  console.log(received_msg)
};

ws.onclose = function() {
  console.log("Connection is closed...");
};
