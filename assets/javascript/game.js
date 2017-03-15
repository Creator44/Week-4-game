<script type="text/javascript">

var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var counter = 0;

var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {


	var imageCrystal = $("<img>");


	imageCrystal.addClass("crystal-image");

	imageCrystal.attr("src", "assets/images/crystal-blue.jpg");

	imageCCrystal.attr("data-crystalvalue", numberOptions[i]);

	$("#crystals").append(imageCrytal);
	}

	$(".crystal-image").on("click", function()	{

		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);

		counter += crystalValue;

	alert("new score: " + counter);

	if (counter === targetNumber)	{
		alert("You Win");
	}

	else if (counter >= targetNumber) {
		alert("You lose!");
	}

	});


</script>


