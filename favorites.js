
webiopi().ready(function() {
        		webiopi().setFunction(15,"out");
        		
        		var content, button;
        		content = $("#content");
        		
				//Lights on
				button = webiopi().createButton("allLightsOn","Turn on Lights", allLightsOn);
				content.append(button);
				
				//Lights off
				button = webiopi().createButton("allLightsOff","Turn off Lights", allLightsOff);
				content.append(button);
				
				//Use PC
				button = webiopi().createButton("SystemPower", "Use PC", PCPower);
				content.append(button);
				
				//Watch DVD
				button = webiopi().createButton("SystemPower", "Watch DVD", watchDVD);
				content.append(button);
				
				//Listen to Record
				button = webiopi().createButton("SystemPower", "Record Player", recordPlayer);
				content.append(button);
				
				//Listen to radio
				button = webiopi().createButton("SystemPower", "Listen to Radio", listenRadio);
				content.append(button);
				
				//Channel up
				button = webiopi().createSequenceButton("soundChannelUp", "Ch. Up", 4, 300, "101");
				content.append(button);
				
				//Channel down
				button = webiopi().createSequenceButton("soundChannelDown", "Ch. Down", 17, 300, "101");
				content.append(button);
			
			
			
			//This code makes the button class reflect the state of the GPIO pin	
        		w().refreshGPIO(true);
        });
		
		
		function allLightsOff() {
			webiopi().digitalWrite(15,1);
			webiopi().digitalWrite(18,1);
			webiopi().digitalWrite(23,1);
			
		}
		function allLightsOn() {
			webiopi().digitalWrite(15,0);
			webiopi().digitalWrite(18,0);
			webiopi().digitalWrite(23,0);
			
		}
		function PCPower() {
		//Turn on Lights
		webiopi().digitalWrite(15,0);
		webiopi().digitalWrite(18,0);
		webiopi().digitalWrite(23,0);
		//Start Power Supply for Remote and IR repeater
		webiopi().digitalWrite(2,0);
		//PC power button press
		webiopi().outputSequence(8,300,"101");
		//Receiver power button press
		webiopi().outputSequence(3,300,"101");
		//TV power button press
		webiopi().outputSequence(7,500,"101");
		//Set Reciever to VCR
		webiopi().outputSequence(27,300,"101");
		//Turn off Power supply
		webiopi().digitalWrite(2,1);
		
		function watchDVD() {
		//Turn on Lights
		webiopi().digitalWrite(15,0);
		webiopi().digitalWrite(18,0);
		webiopi().digitalWrite(23,0);
		//Start Power Supply for Remote and IR repeater
		webiopi().digitalWrite(2,0);	
		//Receiver power button press
		webiopi().outputSequence(3,300,"101");
		//TV power button press
		webiopi().outputSequence(7,500,"101");
		//Set Reciever to PS3 input
		webiopi().outputSequence(22,300,"101");
		//Turn off Power supply
		webiopi().digitalWrite(2,1);
		}
		
		function recordPlayer() {
		//Turn on Lights
		webiopi().digitalWrite(15,0);
		webiopi().digitalWrite(18,0);
		//Power on reciever
		webiopi().outputSequence(3,300,"101");
		//Turn off side lights
		webiopi().digitalWrite(23,1);
		//Set input to phono
		webiopi().outputSequence(9,300,"101");
		}
		
		
		function listenRadio() {
		//Turn on Lights
		webiopi().digitalWrite(15,0);
		webiopi().digitalWrite(23,0);
		//Power on reciever
		webiopi().outputSequence(3,300,"101");
		//Turn off LED lights
		webiopi().digitalWrite(18,1);
		//Set input to phono
		webiopi().outputSequence(10,300,"101");	
		}
