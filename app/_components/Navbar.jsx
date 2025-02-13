import Link from "next/link";
export default function Nanbar() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center" role="navigation">
          {/* Logo */}
          <div>
            <span className="text-xl font-medium">Refugee-Wave</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <Link href="/news" className="hover:text-blue-500">
                News
              </Link>
            </li>
            <li>
              <Link href="/article" className="hover:text-blue-500">
                Article
              </Link>
            </li>
            <li>
              <Link href="/letter" className="hover:text-blue-500">
                Letter
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-500">
              Log in
            </Link>
            <Link href="#" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
