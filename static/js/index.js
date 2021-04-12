client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "javierpcastro33@gmail.com.ec",
    password: "12345",
    onSuccess:onConnect,
    onFailure:doFail
  }

  
  client.connect(options);
   
 
  function onConnect() {
    console.log("Conectado...");
    client.subscribe("javierpcastro33@gmail.com.ec/tema1");
    client.subscribe("javierpcastro33@gmail.com.ec/tema3");
	
  }


  function doFail(e){
    console.log(e);
	
  }


  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }



function senso1() {
	alert("led on");
	//console.log("led on");
	message = new Paho.MQTT.Message("sensor1");
	message.destinationName = "javierpcastro33@gmail.com.ec/tema2";
	client.send(message);
  
}



function senso2(){	
	alert("led off");
	//console.log("led off");
	message = new Paho.MQTT.Message("sensor2");
	message.destinationName = "javierpcastro33@gmail.com.ec/tema2";
	client.send(message);

}



  // called when a message arrives
  function onMessageArrived(message) {
	  if (message.destinationName=="javierpcastro33@gmail.com.ec/tema1"){
		  document.getElementById("sensor1").innerHTML=message.payloadString;
	  
	  }
	  
	  if (message.destinationName=="javierpcastro33@gmail.com.ec/tema3"){
		  document.getElementById("sensor2").innerHTML=message.payloadString;
	  
	  }


  }
