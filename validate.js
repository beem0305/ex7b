function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
    alert("Student ID must be 10 characters");
	return true;
  } else {
	if(!/^[0-9]+$/.test(sid)){
        alert("Student ID must contain only numbers (0-9)");
        return false;
    	}
	return false;
	}
}
function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi < 1 || candi > 10 ) {
	alert("Candidate No. must be a number between 1 and 10");
    return false;
  } else {
	
    return true;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}