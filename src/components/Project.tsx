import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

interface ProjectCardProps {
  title: string;
  description: string;
  delay: number;
  has3DModel?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, delay, has3DModel = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      className="w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
    >
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-3">{description}</p>

      {has3DModel && (
        <Canvas className="w-full h-64 mt-6 rounded-lg">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} args={[1, 1, 1]}>
            <meshStandardMaterial color="skyblue" />
          </Box>
          <Box position={[1.2, 0, 0]} args={[1, 1, 1]}>
            <meshStandardMaterial color="tomato" />
          </Box>
          <OrbitControls />
        </Canvas>
      )}
    </motion.div>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="">

      <div className="mt-10 flex flex-wrap justify-around gap-12">
        {/* Project 1 */}
        <ProjectCard
          title="Interactive 3D Website"
          description="Integrated Three.js with React.js to create an interactive 3D website. Users can rotate and zoom 3D models in real-time. Optimized for mobile and desktop devices with smooth transitions."
          delay={0.5}
          has3DModel={true}
        />

        {/* Project 2 */}
        <ProjectCard
          title="Animated UI with Framer Motion"
          description="Developed smooth UI animations with Framer Motion for a React app. Used to enhance interactions such as button presses, modal animations, and page transitions, improving the overall user experience."
          delay={1}
        />

        {/* Project 3 */}
        <ProjectCard
          title="Full Stack Web App (Next.js & MongoDB)"
          description="Built a Full Stack Web Application using Next.js for SSR and MongoDB as the database. Integrated authentication and deployed on Vercel for seamless performance with responsive UI."
          delay={1.5}
          has3DModel={true}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
