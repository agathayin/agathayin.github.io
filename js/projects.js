//data
const projects = [
  {
    title: "Inventory Management system",
    imgUrl: "inventory4d/images/cover.png",
    category: "Info",
    link: "inventory4d/index.html",
    description: "MERN & MEAN stack for inventory management and order management systems.",
  },
  {
    title: "Etomon",
    imgUrl: "etomon/img/upcoming_classes.png",
    category: "Info",
    description: "Website pages written in Node, Express, Vanilla Javascript, jQuery and React.",
    link: "/etomon/index.html",
  },
  {
    title: "Product list with cart",
    imgUrl: "images/screenshot_product-list-with-cart.png",
    category: "Programming",
    link: "https://agathayin.net/product-list-with-cart",
    description: "Shopping page built by React, Next.js, TypeScript, and Tailwind CSS",
  },
  {
    title: "Room Homepage",
    imgUrl: "images/room-homepage-preview.jpg",
    category: "Programming",
    link: "https://agathayin.net/news-homepage",
    description: "Responsive homepage layout with slider built with React, Next.js, TypeScript, and Tailwind CSS",
  },
  {
    title: "Sunnyside",
    imgUrl: "sunnyside/images/cover.jpg",
    category: "Programming",
    link: "sunnyside/index.html",
    description: "Landing page with responsive design using Flexbox and CSS Grid",
  },
  {
    title: "Rock Paper Scissors",
    imgUrl: "rock-paper-scissors-master/images/screenshot.png",
    category: "Programming",
    link: "rock-paper-scissors-master/index.html",
    description: "Interactive web game with jQuery, CSS shadows, grid, and animation",
  },

  {
    title: "Real-time clock without hands challenge",
    imgUrl: "images/clock_day.gif",
    category: "Programming",
    link: "clock/myCanvas/index.html",
    description: "Express time with imagination and no numbers and no clock hands",
  },
  {
    title: "Age Calculator",
    imgUrl: "age-calculator-app-main/screenshot.jpg",
    category: "Programming",
    link: "age-calculator-app-main/index.html",
    description: "JavaScript project about time calculation",
  },
  {
    title: "Brochure design",
    imgUrl: "images/media_kit.png",
    category: "Design",
    description: "Brochure design for The Artists Forum film festival",
  },
  {
    title: "The Artists Forum",
    imgUrl: "images/bootstrap.png",
    category: "Programming",
    link: "theartistsforum/index.html",
    description: "Use Bootstrap to create new interface for a current website",
  },
  {
    title: "P5.js data visualization",
    imgUrl: "images/p5.gif",
    category: "Programming",
    link: "fake-news/index.html",
    description:
      "Fake news vs fact-checking data visualization. It uses JavaScript for analyzing and P5.js for visualization.",
  },
  {
    title: "Interactive design and SVG practice",
    imgUrl: "images/harry_potter.png",
    category: "Programming",
    link: "HP/index.html",
    description: "Harry Potter Fanbook website. This project practices JavaScript SVG coding and Illustration.",
  },
  {
    title: "Pod request access landing page",
    imgUrl: "images/pod_request_access.jpg",
    category: "Programming",
    link: "pod/index.html",
    description: "Responsive website with vanilla CSS and JavaScript",
  },

  // {
  //   title: "Design project: Mulan poster",
  //   imgUrl: "images/mulan.png",
  //   category: "Design",
  //   description: "The New School media project. Designed for film Mulan.",
  // },
  // {
  //   title: "CD product design",
  //   imgUrl: "images/CD Cover & Posters.png",
  //   category: "Design",
  //   description: "The New School media project: cd poster and cover design.",
  // },
  // {
  //   title: "Forum-style web design",
  //   imgUrl: "images/catsyard.png",
  //   category: "Programming",
  //   link: "http://www.livelanguage.com/yiny/index.html",
  //   description: "Catsyard: a place for meow lovers. This project uses HTML, CSS, and JavaScript.",
  // },
  // {
  //   title: "Javascript storytelling: choice tree",
  //   imgUrl: "images/love_choice_cover.png",
  //   category: "Programming",
  //   link: "LC/index.html",
  //   description:
  //     "Interactive website game. Based on the existing game. All images and the story belong to Akaba Studio. This project only aims to improve coding skills in creating complex tasks.",
  // },
  {
    title: "Coming Soon",
    imgUrl: "base-apparel-coming-soon-master/images/hero-desktop.jpg",
    category: "Programming",
    link: "base-apparel-coming-soon-master/index.html",
    description: "Customized input box and form validation using JavaScript",
  },
  {
    title: "News Homepage",
    imgUrl: "images/screenshot_news-homepage.png",
    category: "Programming",
    link: "https://agathayin.net/news-homepage",
    description: "React news website layout built with Tailwind CSS",
  },
  {
    title: "Intro Section with Dropdown Navigation",
    imgUrl: "images/screenshot_intro.png",
    category: "Programming",
    link: "https://agathayin.net/intro-section-with-dropdown-navigation",
    description: "React navigation bar with dropdown menu on both desktop and mobile",
  },
  {
    title: "URL Shortening",
    imgUrl: "images/screenshot_url-shortening.png",
    category: "Programming",
    link: "https://agathayin.net/url-shortening",
    description: "LocalStorage and API project built with React, Next.js, TypeScript, and Tailwind CSS",
  },
  {
    title: "Space Tourism",
    imgUrl: "space-tourism/assets/home/background-home-desktop.jpg",
    category: "Programming",
    link: "space-tourism/index.html",
    description: "Responsive website with CSS and jQuery",
  },
];

$(function () {
  projectList();
  $(".close").click(function () {
    $("#photoModal").hide();
  });
  $(".modal-content").blur(function () {
    $("#photoModal").hide();
  });
  $("#photoModal").on("click", function (e) {
    if (!$(e.target).closest($("#photoModalImg")).length) {
      $("#photoModal").hide();
    }
  });
});

function projectList() {
  if (projects && projects.length) {
    let projectList = projects.map((data, index) => {
      return (
        `
                <div class="project">
                    <img src=" ` +
        data.imgUrl +
        `" />
                    <div class="text">
                        <div class="title">` +
        data.title +
        `</div>
                        <div class="description">` +
        data.description +
        `</div>
                        ` +
        renderLink(data, index) +
        `
                    </div>
                </div>
            `
      );
    });

    $("#projects").html(projectList);
  }
}
function renderLink(data, index) {
  if (data.category === "Design") {
    return (
      `
        <button class="preview" onclick="showImage(` +
      index +
      `)">Preview</button>`
    );
  }
  if (data.category === "Programming" && data.link) {
    return `<a class="demo" href="` + data.link + `" target="_blank">Live</a>`;
  }
  if (data.category === "Info" && data.link) {
    return `<a class="demo" href=${data.link}>More Info</a>`;
  }
  return ``;
}

function showImage(index) {
  console.log(projects[index].imgUrl);
  $("#photoModal").show();
  $("#photoModalImg").attr("src", projects[index].imgUrl);
}
