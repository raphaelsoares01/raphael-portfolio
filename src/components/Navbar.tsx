export default function Navbar() {
  return (
    <nav className="flex justify-center mt-8">
        <div className="bg-white border border-gray-200 rounded-full px-6 py-3 flex gap-8 w-fit fixed">
        <a href="#" className="text-black hover:text-gray-400 transition-colors">
            Home
        </a>

        <a href="#" className="text-black hover:text-gray-400 transition-colors">
            About
        </a>

        <a href="#" className="text-black hover:text-gray-400 transition-colors">
            Skills
        </a>

        <a href="/projects" className="text-black hover:text-gray-400 transition-colors">
            Projects
        </a>

        <a href="#" className="text-black hover:text-gray-400 transition-colors">
            Contact
        </a>
        </div>
    </nav>
  );
}