import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
    const icons = Object.values(technologies).map(
        (technology) => technology.icon
    );

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Experiences (CONT.)</p>
                <h2 className={styles.sectionHeadText}>Technologies.</h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                <div className="w-full h-[75vh] mx-auto">
                    <BallCanvas icons={icons} />
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
