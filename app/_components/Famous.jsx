import Link from "next/link";
import Image from "next/image";

export default function Famous() {
  return (
    <section className="bg-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Famous Refugees</h3>
        <p className="text-lg md:text-xl font-semibold italic">
          "A refugee brings more than just a bundle of belongings to their new
          country."
        </p>
        <p className="text-md md:text-lg font-medium mt-2"> Albert Einstein</p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {/* Famous People Data */}
        {famousPeople.map((person, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={person.image}
              alt={person.name}
              width={500}
              height={500}
              className="w-full aspect-square object-cover"
            />
            <div className="p-5 text-center">
              <h4 className="text-lg font-bold">{person.name}</h4>
              <p className="text-gray-600 mt-2">{person.description}</p>
              <Link href={person.link} target="_blank">
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Famous People Data
const famousPeople = [
  {
    name: "Albert Einstein",
    description: "Theoretical physicist.",
    image: "/Albert.svg",
    link: "https://www.google.com/search?q=Albert+Einstein",
  },
  {
    name: "Rita Ora",
    description: "Legendary singer.",
    image: "/Rata-Ora.svg",
    link: "https://www.google.com/search?q=Rita+Ora",
  },
  {
    name: "Marc Chagall",
    description: "Famous artist.",
    image: "/Chagal.svg",
    link: "https://www.google.com/search?q=Marc+Chagall",
  },
  {
    name: "Iman",
    description: "Supermodel & philanthropist.",
    image: "/Iman.svg",
    link: "https://www.google.com/search?q=Iman+Abdulmajid",
  },
  {
    name: "Mehran Karimi Nasseri",
    description: "Writer.",
    image: "/Mehran.svg",
    link: "https://www.google.com/search?q=Mehran+Karimi+Nasseri",
  },
  {
    name: "Sergey Brin",
    description: "Google co-founder.",
    image: "/Sergey-Brin 2.svg",
    link: "https://www.google.com/search?q=Sergey+Brin",
  },
];
