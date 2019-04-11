

function fortune(){
  var children = document.forms["fortuneForm"]["children"].value;
  var partnersName = document.forms["fortuneForm"]["partnersName"].value;
  var geographicLocation = document.forms["fortuneForm"]["geographicLocation"].value;
  var jobTitle = document.forms["fortuneForm"]["jobTitle"].value

  if(jobTitle[0]=='A'||jobTitle[0]=='a'){
    var aOrAn = 'an ';
  } else{
    var aOrAn = 'a ';
    }
document.getElementById("yourFortune").innerHTML = "You will be " + aOrAn + jobTitle + " in " +
  geographicLocation + ", and married to " + partnersName + " with "
  + children + " kid(s).";
}

function ranFortune(){
  var partnersName = ['Tiffany','Harry','Sally','John','Sylvia','Tony','Mary','Sam','Samantha','Alex'];
  var geographicLocation = ['USA','Hong Kong','Turkey','Africa','Austria','Japan','Canada','India','Iceland','Brazil'];
  var jobTitle = ['Carpenter','Actor','Fortune Teller','Bartendar','Begger','Professor','Dancer','Computer Programer','Swimming Coach'];

  var randPart = partnersName[Math.floor(Math.random() * partnersName.length)];
  var randChild = Math.floor(Math.random() *101);
  var randGeo = geographicLocation[Math.floor(Math.random() * partnersName.length)];
  var randJob = jobTitle[Math.floor(Math.random() * jobTitle.length)];

  if(randJob[0]=='A'|| randJob[0]=='a'){
    var aOrAn = 'an ';
  } else{
    var aOrAn = 'a ';
  }

  document.getElementById("yourFortune").innerHTML = "You will be "+ aOrAn + randJob + " in " +
    randGeo + ", and married to " + randPart + " with "
    + randChild + " kid(s).";
}

//<img src="crystal.gif" alt ="crystal ball">
