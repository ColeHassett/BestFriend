//Data set to store all options and responses and dynamically create the form
var DATA = [
  //Start
  {"name":"start",
  "question":"Is your best friend male or female?",
  "options":[{"name":"male","text":"Male"},{"name":"female", "text":"Female"}]},
  //First Responses
  {"name":"male",
  "question":"What kind of facial hair does he have?",
  "options":[{"name":"mustache","text":"Mustache"},{"name":"beard", "text":"Beard"},{"name":"sideburns", "text":"Sideburns"}]},
  {"name":"female",
  "question":"Does she wear jewelry, or maybe have a tattoo?",
  "options":[{"name":"necklace","text":"Necklace"},{"name":"tattoo", "text":"Tattoo"},{"name":"earrings", "text":"Earrings"}]},
  //Second Responses
  {"name":"mustache",
  "question":"What is his favorite neckwear?",
  "options":[{"name":"tie","text":"Tie"},{"name":"bowtie", "text":"Bowtie"},{"name":"bolotie", "text":"Bolo Tie"}]},
  {"name":"beard",
  "question":"What kind of hats does he like to wear?",
  "options":[{"name":"baseball","text":"Baseball Hat"},{"name":"flat", "text":"Flat Cap"},{"name":"beanie", "text":"Beanie"}]},
  {"name":"sideburns",
  "question":"What kind of sunglasses does he normally wear?",
  "options":[{"name":"aviators","text":"Aviators"},{"name":"raybans", "text":"Ray-Bans"},{"name":"sport", "text":"Sport Shades"}]},
  {"name":"necklace",
  "question":"What is her favorite fancy hat?",
  "options":[{"name":"tiara","text":"Tiara"},{"name":"crown", "text":"Crown"},{"name":"tophat", "text":"Top Hat"}]},
  {"name":"tattoo",
  "question":"What kind of hat does she normally wear?",
  "options":[{"name":"fedora","text":"Fedora"},{"name":"floppy", "text":"Floppy Hat"},{"name":"flower", "text":"Flower Crown"}]},
  {"name":"earrings",
  "question":"What other piercings does she have?",
  "options":[{"name":"nose","text":"Nose Piercing"},{"name":"eyebrow", "text":"Eyebrow Piercing"},{"name":"lip", "text":"Lip Piercing"}]},
  //Final answers
  {"name":"tie",
  "answer":"Your best friend is Brad Pitt",
  "image":"images/bradpitt.jpg"},
  {"name":"bowtie",
  "answer":"Your best friend is Steve Harvey",
  "image":"images/steveharvey.jpg"},
  {"name":"bolotie",
  "answer":"Your best friend is Johnny Depp",
  "image":"images/johnnydepp.jpg"},
  {"name":"baseball",
  "answer":"Your best friend is Drake",
  "image":"images/drake.jpg"},
  {"name":"flat",
  "answer":"Your best friend is Leonardo Dicaprio",
  "image":"images/leonardodicaprio.jpg"},
  {"name":"beanie",
  "answer":"Your best friend is Ben Afleck",
  "image":"images/benafleck.jpg"},
  {"name":"aviators",
  "answer":"Your best friend is Elvis Presley",
  "image":"images/elvispresley.jpg"},
  {"name":"raybans",
  "answer":"Your best friend is Danny Masterson",
  "image":"images/dannymasterson.jpg"},
  {"name":"sport",
  "answer":"Your best friend is Greg Wise",
  "image":"images/gregwise.jpg"},
  {"name":"tiara",
  "answer":"Your best friend is Princess Madeleine",
  "image":"images/princessmadeleine.jpg"},
  {"name":"crown",
  "answer":"Your best friend is Amy Willerton",
  "image":"images/amywillerton.jpg"},
  {"name":"tophat",
  "answer":"Your best friend is Taylor Swift",
  "image":"images/taylorswift.jpg"},
  {"name":"fedora",
  "answer":"Your best friend is Beyonce",
  "image":"images/beyonce.jpg"},
  {"name":"floppy",
  "answer":"Your best friend is Kate Moss",
  "image":"images/katemoss.jpg"},
  {"name":"flower",
  "answer":"Your best friend is Vanessa Hudgens",
  "image":"images/vanessahudgens.jpg"},
  {"name":"nose",
  "answer":"Your best friend is Scarlett Johansson",
  "image":"images/scarlettjohansson.jpg"},
  {"name":"eyebrow",
  "answer":"Your best friend is Fergie",
  "image":"images/fergie.jpg"},
  {"name":"lip",
  "answer":"Your best friend is Cara Delevingne",
  "image":"images/caradelevingne.jpg"}
];

//Global variable to hold the value of the current selected index of DATA
var curr;

//Initial function to build the first drop down onload of web page
function start() {

  var body = document.getElementsByTagName("body")[0];

  var h1 = document.createElement("h1");
  var h1text = document.createTextNode("Discover Your Best Friend!");
  h1.appendChild(h1text);

  var wrap = document.createElement("div");
  wrap.setAttribute("id", "wrapper");

  var div = document.createElement("div");
  var head = document.createElement("h2");
  var title = document.createTextNode(DATA[0].question);

  var button = document.createElement("button");
  var buttontext = document.createTextNode("Reset");
  button.setAttribute('onclick', 'window.location.reload()');
  button.appendChild(buttontext);

  div.setAttribute('id', 'div1');

  head.appendChild(title);
  div.appendChild(head);
  wrap.appendChild(div);
  body.appendChild(h1);
  getName();
  body.appendChild(wrap);
  body.appendChild(button);

  var dropdown = document.createElement("select");
  dropdown.setAttribute('id', 'drop1');
  dropdown.setAttribute('onchange', 'getValue(drop1)');

  var blank = document.createElement("option");
  blank.setAttribute('value', 'none');
  var blankText = document.createTextNode("Select One");
  blank.appendChild(blankText);

  var male = document.createElement("option");
  male.setAttribute('value', DATA[0].options[0].name);
  var maleText = document.createTextNode(DATA[0].options[0].text);
  male.appendChild(maleText);

  var female = document.createElement("option");
  female.setAttribute('value', DATA[0].options[1].name);
  var femaleText = document.createTextNode(DATA[0].options[1].text);
  female.appendChild(femaleText);

  dropdown.appendChild(blank);
  dropdown.appendChild(male);
  dropdown.appendChild(female);
  div.appendChild(dropdown);

}

//Function to check if cookies or local storage is being used and then
//create a small div at the top of the page to display the last person
//using the page and the image they chose
function getName() {

  if (navigator.userAgent.indexOf('Trident') != -1 ) {

    if (document.cookie) {

      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');

      var name = ca[0].substring(5);

      var x = document.createTextNode(name + " Made the Last Choice!\n");
      var div = document.createElement("div");
      div.setAttribute('id', 'prevdiv');
      var head = document.createElement("h2");
      var body = document.getElementsByTagName("body")[0];

      head.appendChild(x);
      div.appendChild(head);
      body.appendChild(div);

    }
    else {

      var x = document.createTextNode("No submissions received yet!");
      var div = document.createElement("div");
      div.setAttribute('id', 'prevdiv');
      var head = document.createElement("h2");
      var body = document.getElementsByTagName("body")[0];

      head.appendChild(x);
      div.appendChild(head);
      body.appendChild(div);

    }

  }

  else {

    if (localStorage.name) {

      var x = document.createTextNode(localStorage.name + "'s Choice Was:\n");
      var img = document.createElement('img');
      img.setAttribute('src', 'images/' + localStorage.choice)
      var div = document.createElement("div");
      div.setAttribute('id', 'prevdiv');
      var head = document.createElement("h2");
      var body = document.getElementsByTagName("body")[0];

      head.appendChild(x);
      div.appendChild(head);
      div.appendChild(img);
      body.appendChild(div);

    }
    else {

      var x = document.createTextNode("No submissions received yet!");
      var div = document.createElement("div");
      div.setAttribute('id', 'prevdiv');
      var head = document.createElement("h2");
      var body = document.getElementsByTagName("body")[0];

      head.appendChild(x);
      div.appendChild(head);
      body.appendChild(div);

    }

  }

}

//Function to set the attribute of each dropdown to allow for resetting when changing the choice
//Distinguishes between whether a new drop down should be created of the form is ending
function getValue(drop) {

  var x = drop.value;
  var currselect = drop.id;

  drop.setAttribute('onchange', 'reset(' + currselect + ')');

  getNext(x);

  if (curr.answer) {

    last(x);

  }
  else {

    create(x);

  }

}

//Function to retrieve what option was chosen and assign it to the global variable
function getNext(choice) {

  for (var i = 0; i < DATA.length; i++) {

    if (DATA[i].name == choice) {

      curr = DATA[i];

    }

  }

}

//Function to create the final output when all dropdowns have been selected
function last(choice) {

  form();

  var wrap = document.getElementById("wrapper");
  var div = document.createElement("div");
  var head = document.createElement("h2");
  var resulthead = document.createElement("h3");
  var title = document.createTextNode(curr.answer + "!");
  var image = document.createElement("img");
  var i = 0;

  head.setAttribute('id', 'finalh2');

  div.setAttribute('id', 'finaldiv');
  image.setAttribute("src", curr.image);
  head.appendChild(title);
  div.appendChild(image);
  div.appendChild(head);
  wrap.appendChild(div);

}

//Function to create the form upon completion of all dropdowns
function form() {

  var wrap = document.getElementById("wrapper");
  var div = document.createElement("div");
  var head = document.createElement("h2");
  var title = document.createTextNode("Please Take a Moment to Fill Out the Form Below:");
  var linebreak = document.createElement("br");

  div.setAttribute('id', 'formdiv');

  var form = document.createElement("form");
  form.setAttribute('name', 'form');
  form.setAttribute('onsubmit', 'return validateForm()');

  var name = document.createTextNode("Your Name: ");
  var h3 = document.createElement("h3");
  h3.appendChild(name);

  var namebox = document.createElement("input");
  namebox.setAttribute('type', 'text');
  namebox.setAttribute('name', 'namebox');
  h3.appendChild(namebox);

  var age = document.createTextNode("Your Age: ");
  var h3age = document.createElement("h3");
  h3age.appendChild(age);

  var agebox = document.createElement("input");
  agebox.setAttribute('type', 'text');
  agebox.setAttribute('name', 'agebox');
  h3age.appendChild(agebox);

  var submit = document.createElement("input");
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Submit');

  div.appendChild(linebreak);
  head.appendChild(title);
  form.appendChild(head);
  form.appendChild(h3);
  form.appendChild(h3age);
  form.appendChild(submit);
  div.appendChild(form);
  wrap.appendChild(div);

}

//Function to validate information input into form
//Also distinguishes whether to use cookies or local storage
//and assigns values to either
function validateForm() {

  var name = document.forms["form"]["namebox"].value;
  var age = document.forms["form"]["agebox"].value;
  var letters = /^[A-Za-z\s]+$/;

  if (name == "" || age == "") {

    alert("Name and Age must be filled out");
    return false;

  }
  else if (isNaN(age) || age < 0) {

    alert("Please enter a valid age");
    return false;

  }
  else if (!name.match(letters)) {

    alert("Please enter a valid name");
    return false;

  }
  else {

    alert("Your results have been saved! The form will now reset.");

    if (navigator.userAgent.indexOf('Trident') != -1) {

      var d = new Date();
      d.setDate(d.getDate() + 7);
      console.log(d);

      document.cookie = ("name=" + document.getElementsByTagName('input')[0].value + ";expires=" + d);
      return true;

    }

    else {

      localStorage.setItem("name", document.getElementsByTagName('input')[0].value);
      localStorage.setItem("choice", previous());
      return true;

    }

  }

}

//Function to create each dropdown as long as the end has not been reached
function create(choice) {

  var wrap = document.getElementById("wrapper");
  var div = document.createElement("div");
  var head = document.createElement("h2");
  var title = document.createTextNode(curr.question);

  var droplen = document.getElementsByTagName('select').length;

  div.setAttribute('id', 'div' + (droplen + 1));

  head.appendChild(title);
  div.appendChild(head);
  wrap.appendChild(div);

  var dropdown = document.createElement("select");
  dropdown.setAttribute('id', 'drop' + (droplen + 1));
  dropdown.setAttribute('onchange', 'getValue(' + 'drop' + (droplen + 1) + ')');

  var blank = document.createElement("option");
  blank.setAttribute('value', 'none');
  var blankText = document.createTextNode("Select One");
  blank.appendChild(blankText);

  var opt1 = document.createElement("option");
  opt1.setAttribute('value', curr.options[0].name);
  var opt1Text = document.createTextNode(curr.options[0].text);
  opt1.appendChild(opt1Text);

  var opt2 = document.createElement("option");
  opt2.setAttribute('value', curr.options[1].name);
  var opt2Text = document.createTextNode(curr.options[1].text);
  opt2.appendChild(opt2Text);

  var opt3 = document.createElement("option");
  opt3.setAttribute('value', curr.options[2].name);
  var opt3Text = document.createTextNode(curr.options[2].text);
  opt3.appendChild(opt3Text);

  dropdown.appendChild(blank);
  dropdown.appendChild(opt1);
  dropdown.appendChild(opt2);
  dropdown.appendChild(opt3);
  div.appendChild(dropdown);

}

//Function to keep track of last chosen answer
function previous() {

  var x = curr.answer.substr(20);

  var file = x.replace(/\s+/g, "").toLowerCase();

  file += ".jpg";

  return file;


}


//Function to allow for the form to back track when a dropdown besides the last child is changed
function reset(choice) {

  while (choice.parentNode != choice.parentNode.parentNode.lastChild) {

     choice.parentNode.parentNode.removeChild(choice.parentNode.parentNode.lastChild);

  }

  if (choice.value != 'none') {

    getValue(choice);

  }
  else {}

}
