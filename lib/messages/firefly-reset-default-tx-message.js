const crc = require('../crc');

const opcode = 0xF040;

function ResetTxFireflyDefaultMessage() {
  this.data = Buffer.allocUnsafe(1).fill(opcode);

  const crcBuffer = Buffer.allocUnsafe(2);
  crcBuffer.writeUInt16LE(crc.crc16(this.data));
  this.data = Buffer.concat([this.data, crcBuffer]);
}

ResetTxFireflyDefaultMessage.opcode = opcode;

module.exports = ResetTxFireflyDefaultMessage;
