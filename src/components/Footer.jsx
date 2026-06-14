export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Ong Azis Saliem. All rights reserved.
        </p>
        <p className="text-xs text-zinc-500">
          Built with{" "}
          <a href="https://tailwindcss.com" rel="noopener noreferrer" target="_blank" className="hover:text-sky-500 transition-colors">Tailwind CSS</a>
          {" "}&amp;{" "}
          <a href="https://react.dev" rel="noopener noreferrer" target="_blank" className="hover:text-sky-500 transition-colors">React</a>
        </p>
      </div>
    </footer>
  );
}