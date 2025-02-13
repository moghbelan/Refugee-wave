import Link from "next/link";
import Image from "next/image";

export default function Famous() {
  return (
    <section className="bg-gray-200 py-16 px-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h3 className="text-3xl font-bold mb-4">Famous Refugee</h3>
        <p className="text-xl font-semibold italic">
          "Bundle of belonging isn’t the only thing a refugee brings to his new
          country."
        </p>
        <p className="text-lg font-medium mt-2">Albert Einstein</p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src="/Albert.svg"
            alt="Famous Refugee 1"
            width={500}
            height={300}
            className="w-full h-52 object-cover"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold">Albert Einstein</h4>
            <p className="text-gray-600 mt-2">
              Theoretical physicist who revolutionized science.
            </p>
            <Link
              href="https://www.google.com/search?q=Albert+Einstein"
              target="_blank"
            >
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src="/Rata-Ora.svg"
            alt="Famous Refugee 2"
            width={500}
            height={300}
            className="w-full h-52 object-cover"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold">Rata Ora</h4>
            <p className="text-gray-600 mt-2">Legendary singer .</p>
            <Link
              href="https://www.google.com/search?q=Rata+Ora"
              target="_blank"
            >
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src="/Chagal.svg"
            alt="Famous Refugee 3"
            width={500}
            height={300}
            className="w-full h-52 object-cover"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold">Marcle Chagal</h4>
            <p className="text-gray-600 mt-2">Artiest.</p>
            <Link
              href="https://www.google.com/search?q=Marcle+Chaghal"
              target="_blank"
            >
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src="/Iman.svg"
            alt="Famous Refugee 4"
            width={500}
            height={300}
            className="w-full h-52 object-cover"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold">Iman</h4>
            <p className="text-gray-600 mt-2">Award-winning singer.</p>
            <Link
              href="https://www.google.com/search?q=Iman+Abdulmajid"
              target="_blank"
            >
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src="/Mehran.svg"
            alt="Famous Refugee 5"
            width={500}
            height={300}
            className="w-full h-52 object-cover"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold">Mehran</h4>
            <p className="text-gray-600 mt-2">writer"</p>
            <Link
              href="https://www.google.com/search?q=Mehran+karimiNasseri"
              target="_blank"
            >
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src="/Sergey-Brin 2.svg"
            alt="Famous Refugee 6"
            width={500}
            height={300}
            className="w-full h-52 object-cover"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold">Sergey Brin</h4>
            <p className="text-gray-600 mt-2">It Enginear."</p>
            <Link
              href="https://www.google.com/search?q=Sergey+Brin"
              target="_blank"
            >
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
