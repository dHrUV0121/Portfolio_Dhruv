import { reviewProps } from "./reviewDetails";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";

const ReviewCard = ({
  name,
  role,
  company,
  testimonial,
  index,
}: reviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="flex flex-col gap-3 rounded-2xl border border-[#212531] bg-[#13141a] p-6 md:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="text-[28px] md:text-[32px]">{name.split(" ")[0]}</span>
        <div className="flex flex-col">
          <h4 className="text-[16px] font-bold text-[#e4ded7] md:text-[18px]">
            {name.split(" ").slice(1).join(" ")}
          </h4>
          <p className="text-[13px] font-medium text-[#e4ded7]/60 md:text-[14px]">
            {role}
          </p>
        </div>
      </div>
      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#e4ded7]/40">
        {company}
      </p>
      <p className="mt-1 text-[14px] font-normal leading-relaxed text-[#e4ded7]/70 md:text-[15px]">
        {testimonial}
      </p>
    </motion.div>
  );
};

export default ReviewCard;
