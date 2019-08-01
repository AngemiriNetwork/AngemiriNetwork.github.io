// function test() {
//   var user_input = document.getElementById("search").value;
//   alert(user_input);
//   document.getElementById("apiresponses").innerHTML = user_input;
// }

function makeAnimeRequest() {
  var user_input = document.getElementById("search").value;
  alert(user_input);

	var query = "https://kitsu.io/api/edge/anime?filter[genres]=" + user_input;
  alert(query)

	query = query.replace(/ /g, "%20")


	questionRequest = new XMLHttpRequest();

	// Step 1: Switch this last condition to TRUE
	// This changes the call from synchronous to
	// an asynchronous call.
	questionRequest.open('GET', query, true);

	// Step 2: Add an onload function to process
	// what happens when we send the HTTP Request.
	questionRequest.onload = processQuestionRequest

	questionRequest.send();
}

function processQuestionRequest() {
	// Step 3: In the onload function, we wait
	// until the request is complete.
	if(questionRequest.readyState != 4) {
		return;
	}

	// Step 4: Once the request is completed,
	// We look for errors.
	if (questionRequest.status != 200 || questionRequest.responseText === "") {
	 	alert("We were unable to find your requested question!");
	 	return;
	}


	// Step 5: Now that the errors are gone, we add
	// in what happens when the request succeeds.
  // alert(questionRequest.responseText)
	var questionInformation = JSON.parse(questionRequest.responseText);
  // alert(questionInformation.data[0].attributes.titles.en_jp);
  titles = [];
  // var i;
  // for (i = 0; i <  .length; i++)

for(i in questionInformation)   {
titles.appen  questionInformation.data[j].attributes.titles.en_jp;

}
  document.getElementById("apiresponses").innerHTML = titles;
}

// window.onload = init;
