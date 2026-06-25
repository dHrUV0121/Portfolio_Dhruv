export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Sambhojanam",
    description:
      "A production-grade MERN e-commerce grocery platform with scalable REST APIs for product catalog, cart logic, and order lifecycle management. Features JWT-based authentication, role-based access control, responsive React + Tailwind frontend, and MongoDB Atlas cloud deployment.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/dHrUV0121",
    demo: "https://github.com/dHrUV0121",
    image: require("./../../public/projects/sambhojanam.png"),
    available: true,
  },
  {
    id: 1,
    name: "Smart Bus Management",
    description:
      "A real-time bus tracking and route optimization system with ETA predictions and centralized route management. Integrated Dijkstra's algorithm for GPS routing, reducing average student wait times by 73%. Built role-based dashboards and deployed on Vercel, Render, and MongoDB Atlas.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/SaxenaPrashast/KIET-Traveller",
    demo: "https://github.com/SaxenaPrashast/KIET-Traveller",
    image: require("./../../public/projects/smart-bus.png"),
    available: true,
  },
  {
    id: 2,
    name: "VidQuery AI",
    description:
      "A multimodal Video RAG backend using Python and Google Gemini, enabling natural language querying of video content. Features robust video ingestion pipeline via Gemini's File API, stateful streaming conversational backend with session persistence, and Streamlit-based interactive UI.",
    technologies: ["Python", "Google Gemini", "Streamlit"],
    github: "https://github.com/dHrUV0121/Video_Rag",
    demo: "https://github.com/dHrUV0121/Video_Rag",
    image: require("./../../public/projects/image.png"),
    available: true,
  },
];
