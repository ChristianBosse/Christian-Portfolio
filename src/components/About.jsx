import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <>
            <Tilt className="xs:w-[250px] w-full">
                <motion.div
                    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                    <div
                        options={{ max: 45, scale: 1, speed: 450 }}
                        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                    >
                        <img
                            src={icon}
                            alt={title}
                            className="w-16 h-16 object-contain"
                        />
                        <h3 className="text-white text-[20px] font-bold text-center">
                            {title}
                        </h3>
                    </div>
                </motion.div>
            </Tilt>
        </>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a highly skilled Full-Stack web developer with three years
                of professional experience in the industry. My expertise
                includes a wide range of languages and technologies such as
                JavaScript, React, Three.js, Next.js, Framer Motion, Python,
                PHP, Tailwind CSS, WordPress, Node.js, AJAX, jQuery, and more.
                I'm passionate about building beautiful, efficient, and
                user-friendly websites and web applications that meet and exceed
                clients expectations. Throughout my career, I've demonstrated my
                ability to work collaboratively with clients and team members to
                deliver high-quality solutions on time and within budget. I'm a
                quick learner who stays up-to-date with the latest industry
                trends and best practices to provide innovative and effective
                solutions. If you're looking for a reliable and skilled
                Full-Stack web developer who can deliver exceptional results,
                I'm the right person for your project.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
