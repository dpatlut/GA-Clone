console.log("woo")

songLines = [
"Another head hangs lowly",
"Child is slowly taken",
"And the violence caused such silence",
"Who are we mistaking",
"But you see it's not me",
"It's not my family",
"In your head in your head",
"They are fighting",
"With their tanks and their bombs",
"And their bombs and their guns",
"In your head in your head they are crying",
"In your head",
"In your head",
"Zombie zombie zombie ei ei",
"What's in your head",
"In your head.",
"Zombie, zombie, zombie ei, ei, ei, oh do, do, do, do, do, do, do, do",
"Another mother's breaking",
"heart is taken over",
"And the violence causes silence",
"We must be mistaken",
"It's the same old thing since 1916",
"In your head in your head",
"They're still fighting",
"With their tanks and their bombs",
"And their bombs and their guns",
"In your head in your head they are dying",
]


var displayLine = function displayLine(i) {
  console.log(songLines[i]);
  var $newH1 = $('<h1>');
  $newH1.text(songLines[i]);
  $('body').append($newH1);
  incr++;
}

var incr = 0

intervalId = setInterval(displayLine, 500)