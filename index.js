webiopi().ready(function() {
        		webiopi().setFunction(15,"out");
        		
        		var content, button;
        		content = $("#content");
        		
				button = webiopi().createButton("allLightsOn","Turn on Lights", allLightsOn);
				content.append(button);
				
				button = webiopi().createButton("allLightsOff","Turn off Lights", allLightsOff);
				content.append(button);
				
				button = webiopi().createButton("systemPower", "System Power", systemPower);
				content.append(button);
				
				button = webiopi().createSequenceButton("pcPower", "PC Power", 8, 500, "101");
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
	function systemPower() {
		//Turn on Lights
		//webiopi().digitalWrite(15,0);
		//webiopi().digitalWrite(18,0);
		//webiopi().digitalWrite(23,0);
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
	}
