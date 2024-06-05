export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Hey there! I'm Kaisar Rashid from J&K. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b5.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 lg:row-span-7   md:col-span-3 md:row-span-2 lg:min-h-[80vh] ",
    imgClassName: "",
    titleClassName: "justify-start bottom-[112px] left-[18px]",
    img: "",
    spareImg: "",
  },
 
  {
    id: 5,
    title: "Currently pursuing a BCA at CASET College of Computer Science and Engineering",
    description: "",
    className: "md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-3 ",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center text-sm",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Connect with Me",
    description: "",
    className: "lg:col-span-5 max-h-[30vh] md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [         
  {
    id: 1,
    title: "FeastFest: A Food Lover's Haven",
    des: "I created FeastFest using React.js, styled with Tailwind CSS, and navigated with React Router. Explore diverse recipes and culinary features on my portfolio..",
    img: "/FoodWebLogo.png",
    iconLists: ["/re.svg", "/tail.svg", ],
    link: "https://foodies-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];




export const workExperience = [
  {
    id: 1,
    title: "HTML & CSS",
    desc: "Proficient in HTML and CSS, I build the structural and stylistic foundation of web pages",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "JavaScript & React.js",
    desc: "Skilled in JavaScript for dynamic functionality and React.js for efficient, reusable components.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Tailwind CSS & Bootstrap",
    desc: "Utilized Tailwind CSS for utility-first styling and Bootstrap for responsive layouts.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Next.js",
    desc: "Leveraged for server-side rendering and static site generation to enhance performance and SEO.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url:"https://github.com/Kaisar-Rashid",
  },
  {
    id: 2,
    img: "/twit.svg",
    url:"https://x.com/Kaisarashid",
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/kaisarrashid/",
  },
];