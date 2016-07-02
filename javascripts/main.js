/**
 * Author credit
 * JavaScript below created by Will Moore
 * http://codepen.io/willthemoor/pen/dooRag
 * Requires jQuery
 * Highlights the li tag containing the active input field
 * Only works on input field, textarea does not highlight li
 */
 /*
 check input box for numbers only
 */
 function isNumberKey(evt){
     var charCode = (evt.which) ? evt.which : event.keyCode
     if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
         return false;
     return true;
 }
 /*
 Reset function
 */
 function resetValues(){
 	var frm = document.getElementsByName('test')[0];
 	//frm.submit(); // Submit
 	frm.reset();  // Reset
 	//return false; // Prevent page refresh
 }

 /*
 Proper Value validator function
 */
 function properValue(a){
 	alert("Enter proper value in: " + a)
 	document.getElementById("demo").innerHTML = "Enter proper value in "+ a + " eg: A+, A, B+, B, C+, C, D+, D, E, N, thank you.";
 	var frm = document.getElementsByName('test')[0];
 	frm.submit(); // Submit
 	frm.reset();  // Reset
 	//return false; // Prevent page refresh
 }
 /*
Sorry function (takes input from input id's and displays which inputbox it is from )
 */
 function sorryIam(b){
 	document.getElementById("demo").innerHTML ="Sorry, you can't choose Comp Sci in management stream because your "+ b +" is lower than required."
 }

/*
check Fucntion
*/
function checkFunction()
{
	var rawval = document.getElementById("egrade").value;
	var trimedval =$.trim(rawval)
	var egrade = trimedval.toUpperCase();

	var rawval = document.getElementById("ngrade").value;
	var trimedval = $. trim(rawval)
	var ngrade = trimedval.toUpperCase();

	var rawval = document.getElementById("mgrade").value;
	var trimedval = $. trim(rawval)
	var mgrade = trimedval.toUpperCase();

	var rawval = document.getElementById("scigrade").value;
	var trimedval = $. trim(rawval)
	var scigrade = trimedval.toUpperCase();

	var rawval = document.getElementById("socgrade").value;
	var trimedval = $. trim(rawval)
	var socgrade = trimedval.toUpperCase();

	var gpa= document.getElementById("gpa").value;
    // Validate data first
    if (!egrade)
	{
        alert("Fill your english grade");

        // Stop the execution
        return false;
    }
	else if (!ngrade)
	{
        alert("Fill your nepali grade");

        // Stop the execution
        return false;
    }
	else if (!mgrade)
	{
        alert("Fill your maths grade");

        // Stop the execution
        return false;
    }
	else if (!scigrade)
	{
        alert("Fill your science grade");

        // Stop the execution
        return false;
    }
	else if (!socgrade)
	{
        alert("Fill your social grade");

        // Stop the execution
        return false;
    }
	else if (!gpa)
	{
        alert("Fill your gpa");

        // Stop the execution
        return false;
    }
    if(egrade == "A+" || egrade == "A" || egrade == "B+" || egrade =="B" || egrade =="C+" || egrade=="C" || egrade=="D+" )
	{
    	if(ngrade == "A+" || ngrade == "A" || ngrade == "B+" || ngrade =="B" || ngrade =="C+" || ngrade=="C" || ngrade=="D+"  )
		{
			if(mgrade == "A+" || mgrade == "A" || mgrade == "B+" || mgrade =="B" || mgrade =="C+" || mgrade=="C" || mgrade=="D+" )
			{
				if(scigrade == "A+" || scigrade == "A" || scigrade == "B+" || scigrade =="B" || scigrade =="C+" || scigrade=="C" || scigrade=="D+" )
				{
					if(socgrade == "A+" || socgrade == "A" || socgrade == "B+" || socgrade =="B" || socgrade =="C+" || socgrade=="C" || socgrade=="D+"  )
					{
						if (gpa >=1.6)
						{
							document.getElementById("demo").innerHTML = "Congratulation you can choose Computer Science as a subject in management stream! ";
						}
						else
						{
							sorryIam("GPA");
						}
					}
					else if (socgrade=="D" || socgrade=="E" || socgrade=="N" )
					{
						sorryIam("Social Studies grade");
					}
					else
					{
						properValue("Social Studies grade");
					}

				}
				else if (scigrade=="D" || scigrade=="E" || scigrade=="N" )
				{
					sorryIam("Science grade");
				}
				else
				{
					properValue("Science grade");
				}
			}
			else if (mgrade=="D" || mgrade=="E" || mgrade=="N" )
			{
				sorryIam("Maths grade");
			}
			else
			{
				properValue("Maths grade");
			}
		}
		else if (ngrade=="D" || ngrade=="E" || ngrade=="N" )
		{
			sorryIam("Nepali grade");
		}
		else
		{
			properValue("Nepali grade");
		}
    }
    else if (egrade=="D" || egrade=="E" || egrade=="N")
	{
		sorryIam("English grade");
    }
    else
	{

		properValue("English grade!");
    }
}


var hocusPocus = function(evt) {

		// Where did the event come from?
		var $target = $(evt.target);

		// Avoid recursion
		if ($target.parents('.active').length) {
				return false;
		}

		// Highlight the outer box
		$target.closest('li').addClass('active');

};
/*
var cleanUp = function(evt) {
		// Clean up form 'active' state.
		// Called on blur instead of focus because the form can lose focus.
		// Avoids stragglers.
		$('form').find('.active').removeClass('active');
};
*/

$('input')
		.on('focus', hocusPocus)
		.on('blur', cleanUp);

$('textarea')
		.on('focus', hocusPocus)
		.on('blur', cleanUp);

