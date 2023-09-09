export const projectData = [
  {
    id: 1,
    src: "fakebook.PNG",
    title: "Fakebook",
    summary:
      "A Full Stack MERN social media application which replicates the popular Facebook platform with modern technologies   ",
    description:
      "A Live Full Stack social media application which utilizes the MERN stack and popular web technologies to create a replica of the popular " +
      'social media platform "Facebook". Features include user authentication/registration, communication between friends, ' +
      "submitting public news feed posts, and a modern UI following best industry practices. For the full design document please click the code link below.",
    stack: ["MongoDB", "Express", "React", "Node", "MUI", "Redux", "AWS"],
    liveDemoLink: "https://master.d2v83wrsmysfjd.amplifyapp.com/",
    codeLink: "https://github.com/nickroxcks/Fakebook_client",
    transition: "right",
  },
  {
    id: 2,
    src: "Buber.png",
    title: "BUber",
    summary: "Data Analytics Web Application for indivdual VDPS hardware units",
    description:
      "Uber is a popular mobile app that allows it's users to travel to any local destination with just a few clicks.  While this is very useful, can we do better? Introducing " +
      "Buber, otherwise known as Better Uber. BUber utilizes google cloud technologies along with easy to navigate user interfaces to give it's users a cleaner experience. Features of the app include " +
      "live location tracking of riders and drivers, optimal route finding, payment transactions, and more. ",
    stack: ["Java", "Google Cloud", "Android Studio", "Firebase"],
    liveDemoLink: null,
    codeLink: "https://github.com/LukeDelaCruz/VDPS",
    transition: "left",
  },
  {
    id: 3,
    src: "VDPSOverview.png",
    title: "Voice Direction Processing System (VDPS)",
    summary: "Data Analytics Web Application for indivdual VDPS hardware units",
    description:
      "The VDPS was a response to a proposal made by University Professor Steven Knudsen to create a system capable of detecting voices within a small room. Each VDPS hardware unit was capable of detecting sounds, pinpointing the exact direction of each distinct sound, and providing the sound data to the user via an API and web application. The web application was a React app hosted on AWS, and each hardware unit ran built in python scripts to connect the device to the webapp. By using the web application the user could remotely control every device registered under their name, view directional data of each sound using a custom made UI compass, apply sound filters, and manage all their devices on a clean dashboard. The system was scalable in that users could purchase hundreds of VDPS hardware units and manage each device using a very friendly user interface.",
    stack: ["Python", "AWS", "React", "Node"],
    liveDemoLink: null,
    codeLink: "https://github.com/nickroxcks/VDPS_Public",
    transition: "right",
  },
  {
    id: 4,
    src: "dragonShell.png",
    title: "Dragon Shell",
    summary:
      "DragonShell is a command line application written in C++ which allows its users to interact with their operating system and perform standard OS level commands.",
    description:
      "DragonShell is a command line application written in C++ which allows its users to interact with their operating system and perform standard OS level commands. " +
      "Includes common commands such as cd, ls, pwd, etc. The command line also allows users to execute programs, pipe commands together, run commands saved in path directories, and much more." +
      " Created for the purpose of learning, and understanding at the OS level what happens behind the scenes when terminal commands are run. This application uses system calls which run at the lowest OS level" +
      " to perform commands and interact directly with the operating system",
    stack: ["C++", "Linux", "System Calls", "OS Design"],
    liveDemoLink: null,
    codeLink: "https://github.com/nickroxcks/DragonShell.git",
    transition: "left",
  },
];

export const skillsData = [
  {
    id: 1,
    title: "Technical Skills",
    skillsList: [
      "React",
      "Express",
      "MondoDB",
      "Node",
      "Angular",
      "Html5",
      "Css",
      "Javascript",
      "Python",
      "Java",
      "C++",
      "SQL",
    ],
    color: "#0f1624",
    //color: "linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)",
    transition: "up",
  },
  {
    id: 2,
    title: "Knowledgebase",
    skillsList: [
      "Algorithms and Data Structures",
      "Full Stack Development",
      "Software Engineering Design",
      "Project Management",
      "Operating Systems Design",
      "Artificial Intelligence",
      "Mobile Development",
      "Cloud Infrastructure",
      "Computer Architecture",
      "Networking",
      "Circuits",
      "Engineering Physics",
    ],
    color: "#0f1624",
    //color: "linear-gradient(to right bottom, #9b14af, #ea007d, #ff4c45, #fa9405, #d1d01b)",
    transition: "down",
  },
  {
    id: 3,
    title: "Other Skills",
    skillsList: [
      "Git",
      "CI/CD",
      "Testing",
      "Docker",
      "JIRA",
      "Figma",
      "Clarizen",
      "Vs Code",
      "AWS Technologies",
      "VHDL",
      "Flutter",
      "Dart",
    ],
    color: "#0f1624",
    //color: "linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    transition: "up",
  },
];
