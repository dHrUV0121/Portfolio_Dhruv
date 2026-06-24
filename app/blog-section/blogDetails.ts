export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
  index: number;
  role: string;
  company: string;
  bullets: string[];
};

export const blogDetails = [
  {
    title: "Full Stack Developer (MERN)",
    role: "Full Stack Developer",
    company: "Sambhojanam — eCommerce Grocery Startup",
    image: "",
    date: "Ongoing",
    url: "https://github.com/dHrUV0121",
    available: true,
    bullets: [
      "Architected and developing a production-grade MERN e-commerce platform from scratch",
      "Designing scalable REST APIs for product catalog, cart logic and order lifecycle management using Node.js, Express, and MongoDB",
      "Implementing JWT-based authentication and role-based access control for customers and admin dashboard",
      "Building responsive frontend using React.js and Tailwind CSS with optimized state management",
      "Deploying backend services on cloud infrastructure with MongoDB Atlas",
    ],
  },
  {
    title: "Google Design & Animation Intern",
    role: "Design & Animation Intern",
    company: "SK Associates & Group",
    image: "",
    date: "Apr 2024 — Jun 2024",
    url: "",
    available: true,
    bullets: [
      "Designed 8 animated explainer videos for promotional campaigns",
      "Streamlined feedback workflows, reducing revision turnaround time by 30%",
    ],
  },
];
