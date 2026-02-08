export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <main className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">
	  rane gray
        </h1>
        <p className="text-zinc-600 mb-12">
	i build robots.
        </p>

        <div className="flex justify-between">
          <p className="text-zinc-600">
            <a href="mailto:ranegray@outlook.com" className="text-orange-600 hover:underline">
              ranegray@outlook.com
            </a>
          </p>
          <p className="text-zinc-600">
            <a 
              href="https://github.com/ranegray" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              github.com/ranegray
            </a>
          </p>
          <p className="text-zinc-600">
            <a 
              href="https://linkedin.com/in/ranegray" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              linkedin.com/in/ranegray
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
