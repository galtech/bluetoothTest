function connect(){
  // Step 1: Scan for a device with 0xffe5 service
  navigator.bluetooth.requestDevice({
    filters: [{ services: [0x1800] }]
  })
    .then(function(device) {
      // Step 2: Connect to it
      return device.gatt.connect();
    })
    .then(function(server) {
      // Step 3: Get the Service
      return server.getPrimaryService(0x1800);
    })
    .then(function(service) {
      // Step 4: get the Characteristic
      return service.getCharacteristic(0x2A00);
    })
    // .then(function(characteristic) {
    //   // Step 5: Write to the characteristic
    //   var data = new Uint8Array([0xbb, 0x25, 0x05, 0x44]);
    //   return characteristic.writeValue(data);
    // })
    .catch(function(error) {
       // And of course: error handling!
       console.error('Connection failed!', error);
    });
}

function listen() {
    annyang.start({ continuous: true });
}
