"use client";
import Link from "next/link";
import Image from "next/image";
import Social from "./Social";
import { useSession, signOut } from "next-auth/react";
export default function Footer() {
  const { data: session } = useSession();
  return (
    <footer className="bg-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <Link
            href="/"
            className="text-xl font-bold mb-2  hover:text-blue-500"
          >
            Refugee Wave
          </Link>
          <h3 className="text-lg font-semibold">Contact Address</h3>
          <p>
            Email:{" "}
            <a href="mailto:nmoghbelan@yahoo.com" className="text-blue-500">
              nmoghbelan@yahoo.com
            </a>
          </p>
          {/* Social Media Icons */}
          <Social></Social>
          <p className="text-sm text-gray-600 mt-20">
            © 2024 Refugee Wave. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end mt-6 md:mt-0">
          {session ? (
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
              Subscribe
            </button>
          ) : (
            <Link
              href="/signup"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
            >
              Subscribe
            </Link>
          )}

          <ul className="mt-4 space-y-2 text-lg font-medium">
            {session && (
              <li>
                <Link href="//" className="text-gray-700 hover:text-blue-500">
                  Home
                </Link>
              </li>
            )}
            {session && (
              <li>
                <Link
                  href="/news"
                  className="text-gray-700 hover:text-blue-500"
                >
                  News
                </Link>
              </li>
            )}
            {session && (
              <li>
                <Link
                  href="/article"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Article
                </Link>
              </li>
            )}
            {session && (
              <li>
                <Link
                  href="/letter"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Letter
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
