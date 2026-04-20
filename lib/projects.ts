export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  timeframe: string;
  summary: string;
  tags: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "xlerobot-platform",
    title: "xLeRobot Platform",
    subtitle: "Computer Vision + Object Grasping",
    timeframe: "Dec 2025 - Present",
    summary:
      "RGB-D perception-to-grasp pipeline for a 6-DoF arm using Intel RealSense, point-cloud filtering, and kinematics-aware motion commands.",
    tags: ["RGB-D", "Intel RealSense", "Point Clouds", "Pinocchio", "PINK"],
    highlights: [
      "Built an RGB-D perception-to-grasp pipeline with Intel RealSense to localize objects and execute grasps on a 6-DoF arm.",
      "Implemented point-cloud filtering and segmentation to produce stable grasp targets under clutter, noise, and lighting variation.",
      "Leveraged Pinocchio and PINK for forward and inverse kinematics to convert camera-frame targets into arm-frame motion commands.",
    ],
  },
  {
    slug: "irobot-create-3",
    title: "iRobot Create 3",
    subtitle: "ROS 2 Navigation + Mapping",
    timeframe: "June 2025",
    summary:
      "ROS 2 navigation stack on Raspberry Pi 4 with RPLidar integration, 2D SLAM, and repeatable occupancy-map generation in RViz.",
    tags: ["ROS 2", "Raspberry Pi 4", "RPLidar A1M8", "SLAM", "RViz"],
    highlights: [
      "Built a ROS 2 stack on Raspberry Pi 4 for the Create 3, integrating RPLidar A1M8 and publishing LiDAR scans for downstream mapping and localization.",
      "Implemented 2D SLAM and validated mapping in RViz, producing consistent occupancy maps across multiple indoor environments.",
    ],
  },
  {
    slug: "mobile-robot-rl",
    title: "Mobile Robot RL",
    subtitle: "Gymnasium + Q-Learning",
    timeframe: "Nov 2025",
    summary:
      "Tabular Q-learning workflow in Webots for an e-puck robot, covering reward shaping, hyperparameter tuning, and repeated-trial evaluation.",
    tags: ["Webots", "Gymnasium", "Q-Learning", "e-puck", "Reinforcement Learning"],
    highlights: [
      "Implemented tabular Q-learning from scratch in Webots with a Gymnasium-style training loop to train an e-puck to navigate a track.",
      "Defined state and action spaces, shaped rewards, tuned hyperparameters, and evaluated performance across repeated trials.",
    ],
  },
];
