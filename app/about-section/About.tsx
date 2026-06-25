import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I BUILD SCALABLE FULL-STACK APPLICATIONS AND INTELLIGENT AI SOLUTIONS."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I'm a Full Stack Developer specializing in the MERN stack, passionate about building production-grade e-commerce platforms, real-time tracking systems, and AI-powered applications that solve real-world problems."
              }
            />
            <AnimatedBody
              text={
                "Graduated with a B.Tech in Computer Science & Engineering (Artificial Intelligence) from KIET Group of Institutions, achieving an overall CGPA of 7.82. Leveraging a strong academic background and practical industry experience, I develop scalable, reliable, and high-quality software solutions."
              }
            />
            <AnimatedBody
              text={
                "I'm an active competitive programmer with 300+ problems solved on LeetCode (1400+ rating) and a Runner-up at Kode Kombat 3.0. I believe in writing clean, efficient code and continuously pushing my problem-solving boundaries."
              }
            />
            <AnimatedBody
              text={
                "I'm always open to exciting collaborations and new opportunities. Whether it's building the next great web app or exploring cutting-edge AI solutions — let's connect and create something impactful."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Languages"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "C/C++, Python, SQL, Java, JavaScript."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Frontend & Backend"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "React.js, Node.js, Express, MongoDB, MySQL, Tailwind CSS, Git, Postman, Linux."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"AI & ML Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "LangChain, LangGraph, Generative AI, Multi-modal AI, Retrieval-Augmented Generation (RAG), Prompt Engineering, Streamlit."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
