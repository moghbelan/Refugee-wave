import Link from "next/link"; // ✅ Import Link
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Refugee Wave</h2>
          <h3 className="text-lg font-semibold">Contact Address</h3>
          <p>
            Email:{" "}
            <a href="mailto:nmoghbelan@yahoo.com" className="text-blue-500">
              nmoghbelan@yahoo.com
            </a>
          </p>
          {/* Social Media Icons */}

          <p className="text-sm text-gray-600 mt-4">
            © 2024 Refugee Wave. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end mt-6 md:mt-0">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
            Subscribe
          </button>
          <ul className="mt-4 space-y-2 text-lg font-medium">
            <li>
              <Link href="/news" className="text-gray-700 hover:text-blue-500">
                News
              </Link>
            </li>
            <li>
              <Link
                href="/article"
                className="text-gray-700 hover:text-blue-500"
              >
                Article
              </Link>
            </li>
            <li>
              <Link
                href="/letter"
                className="text-gray-700 hover:text-blue-500"
              >
                Letter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
