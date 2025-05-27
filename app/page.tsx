import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
}

const ProjectCard = ({ title, description, technologies }: ProjectCardProps) => (
  <div className="border border-zinc-200 rounded-lg p-6 hover:border-orange-600 transition-all hover:shadow-md">
    <h3 className="text-xl font-medium text-zinc-900 mb-2">{title}</h3>
    <p className="text-zinc-600 mb-4">{description}</p>
    <div className="text-sm text-zinc-500">
      <span className="font-medium">Technologies:</span> {technologies}
    </div>
  </div>
);

interface BlogPostProps {
  title: string;
  excerpt: string;
}

const BlogPost = ({ title, excerpt }: BlogPostProps) => (
  <div className="mb-6">
    <h3 className="text-lg font-medium text-zinc-900 hover:text-orange-600 transition-colors">
      <a href="#">{title}</a>
    </h3>
    <p className="text-zinc-600 mt-1">{excerpt}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero section */}
        <section className="py-16">
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight mb-4">
            👋 Hey, I&apos;m Rane Gray — CS student @ CU Boulder building open-source tools for humanoid robots.
          </h1>
          <p className="text-xl text-zinc-600">
            Working on innovative projects at Correll Lab with the Unitree H1-2 platform to advance human-robot interaction and controls.
          </p>
        </section>
        {/* Projects section */}
        <section className="py-8 border-t border-zinc-200">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl font-bold">Projects</h2>
            <Link href="/" className="text-orange-600 hover:text-orange-700">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Unitree H1-2 Dashboard"
              description="A live dashboard for monitoring and controlling the Unitree H1-2 humanoid robot, providing real-time telemetry and command interfaces."
              technologies="React, ROS 2, WebSockets, Three.js"
            />
            <ProjectCard
              title="Pan-Tilt Active Sensing"
              description="Enhancing humanoid robot perception with a dynamic pan-tilt system for more natural and responsive environmental scanning."
              technologies="ROS 2, Python, C++, Computer Vision"
            />
            <ProjectCard
              title="Imitation Learning System"
              description="Implementation of imitation learning techniques to allow humanoid robots to learn complex movements from human demonstrations."
              technologies="PyTorch, Python, Motion Capture"
            />
            <ProjectCard
              title="Hide & Seek Robot"
              description="A gamified robotics project using an iRobot Create 3 and Raspberry Pi to build an autonomous system that navigates an apartment."
              technologies="ROS 2, Python, OpenCV, iRobot Create 3"
            />
          </div>
        </section>

        {/* Blog section */}
        <section className="py-8 border-t border-zinc-200">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl font-bold">Latest Writing</h2>
            <Link href="/" className="text-orange-600 hover:text-orange-700">
              View all →
            </Link>
          </div>

          <div>
            <BlogPost
              title="Putting Together a Mobile Robotics Lab for My Small Apartment"
              excerpt="How I built a compact, adaptable space for robotics experimentation without turning my living room into a workshop."
            />
            <BlogPost
              title="Humanizing Robotics: Breaking Down the Fear of Humanoid Systems"
              excerpt="Addressing common misconceptions about humanoid robots and why they're vital for advancing human-robot interaction."
            />
            <BlogPost
              title="Ethics in Robotics: Drawing the Lines for Autonomous Systems"
              excerpt="Exploring the ethical frameworks needed as robots become increasingly capable and integrated into society."
            />
          </div>
        </section>

        {/* About section */}
        <section className="py-8 border-t border-zinc-200">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-zinc-600 mb-4">
            I build things with computers and robots. Currently studying algorithms, linear algebra, and logic at CU Boulder while working with the Correll Lab on humanoid robotics research.
          </p>
          <p className="text-zinc-600">
            My focus is developing practical, accessible tools that bridge the gap between advanced robotics research and real-world applications. I&apos;m particularly interested in robot ethics and creating technology that enhances rather than replaces human capabilities.
          </p>
        </section>

        {/* Contact section */}
        <section className="py-8 border-t border-zinc-200">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-zinc-600 mb-2">
            Email: <a href="mailto:ranegray@outlook.com" className="text-orange-600 hover:underline">ranegray@outlook.com</a>
          </p>
          <p className="text-zinc-600 mb-2">
            GitHub: <a href="https://github.com/ranegray" className="text-orange-600 hover:underline">ranegray</a>
          </p>
        </section>
      </main>


    </div>
  );
}
