let data = [];

$(document).ready(async function () {
  data = await fetch("./data.json").then((res) => res.json());
  console.log(data);
  $("#hamburgerIcon").click(() => {
    $("#menu").show();
    $("#hamburgerIcon").hide();
  });
  $("header #menu .close").click(() => {
    $("#menu").hide();
    $("#hamburgerIcon").show();
  });
});

function pageTo(url) {
  window.location.replace(url);
}
function switchDestination(index) {
  if (!data || !data.destinations) {
    return;
  }
  let contentData = data.destinations[index];
  if (!contentData) {
    console.log("Cannot find data");
    return;
  }
  $("#destination #content #destinationTitle").text(contentData.name);
  $("#destination #image img").attr("src", contentData.images.png);
  $("#destination #content #destinationContent").text(contentData.description);
  $("#destination #content #avgDistance").text(contentData.distance);
  $("#destination #content #estTravelTime").text(contentData.travel);
  $(`#tabs > li > a`).removeClass("active");
  $(`#tabs > li:nth-child(${index + 1}) > a`).addClass("active");
}
function switchCrew(index) {
  if (!data || !data.crew) {
    return;
  }
  let contentData = data.crew[index];
  if (!contentData) {
    console.log("Cannot find data");
    return;
  }
  $("#crew #crewRole").text(contentData.role);
  $("#crew #crewName").text(contentData.name);
  $("#crew #crewBio").text(contentData.bio);
  $("#crew #image img").attr("src", contentData.images.png);
  $(`#dotSwitch > span.dot.active`).removeClass("active");
  $(`#dotSwitch > span.dot:nth-child(${index + 1})`).addClass("active");
}
function switchTech(index) {
  if (!data || !data.technology) {
    return;
  }
  let contentData = data.technology[index];
  if (!contentData) {
    console.log("Cannot find data");
    return;
  }
  $("#technology #techName").text(contentData.name);
  $("#technology #techDesc").text(contentData.description);
  $("#technology #image picture img").attr("srcset", contentData.images.landscape);
  $("#technology #image picture source").attr("srcset", contentData.images.portrait);
  $(`#pagination > span.active`).removeClass("active");
  $(`#pagination > span:nth-child(${index + 1})`).addClass("active");
}
