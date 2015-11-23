webiopi().ready(function() {
        		webiopi().setFunction(15,"out");
        		
        		var content, button;
        		content = $("#content");
        		
				button = webiopi().createButton("allLightsOn","Turn on Lights", allLightsOn);
				content.append(button);
				
				button = webiopi().createButton("allLightsOff","Turn off Lights", allLightsOff);
				content.append(button);
				
        		button = webiopi().createGPIOButton(15,"Lamp");
        		content.append(button);
				
				button = webiopi().createGPIOButton(18,"LED");
        		content.append(button);
				
				button = webiopi().createGPIOButton(23,"Side Lights");
        		content.append(button);
				
				button = webiopi().createGPIOButton(24,"AUX Plug");
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
	
