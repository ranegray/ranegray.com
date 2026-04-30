export const site = {
  name: "Rane Gray",
  url: "https://ranegray.com",
  email: "ranegray@outlook.com",
  description:
    "Robotics researcher at the Correll Lab, CU Boulder. Embodied agentic AI, perception, and manipulation.",
  location: "Boulder, CO",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/ranegray",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ranegray/",
    },
    {
      label: "Email",
      href: "mailto:ranegray@outlook.com",
    },
  ],
  paper: {
    title:
      "Cutting the Cord: System Architecture for Low-Cost, GPU-Accelerated Bimanual Mobile Manipulation",
    venue: "arXiv · cs.RO · 2026",
    href: "https://arxiv.org/abs/2603.09051",
    authors:
      "Artemis Shaw, Chen Liu, Justin Costa, Rane Gray, Alina Skowronek, Kevin Diaz, Nam Bui, Nikolaus Correll",
  },
  award: {
    title: "1st place, SO-101 + SmolVLA",
    venue: "Hugging Face × LeRobot Hackathon · June 2025",
    description:
      "Fine-tuned SmolVLA on 50 teleoperated drawing demonstrations and evaluated natural-language instruction-following on real SO-101 hardware.",
  },
  lab: {
    name: "Correll Lab, CU Boulder",
    since: "Since February 2025",
    highlights: [
      "Head and neck pan-tilt subsystem for the Unitree H1-2 humanoid, from mechanism design through ROS 2 control and platform validation.",
      "Apple Vision Pro teleoperation interface for the H1-2 with head and pose tracking, building on the Open-Television line of work.",
      "YOLO-seg perception pipeline for detecting and segmenting screws in cluttered scenes, feeding downstream manipulation for EV battery disassembly.",
    ],
  },
  previously:
    "Ten years in the Air Force and Colorado Air National Guard as an F-16 avionics systems expert. Led a 23-person team sustaining mission-ready aircraft across Arizona, South Korea, Germany, and Colorado.",
} as const;
