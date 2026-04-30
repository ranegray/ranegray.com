export type Project = {
  repo: string;
  href: string;
  title: string;
  subtitle: string;
  timeframe: string;
  summary: string;
};

export const projects: Project[] = [
  {
    repo: "ranegray/pincer",
    href: "https://github.com/ranegray/pincer",
    title: "Pincer",
    subtitle: "Vision-to-grasping pipeline for low-cost robotic hardware",
    timeframe: "2026 - Present",
    summary:
      "A perception-to-manipulation system built on xLeRobot hardware with RGB-D sensing, camera-to-base transforms, and task-based inverse kinematics.",
  },
  {
    repo: "ranegray/ros2-racer",
    href: "https://github.com/ranegray/ros2-racer",
    title: "ROS2 Racer",
    subtitle: "Autonomy stack and telemetry dashboard for a small racecar",
    timeframe: "2026",
    summary:
      "A modular ROS 2 workspace for autonomous racing experiments with sensor bringup, reactive navigation, and a live telemetry dashboard.",
  },
  {
    repo: "ranegray/webots_rl",
    href: "https://github.com/ranegray/webots_rl",
    title: "Webots RL",
    subtitle: "Q-learning controller for e-puck track navigation",
    timeframe: "2025",
    summary:
      "A reinforcement learning experiment in Webots that trains an e-puck to navigate a track using discretized infrared observations and reward shaping.",
  },
];
