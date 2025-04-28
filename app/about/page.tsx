import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900">
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-6">About Me</h1>
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <div className="aspect-square relative rounded-lg overflow-hidden bg-zinc-200">
                                <Image
                                    src="/headshot.jpeg"
                                    alt="Rane Gray"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <p className="text-xl text-zinc-600 mb-6">
                                👋 Hey, I&apos;m Rane Gray — CS student @ CU Boulder building open-source tools for humanoid robots.
                            </p>
                            <p className="text-zinc-600 mb-4">
                                I&apos;m passionate about creating technologies that bridge the gap between advanced robotics research and practical applications. Currently working with the Correll Lab on humanoid robotics projects, with a focus on developing interfaces and control systems for the Unitree H1-2 platform.
                            </p>
                            <p className="text-zinc-600">
                                My academic journey combines computer science fundamentals with specialized coursework in robotics, machine learning, and human-computer interaction. I believe in the power of open-source development to accelerate innovation in robotics.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Research & Work section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-zinc-900">Research & Work</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900">Correll Robotics Lab</h3>
                        <p className="text-zinc-600 mb-4">
                            As a research assistant at the Correll Lab, I work on humanoid robotics projects using the Unitree H1-2 platform. My primary focus areas include:
                        </p>
                        <ul className="list-disc list-inside text-zinc-600 space-y-2 mb-4">
                            <li>Developing a live dashboard for monitoring and controlling the Unitree H1-2</li>
                            <li>Designing a pan-tilt mechanism for active environmental sensing</li>
                            <li>Implementing imitation learning algorithms for natural movement generation</li>
                            <li>Contributing to open-source robotics software libraries for the broader community</li>
                        </ul>
                        <p className="text-zinc-600">
                            This work combines hardware integration, software development, and human-robot interaction research to advance the capabilities of humanoid robotics systems.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900">Previous Projects</h3>
                        <div className="mb-5">
                            <h4 className="font-medium text-zinc-900 mb-2">Hide & Seek Robot</h4>
                            <p className="text-zinc-600">
                                A gamified robotics project combining ROS 2, computer vision, and interactive gameplay using an iRobot Create 3 and Raspberry Pi 4 to build an autonomous system that can navigate an apartment, recognize objects, and turn everyday object finding into an engaging game.
                            </p>
                        </div>
                        <Link href="/projects" className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center">
                            View all projects
                            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Vision section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-zinc-900">My Vision for Humanoid Robotics</h2>
                    <div className="bg-orange-50 rounded-lg p-6">
                        <p className="text-zinc-700 mb-4">
                            I believe humanoid robots represent a transformative technology that can enhance human capabilities rather than replace them. My vision centers on three core principles:
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Accessibility & Openness</h3>
                                <p className="text-zinc-600">
                                    Creating open-source tools and interfaces that democratize access to advanced robotics technology, enabling broader participation in robotics research and development.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Human-Centered Design</h3>
                                <p className="text-zinc-600">
                                    Developing robots that complement human abilities, respect human autonomy, and integrate seamlessly into environments designed for humans without requiring extensive modification.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Ethical Development</h3>
                                <p className="text-zinc-600">
                                    Advancing robust ethical frameworks that address issues of privacy, security, and safety while ensuring that robotics development aligns with human values and societal needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-zinc-900">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-zinc-900 mb-4">Software Development</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-medium text-zinc-900 mb-1">Programming Languages</h4>
                                    <p className="text-zinc-600">Python, C++, JavaScript, TypeScript</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-zinc-900 mb-1">Web Technologies</h4>
                                    <p className="text-zinc-600">React, Next.js, Node.js, WebSockets</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-zinc-900 mb-1">Data & ML</h4>
                                    <p className="text-zinc-600">PyTorch, NumPy, Pandas, Computer Vision</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-zinc-900 mb-4">Robotics</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-medium text-zinc-900 mb-1">Frameworks & Tools</h4>
                                    <p className="text-zinc-600">ROS 2, MuJoCo, OpenCV</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-zinc-900 mb-1">Hardware Platforms</h4>
                                    <p className="text-zinc-600">Unitree H1-2, iRobot Create 3, Raspberry Pi</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-zinc-900 mb-1">Concepts</h4>
                                    <p className="text-zinc-600">SLAM, Motion Planning, Imitation Learning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-zinc-900">Education</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <h3 className="text-lg font-semibold text-zinc-900">Bachelor of Science in Computer Science</h3>
                            <div className="text-zinc-500">2023 - Present</div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div className="text-zinc-700">University of Colorado Boulder</div>
                            <div className="text-zinc-600 italic">Expected graduation: 2027</div>
                        </div>
                        <p className="text-zinc-600 mb-4">
                            Focusing on algorithms, linear algebra, robotics, and artificial intelligence coursework. Active participant in robotics research through the Correll Lab.
                        </p>
                        <div className="text-zinc-600">
                            <h4 className="font-medium text-zinc-900 mb-2">Relevant Coursework:</h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Algorithms and Data Structures</li>
                                <li>Linear Algebra for Computer Science</li>
                                <li>Introduction to Robotics</li>
                                <li>Machine Learning Fundamentals</li>
                                <li>Computer Vision</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Connect section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-zinc-900">Let&apos;s Connect</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-zinc-600 mb-6">
                            I&apos;m always open to collaboration, discussions about robotics, or answering questions about my research. Feel free to reach out through any of the following channels:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a href="mailto:ranegray@outlook.com" className="flex items-center text-zinc-700 hover:text-orange-600 transition-colors">
                                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                ranegray@outlook.com
                            </a>
                            <a href="https://github.com/ranegray" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-700 hover:text-orange-600 transition-colors">
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                github.com/ranegray
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-700 hover:text-orange-600 transition-colors">
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-700 hover:text-orange-600 transition-colors">
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                X.com
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
