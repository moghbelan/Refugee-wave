"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-50 via-slate-400 via-40%  to-neutral-200 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-bold hover:text-blue-500">
            Refugee Wave
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full bg-white lg:w-auto lg:bg-transparent`}
        >
          <li>
            <Link href="/" className="block px-4 py-2 hover:text-blue-500">
              Home
            </Link>
          </li>
          {session && (
            <li>
              <Link
                href="/news"
                className="block px-4 py-2 hover:text-blue-500"
              >
                News
              </Link>
            </li>
          )}
          {session && (
            <li>
              <Link
                href="/article"
                className="block px-4 py-2 hover:text-blue-500"
              >
                Article
              </Link>
            </li>
          )}
          {session && (
            <li>
              <Link
                href="/letter"
                className="block px-4 py-2 hover:text-blue-500"
              >
                Letter
              </Link>
            </li>
          )}
        </ul>

        {/* Login / Logout Buttons */}
        <div className="lg:flex space-x-4">
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-black px-4 py-2 rounded hover:text-blue-700"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/auth"
              className="text-black px-4 py-2 hover:text-blue-700"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
