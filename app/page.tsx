import Navigation from "./Navigation";

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
      <header>
        <Navigation />
      </header>
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
            <a href="/projects" className="text-orange-600 hover:text-orange-700">
              View all →
            </a>
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
            <a href="/blog" className="text-orange-600 hover:text-orange-700">
              View all →
            </a>
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

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-zinc-500">© 2025 Rane Gray</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://x.com/ranegray_" className="text-zinc-500 hover:text-orange-600">
              <span className="sr-only">X.com</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://github.com/ranegray" className="text-zinc-500 hover:text-orange-600">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ranegray" className="text-zinc-500 hover:text-orange-600">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
