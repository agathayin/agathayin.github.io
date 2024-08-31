//data
const photos = [
  // {title:'Brochure design', url: 'images/media_kit.png', category: 'Design'},
  // {title:'Design project: Mulan poster', url: 'images/mulan.png', category: 'Design'},
  { title: "Interactive design and SVG practice", url: "images/harry_potter.png", category: "Programming" },
  { title: "Real-time clock without hands challenge", url: "images/clock_day.gif", category: "Programming" },
  { title: "The Artists Forum", url: "images/bootstrap.png", category: "Programming" },
  { title: "P5.js data visualization", url: "images/p5.gif", category: "Programming" },
  { title: "CD product design", url: "images/CD Cover & Posters.png", category: "Design" },
];
const skills = [
  { category: "design", name: "photoshop", score: 5, imgUrl: "images/skills/photoshop.jpg" },
  { category: "design", name: "illustrator", score: 4, imgUrl: "images/skills/illustrator.png" },
  { category: "design", name: "indesign", score: 4, imgUrl: "images/skills/indesign.png" },
  { category: "design", name: "premiere", score: 3, imgUrl: "images/skills/premiere.png" },
  { category: "design", name: "figma", score: 4, imgUrl: "images/skills/figma.png" },
  { category: "design", name: "xd", score: 4, imgUrl: "images/skills/xd.png" },
  { category: "programming", name: "html", score: 4, imgUrl: "images/skills/html5.png" },
  { category: "programming", name: "css", score: 4, imgUrl: "images/skills/css3.jpg" },
  { category: "programming", name: "javascript", score: 4, imgUrl: "images/skills/js.png" },
  { category: "programming", name: "jQuery", score: 4, imgUrl: "images/skills/jquery.png" },
  { category: "programming", name: "react", score: 4, imgUrl: "images/skills/react.png" },
  { category: "programming", name: "node", score: 4, imgUrl: "images/skills/node.jpg" },
  { category: "programming", name: "mongodb", score: 4, imgUrl: "images/skills/mongodb.png" },
  { category: "programming", name: "git", score: 4, imgUrl: "images/skills/git.png" },
  { category: "programming", name: "App Script", score: 4, imgUrl: "images/skills/Google_Apps_Script.png" },
  { category: "programming", name: "Extension", score: 3, imgUrl: "images/skills/chrome_extension.png" },
];
const experience = [
  {
    yearfrom: 2021,
    yearTo: "today",
    category: "job",
    title1: "Fifth Ave Fair",
    title2: "Junior Front End & Full Stack Developer",
    description: [
      "Update content for website, email, and other digital channels.",
      "Assist with the maintenance, support and development of our internal and external websites and solutions. Contribute ideas and feedback on current and future website content and web design.",
    ],
  },
  {
    yearfrom: 2020,
    yearTo: 2021,
    category: "job",
    title1: "Etomon",
    title2: "Frontend developer",
    description: [
      "Implement responsive websites from concept through development",
      "Maintain, optimize, and troubleshoot websites",
      "collaborate with team members to assess UI and UX designs",
    ],
  },
  {
    yearfrom: 2019,
    yearTo: 2019,
    category: "job",
    title1: "The Artists Forum",
    title2: "Graphic and Web Design intern",
    description: [
      "Graphic design for brochures and merchandise",
      "Make the current website responsive for mobile devices",
      "Collaborate with colleagues and create new website",
    ],
  },
  {
    yearfrom: 2017,
    yearTo: 2019,
    category: "edu",
    title1: "The New School",
    title2: "Master of Arts, Media Studies",
    description:
      "Graphic and Web Design, Data mining and analysis, Programming and transforming data into visualization, Technology developments",
  },
  {
    yearfrom: 2011,
    yearTo: 2015,
    category: "edu",
    title1: "Communication University of China",
    title2: "Bechelor of Arts, Dutch language and literature",
    description: "Dutch Linguistics, Politics, Economy and Culture of the Netherlands and Belgium, Translation Skills",
  },
  {
    yearfrom: 2011,
    yearTo: 2015,
    category: "edu",
    title1: "Communication University of China",
    title2: "Journalism",
    description: "Journalism Theory and History, News Writing and Interview Skills, New Media Skills",
  },
];

$(function () {
  photoGallery();
  skillsList();
  experienceTimeline();
});

function photoGallery() {
  if (photos && photos.length) {
    let photoList = photos.map((photo) => {
      return (
        `<div class="photoWrapper">
                        
                        <img src="` +
        photo.url +
        `" />
                        <div class="text">
                            <div class="title">` +
        photo.title +
        `</div>
                            <div class="category">` +
        photo.category +
        `</div>
                        </div>
                    </div>`
      );
    });
    $("#photoGallery").html(photoList);
  }
}
function skillsList() {
  if (skills && skills.length) {
    let designSkills = skills
      .filter((skill) => skill.category === "design")
      .map((skill) => {
        return (
          `<div class="skillsWrapper">
                        <img src="` +
          skill.imgUrl +
          `" />
                        <div class="text">
                            <div class="title">` +
          skill.name +
          `</div>
                        </div>
                    </div>`
        );
      });
    $('[rel="designSkills"]').html(designSkills);

    let programmingSkills = skills
      .filter((skill) => skill.category === "programming")
      .map((skill) => {
        return (
          `<div class="skillsWrapper">
                        <img src="` +
          skill.imgUrl +
          `" />
                        <div class="text">
                            <div class="title">` +
          skill.name +
          `</div>
                        </div>
                    </div>`
        );
      });
    $('[rel="programmingSkills"]').html(programmingSkills);
  }
}

function experienceTimeline() {
  if (experience && experience.length) {
    let experienceTimeline = experience.map((exp, index) => {
      return (
        `
                    <div class="experienceWrapper ` +
        exp.category +
        `">
                        <div class="year">` +
        exp.yearfrom +
        " - " +
        exp.yearTo +
        `</div>
                        <div class="title1">` +
        exp.title1 +
        `</div>
                        <div class="title2">` +
        exp.title2 +
        `</div>` +
        renderDescripttion(exp) +
        `
                    </div>
                `
      );
    });

    $("#timeline").html(experienceTimeline);
  }
}
function renderDescripttion(data) {
  if (data.category === "edu") {
    return `<div class="description">` + data.description + `</div>`;
  } else if (data.category === "job") {
    let list = data.description.map((data) => {
      return `<li>` + data + `</li>`;
    });
    return `<div class="description"><ul>` + list.join("") + `</ul></div>`;
  }
}
