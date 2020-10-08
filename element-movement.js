//GRADUALLY CHANGE COLOR
function gradeColor(elementId, step, startColorHex, endColorHex)//clorHexes are without '#' symbol (,,0x113344, 0xFF0088) 
{
	var valueVar = startColorHex;
	//console.log("valuVar: " + valueVar);
	//console.log("valuVar: " + valueVar.toString(16));
	//console.log("endColorHex: " + endColorHex);
	//console.log("endColorHex: " + endColorHex.toString(16));
	const interID = setInterval(gradeC,step);
	function gradeC(){
		if(valueVar == endColorHex){
			//console.log("exiting loop");
			return clearInterval(interID);
		}
		/*step = (256*256*256); //+ (256*256)*5 + 256*5;
		console.log(step);*/
		/*if(startColorHex < endColorHex){*/
			//dif = Math.abs(endColorHex - valueVar)
			const rClr = 256*256;
			const gClr = 256;
			const bClr = 1; 

			

			//console.log("rColor: " + rColor.toString(16));

			let bDif = (endColorHex-valueVar)%256;
			let gDif = ((endColorHex-valueVar)%(256*256) - bDif)/256;
			let rDif = ((endColorHex-valueVar)%(256*256*256) - gDif*256 - bDif)/(256*256);
			
			

			/*console.log("rDif: " + rDif.toString(16));// ψονσολε.λογ
			console.log("gDif: " + gDif.toString(16));
			console.log("bDif: " + bDif.toString(16));*/
			

			let rStep = 0;
			let gStep = 0;
			let bStep = 0;
			if(rDif > 0){
				rStep = rClr;
			}else if(rDif < 0){
				rStep = -rClr;
			}

			if(gDif > 0){
				gStep = gClr;
			}else if(gDif < 0){
				gStep = -gClr;
			}

			if(bDif > 0){
				bStep = bClr;
			}else if(bDif < 0){
				bStep = -bClr;
			}

			let changeStep = rStep + gStep + bStep;

			valueVar += changeStep; 
			//console.log("valuVar: " + valueVar.toString(16));

			bClrVar = valueVar%256
			gClrVar = (valueVar%(256*256) - bClrVar)/256;
			rClrVar = (valueVar%(256*256*256) - gClrVar*256 - bClrVar)/(256*256);

			/*console.log("bColorVar: " + bClrVar.toString(16) + " dec: " + bClrVar);
			console.log("gColorVar: " + gClrVar.toString(16) + " dec: " + gClrVar);
			console.log("rColorVar: " + rClrVar.toString(16) + " dec: " + rClrVar);*/

			hexString = () => {
				let result = ""
				if(rClrVar<16){
					result += "0"+rClrVar.toString(16);
				}else{
					result += rClrVar.toString(16);
				}
				if(gClrVar<16){
					result += "0"+gClrVar.toString(16);
				}else{
					result += gClrVar.toString(16);
				}
				if(bClrVar < 16){
					result += "0"+bClrVar.toString(16);
				}else{
					result += bClrVar.toString(16);
				}
				return result;
			}

			//console.log("hexString: " + hexString());
			elementId.style.color = `#${hexString()}`;
			//console.log("dif: " + dif + " changeStep: " + changeStep);
		
		//elementId.style.color = startColorHex < endColorHex ? `#${Number(valueVar+=changeStep).toString(16)}` : `#${Number(valueVar-=changeStep).toString(16)}`;
		//console.log("element color: " + elementId.style.color);	
	}	
}

//MOVE LEFT-RIGHT
function moveLeftRight(elementId, timeStep, startPosition, finishPosition){//start and finish are the pixel values of top property, step is the ms interval
	var currPosition = startPosition;
	const interID = setInterval(move,timeStep);

	function move(){
		if(currPosition == finishPosition) return clearInterval(interID);
		elementId.style.left = startPosition < finishPosition ? 
			`${++currPosition}%` : `${--currPosition}%`	
	}
}

//MOVE UP-DOWN
function moveUpDown(elementId, timeStep, startPosition, finishPosition){//start and finish are the pixel values of top property, step is the ms interval
	var currPosition = startPosition;
	const interID = setInterval(move,timeStep);
	
	function move(){
		if(currPosition == finishPosition) return clearInterval(interID);
		elementId.style.top = startPosition < finishPosition ? 
			`${++currPosition}px` : `${--currPosition}px`	
	}
}

//ACCELERATED MOVEMENT LEFT-RIGHT
function accMoveLeftRight(elementId, timeStep, startPosition, finishPosition){//start and finish are the percentage values of left property, step is the ms interval
	var currPosition = startPosition;
	const interID = setInterval(move,timeStep);

	var acceleration=0;
	function move()
	{
		console.log(elementId + " currPosition: " + currPosition + " finishPosition: " + finishPosition);
		if(startPosition<finishPosition)
		{
			if(currPosition>=finishPosition) return clearInterval(interID);
			elementId.style.left = (currPosition+=(acceleration+=1)) < finishPosition ? 
				`${currPosition}%` : `${finishPosition}%`;
		}else
		{
			if(currPosition<=finishPosition) return clearInterval(interID);
			elementId.style.left = (currPosition-=(acceleration+=1)) > finishPosition ? 
				`${currPosition}%` : `${finishPosition}%`;
		}	
	}	
}


//ACCELERATED MOVEMENT UP-DOWN
function accMoveUpDown(elementId, timeStep, startPosition, finishPosition) //start and finish are the percentage values of left property, step is the ms interval
{
	var currPosition = startPosition;
	const interID = setInterval(move,timeStep);
	
	var acceleration = 3;
	function move()
	{
		
		if(startPosition<finishPosition)
		{
			if(currPosition>=finishPosition) return clearInterval(interID);
			elementId.style.top = (currPosition+=(acceleration+=3)) < finishPosition ? 
				`${currPosition}px` : `${finishPosition}px`;
		}else{
			if(currPosition<=finishPosition) return clearInterval(interID);
			elementId.style.top = (currPosition-=(acceleration+=3)) > finishPosition ? 
				`${currPosition}px` : `${finishPosition}px`;	
		}
	}	
}

//console.log(elementId + " currPosition: " + currPosition + " finishPosition: " + finishPosition);