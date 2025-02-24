import Image from "next/image";
import Link from "next/link";
import Social from "./_components/Social";
import Navbar from "./_components/Navbar";
import Famous from "./_components/Famous";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      {/* Main Section */}
      <main className="relative w-full h-[900px]">
        <div className="relative w-full h-full ">
          <Image
            src="/photoHafez.svg"
            alt="Refugee Wave Background"
            layout="fill"
            objectFit="cover"
            className="w-full "
          />
        </div>

        {/* Overlay Text with Blur Effect */}
        <div className="absolute bottom-10 inset-x-0 flex items-center justify-center z-10 px-4">
          <div className="bg-white/50 w-[90%] max-w-[1200px] min-h-[200px] md:min-h-[270px] rounded-[16px] flex items-center justify-center p-6 shadow-lg">
            <h1 className="text-black text-2xl md:text-4xl font-bold text-center leading-relaxed">
              Human beings are members of a whole, in creation of one essence
              and soul. If one member is afflicted with pain, other members
              uneasy will remain. If you have no sympathy for human pain, the
              name of human you cannot retain.
              <br />
              <span className="text-lg md:text-xl font-semibold mt-2 block">
                — Hafez
              </span>
            </h1>
          </div>
        </div>
      </main>
      {/*/section 1 */}
      <section className="relative w-full h-[800px] ">
        {/* Background Image */}
        <div className="relative w-full h-full">
          <Image
            src="/aboutUs.svg" // Ensure this file is in the public folder
            alt="Refugee Phenomenon"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute top-[50px] inset-x-0 flex items-center justify-center z-10 px-4">
          <div className="bg-white/10 w-[90%] max-w-[1200px] h-[270px] rounded-[16px] flex items-center justify-center p-6 shadow-lg">
            <h2 className="text-black text-2xl md:text-4xl font-semibold text-center leading-relaxed">
              This ancient refugee phenomenon will never end, but it will be
              formed for the powerful to take the most advantage of this human
              phenomenon.
            </h2>
          </div>
        </div>
      </section>

      {/* Note from the Publisher */}
      <section className="bg-gray-200 py-16 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            A Short Note from the Publisher
          </h3>
          <p className="text-lg leading-relaxed text-gray-800">
            A refugee, conventionally speaking, is a person who has lost the
            protection of their country of origin and who cannot or is unwilling
            to return there due to well-founded fear of persecution.
            <br />
            <br />
            Migrants, unlike refugees who cannot safely return home, can return
            home if they wish. This distinction is important for governments
            since countries handle migrants under their own immigration laws and
            processes. Many people abuse the refugee law for migration.
            <br />
            <br />
            It is unfortunate that many politicians support this abuse in
            refugee-receiving countries to strengthen their puppet governments
            against the protesting people who are really in danger every day and
            have no way to flee from danger.
            <br />
            <br />
            This also creates a wrong concept in public opinion in the
            refugee-receiving country.
            <br />
            <br />
            In the end, I believe the refugee-receiving countries should notice
            that this behavior is not supporting human rights but supporting
            criminality in both countries.
            <br />
            <br />
            Here, I created this place for exchanging opinions and ideas that
            can help to stop criminality for a better world for everyone in this
            life.
          </p>
        </div>
      </section>

      {/* Famous Refugee Section */}
      <Famous></Famous>
      <Footer></Footer>
    </>
  );
}
