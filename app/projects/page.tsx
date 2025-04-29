import Image from 'next/image';
import ProjectFilter from './components/ProjectFilter';

// Categories for filtering
const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'robotics', name: 'Robotics' },
    { id: 'software', name: 'Software' },
    { id: 'research', name: 'Research' }
];

const projects = [
    {
        id: 1,
        title: 'Unitree H1-2 Dashboard',
        description: 'A live dashboard for monitoring and controlling the Unitree H1-2 humanoid robot. Features real-time telemetry, state visualization, and command interfaces for research at the Correll Lab.',
        longDescription: 'This project provides a comprehensive web interface for monitoring and controlling the Unitree H1-2 humanoid robot. Researchers and operators can view real-time telemetry data, visualize the robot\'s state, and send commands through an intuitive interface. The dashboard includes modules for joint positions, IMU data, power management, and task scheduling.',
        technologies: 'React, ROS 2, WebSockets, Three.js',
        imageUrl: '/api/placeholder/600/400',
        category: 'robotics',
        featured: true,
        status: 'In Progress',
        github: 'https://github.com/ranegray/unitree-dashboard'
    },
    {
        id: 2,
        title: 'Pan-Tilt Active Sensing',
        description: 'Enhancing humanoid robot perception with a dynamic pan-tilt system for more natural and responsive environmental scanning.',
        longDescription: 'This project implements an active sensing system for humanoid robots using a pan-tilt mechanism. By mimicking human head movements, the system provides more natural and responsive environmental scanning. The implementation includes hardware design, control algorithms, and integration with the robot\'s perception stack. The system uses visual saliency models to guide attention, allowing the robot to focus on relevant features in its environment.',
        technologies: 'ROS 2, Python, C++, Computer Vision',
        imageUrl: '/api/placeholder/600/400',
        category: 'robotics',
        featured: true,
        status: 'Planning',
        github: 'https://github.com/ranegray/pan-tilt-sensing'
    },
    {
        id: 3,
        title: 'Imitation Learning System',
        description: 'Implementation of imitation learning techniques to allow humanoid robots to learn complex movements from human demonstrations.',
        longDescription: 'This project explores imitation learning techniques for humanoid robots, focusing on learning complex movements from human demonstrations. The system captures human motion data, processes it for robot compatibility, and trains models that can replicate these movements on robotics hardware. The implementation includes data collection pipelines, neural network architectures for movement prediction, and safety-aware execution on physical robots.',
        technologies: 'PyTorch, Python, Motion Capture',
        imageUrl: '/api/placeholder/600/400',
        category: 'research',
        featured: true,
        status: 'Research',
        github: 'https://github.com/ranegray/imitation-learning'
    },
    {
        id: 4,
        title: 'Hide & Seek Robot',
        description: 'A gamified robotics project using an iRobot Create 3 and Raspberry Pi to build an autonomous system that navigates an apartment.',
        longDescription: 'This project transforms a robotics challenge into an engaging game. Using an iRobot Create 3 and Raspberry Pi 4, I built an autonomous system that can navigate an apartment, recognize objects, and turn everyday object finding into an interactive experience. The robot uses SLAM for navigation, computer vision for object recognition, and a custom interaction system for gameplay mechanics.',
        technologies: 'ROS 2, Python, OpenCV, iRobot Create 3',
        imageUrl: '/api/placeholder/600/400',
        category: 'robotics',
        featured: true,
        status: 'Completed',
        github: 'https://github.com/ranegray/hide-seek-robot'
    },
    {
        id: 5,
        title: 'Robotics Ethics Framework',
        description: 'A practical framework for ethical decision-making in humanoid robotics development and deployment.',
        longDescription: 'This project addresses the ethical challenges in humanoid robotics by developing a practical framework for decision-making throughout the development and deployment lifecycle. The framework covers areas such as privacy, autonomy, safety, and societal impact. It includes assessment tools, implementation guidelines, and case studies drawn from real-world robotics applications.',
        technologies: 'Research, Documentation, Policy Analysis',
        imageUrl: '/api/placeholder/600/400',
        category: 'research',
        featured: false,
        status: 'Ongoing',
        github: 'https://github.com/ranegray/robotics-ethics'
    },
    {
        id: 6,
        title: 'ROS 2 Utilities Library',
        description: 'A collection of reusable components and utilities for ROS 2 robotics development.',
        longDescription: 'This library provides a collection of reusable components and utilities for ROS 2 robotics development. It includes message transformations, sensor data processing, visualization tools, and common robotics algorithms. The goal is to accelerate development by providing tested, documented components that solve common problems in robotics software development.',
        technologies: 'C++, Python, ROS 2',
        imageUrl: '/api/placeholder/600/400',
        category: 'software',
        featured: false,
        status: 'Maintained',
        github: 'https://github.com/ranegray/ros2-utils'
    }
];

export default async function Projects({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    // Await for the searchParams promise to resolve
    const { category } = await searchParams;
    // Get category from URL params or default to 'all'
    const selectedCategory = category || 'all';

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900">
            {/* Main content */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold mb-6">Projects</h1>
                    <p className="text-xl text-zinc-600">
                        Here you&apos;ll find my work in robotics, software development, and research. From humanoid robotics to autonomous systems, these projects explore the future of human-robot interaction.
                    </p>
                </div>

                {/* Category filters */}
                <ProjectFilter categories={categories} selectedCategory={selectedCategory} />


                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-zinc-200"
                        >
                            <div className="h-48 bg-zinc-200 relative">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                            project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-zinc-100 text-zinc-800'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-zinc-600 mb-4">{project.description}</p>
                                <p className="text-zinc-500 text-sm mb-4">
                                    <span className="font-medium">Technologies:</span> {project.technologies}
                                </p>

                                <div className="flex justify-between items-center">
                                    <a
                                        href={`/projects/${project.id}`}
                                        className="text-orange-600 hover:text-orange-700 font-medium"
                                    >
                                        View details
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-500 hover:text-zinc-700"
                                        >
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};
