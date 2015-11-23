webiopi().ready(function() {
        		webiopi().setFunction(15,"out");
        		
        		var content, button;
        		content = $("#content");
        		
				button = webiopi().createSequenceButton("soundPower", "Power", 3, 500, "101");
				content.append(button);
				
				button = webiopi().createSequenceButton("soundChannelUp", "Ch. Up", 4, 300, "101");
				content.append(button);
				
				button = webiopi().createSequenceButton("soundChannelDown", "Ch. Down", 17, 300, "101");
				content.append(button);
				
				button = webiopi().createSequenceButton("soundInputTuner", "Radio", 10, 300, "101");
				content.append(button);
				
				button = webiopi().createSequenceButton("soundInputVCR", "Input PC", 27, 300, "101");
				content.append(button);
				
				button = webiopi().createSequenceButton("soundInputCD", "Input PS3", 22, 300, "101");
				content.append(button);
				
				button = webiopi().createSequenceButton("soundInputPhono", "Turntable", 9, 300, "101");
				content.append(button);
        	
			
			
			
			//This code makes the button class reflect the state of the GPIO pin	
        		w().refreshGPIO(true);
        });
		
		function tvPower() {
			webiopi().digitalWrite(2,0);//turn on power supply
			webiopi().outputSequence(7,500,"101");//wait 300ms, button press for 500ms, wait 300ms
			webiopi().digitalWrite(2,1);//turn off power supply
			
		}
		function tvInput() {
			webiopi().digitalWrite(2,0);//turn on power supply
			webiopi().outputSequence(11,500,"101");//wait 300ms, button press for 500ms, wait 300ms
			webiopi().digitalWrite(2,1);//turn off power supply
			
		}
		
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
	
