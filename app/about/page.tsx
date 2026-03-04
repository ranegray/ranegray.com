export default function AboutPage() {
  return (
    <div className="leading-[1.8]">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl mb-8">
        about
      </h1>

      <p className="mb-6">
        i&apos;m rane gray, CS student at CU Boulder building open-source tools
        for humanoid robots. i work with the Correll Lab on the Unitree H1-2
        platform, developing interfaces and control systems for humanoid
        robotics research.
      </p>

      <p className="mb-6">
        my work combines software development with hands-on robotics. i build
        dashboards for robot telemetry, design sensing mechanisms, and implement
        imitation learning algorithms. i believe in open-source development as
        the path to making robotics accessible.
      </p>

      <p className="mb-6">
        outside the lab, i&apos;m building RGRL, an indie robotics research lab
        operating out of my apartment in Boulder. the goal is simple: lower the
        barrier to entry for robotics, share what i learn, and build in the
        open.
      </p>

      <p className="text-fg-dim">
        i work with python, c++, typescript, ROS 2, pytorch, and whatever else
        the problem demands.
      </p>
    </div>
  );
}
