var sliderMood;
var $xmlList;

// let the user upload a file and read it in
function readText(filePath) {
  var xmlFile = event.target.files;
  var fileReader = new FileReader();
  fileReader.readAsText(xmlFile[0]);
  fileReader.onload = function() {
      var xml = new DOMParser().parseFromString(this.result, "text/xml");
      $xmlList  = $(xml.documentElement);
      console.log(xml.documentElement);
  }
  // Once content is uploaded change text and add 'next' button
   $("#sliders-paragraph").text("Now use the sliders to describe your mood.");
   $("#next").text("Next");
}

// functions for each of the sliders
function agitatedCalmProgrammes(value){
  if (value == 0){
    sliderMood = "Agitated";
  }
  if (value == 2){
    sliderMood = "Calm";
  }
  processXML($xmlList, sliderMood);
}
function happySadProgrammes(value){
  if (value == 0){
    sliderMood = "Happy";
  }
  if (value == 2){
    sliderMood = "Sad";
  }
  processXML($xmlList, sliderMood);
}
function tiredWideAwakeProgrammes(value){
  if (value == 0){
    sliderMood = "Tired";
  }
  if (value == 2){
    sliderMood = "Wide Awake";
  }
  processXML($xmlList, sliderMood);
}
function scaredFearlessProgrammes(value){
  if (value == 0){
    sliderMood = "Scared";
  }
  if (value == 2){
    sliderMood = "Fearless";
  }
  processXML($xmlList, sliderMood);
}

// look through the XML file
function processXML($xmlList,sliderMood) {
  var i =0;
    $($xmlList).find('programme').each(function(){
        var $programme  = $(this);
        var name    = $programme.find("name").text();
        var image   = $programme.find("image").text();
        var mood    = $programme.find("mood").text();

        console.log($programme);
        if(mood == sliderMood){
          i++;
        //populate image/title fields
        $("#description" + i).text(name);
        $("#image" + i ).attr("src", image);
      }
    });
}
