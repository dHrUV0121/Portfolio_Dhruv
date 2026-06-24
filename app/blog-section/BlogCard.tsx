import { blogProps } from "./blogDetails";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogCard = ({
  title,
  date,
  url,
  available,
  index,
  role,
  company,
  bullets,
}: blogProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="flex w-full flex-col gap-4 rounded-2xl border border-[#212531] bg-[#13141a] p-6 md:p-8"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
          <p className="text-[13px] font-semibold uppercase tracking-wider text-[#e4ded7]/50">
            {date}
          </p>
        </div>
        {url && (
          <Link
            href={url}
            target="_blank"
            className="text-[13px] font-medium text-emerald-400 underline underline-offset-2 hover:no-underline"
          >
            View →
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-[20px] font-bold text-[#e4ded7] md:text-[22px] lg:text-[24px]">
          {title}
        </h3>
        <p className="text-[14px] font-medium text-[#e4ded7]/60 md:text-[15px]">
          {company}
        </p>
      </div>

      {bullets && bullets.length > 0 && (
        <ul className="flex flex-col gap-2 mt-2">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[13px] font-normal leading-relaxed text-[#e4ded7]/70 md:text-[14px]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e4ded7]/30"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default BlogCard;
