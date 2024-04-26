import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
const Foot1 = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  return (
    <>
      <div className="min-h-[77vh] flex flex-col min-[804px]:justify-center max-[496px]:h-[100vh]  min-[804px]:items-center min-[804px]:gap-11 max-[804px]:h-[85vh] max-[804px]:mt-[62px] max-[804px]:gap-5">
        <motion.div
          className="w-[80%]"
          ref={element}
          initial={{
            opacity: 0,
          }}
          style={{ opacity: scrollYProgress }}
          whileInView={{
            color: ["#23c45c"],
          }}
          whileHover={{
            scale: 1.2,
            color: ["#23c45c"],
          }}
          
          transition={{
            duration: 5,
            type: "tween",
          }}
        >
          {" "}
          <h1 className="text-[40px] font-semibold text-wrap max-[496px]:text-[30px]">
            Resolve doubts any time through chat, voice notes or calling.
          </h1>
        </motion.div>
        <motion.div
          className="hi w-[80%]"
          initial={{
            opacity: 0,
          }}
          animate={{
            x: ["10%", "20%", "10%"],
          }}
          transition={{
            duration: 5,
            type: "tween",
          }}
          style={{ opacity: scrollYProgress }}
          whileInView={{
            color: ["#817ff7"],
          }}
          whileHover={{
            scale: 1.2,
            color: ["#ef476f"],
          }}
        >
          {" "}
          <h1 className="text-[40px] font-semibold text-wrap max-[496px]:text-[30px]">
            500+ dedicated Teaching Assistants to resolve your doubts quickly
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default Foot1;
