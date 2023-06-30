let aboutMessage = 'ChargingDoor Internal Syatem';

function setMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

function getMessage() {
  return aboutMessage;
}
//trial

module.exports = { getMessage, setMessage };
