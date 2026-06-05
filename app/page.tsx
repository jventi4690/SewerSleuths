import Image from "next/image";
import BackToTop from "./components/BackToTop";

const BOOKING_EMAIL = "sewersleuths@gmail.com";

function PlaceholderImage({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium ${className ?? ""}`}
    >
      {label ?? "Image Placeholder"}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <BackToTop />
      {/* ── HEADER ── white ───────────────────────────────────────────── */}
      <header className="bg-white py-10 flex flex-col items-center border-b border-gray-100">
        <Image
          src="/images/Full logo (text + image).png"
          alt="Sewer Sleuths logo"
          width={400}
          height={200}
          priority
          className="max-w-md sm:max-w-lg md:max-w-2xl w-full h-auto"
        />
      </header>

      {/* ── BOOK A SERVICE ── black ───────────────────────────────────── */}
      <section className="bg-black py-16 px-6 flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold text-white">Book a Service</h2>
        <p className="text-gray-300 max-w-xl">
          Schedule Sewer Scopes and Radon Tests, or inquire about pricing, by contacting us at
        </p>
        <a
          href={`mailto:${BOOKING_EMAIL}`}
          className="text-white text-2xl font-semibold underline hover:text-gray-300 transition-colors"
        >
          {BOOKING_EMAIL}
        </a>
        <a
          href="tel:+15037579004"
          className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors"
        >
          (503) 757-9004
        </a>
        <p className="text-gray-300 max-w-xl text-sm">
          We service a 40 mile radius around the Portland Metro area.
        </p>
      </section>

      {/* ── ABOUT US ── white ─────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-12">
          We are a locally owned and operated business dedicated to helping
          homeowners and buyers understand the true condition of their
          property&apos;s sewer system and indoor air quality. With over 20 years
          of hands-on experience, we provide honest, thorough inspections you
          can trust, with no conflict of interest.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <PlaceholderImage
              className="w-40 h-40 rounded-full"
              label="Richard"
            />
            <p className="font-semibold text-gray-900 text-lg">Richard</p>
            <p className="text-gray-500 text-sm">Owner</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <PlaceholderImage
              className="w-40 h-40 rounded-full"
              label="Jude"
            />
            <p className="font-semibold text-gray-900 text-lg">Jude</p>
            <p className="text-gray-500 text-sm">Sewer Technician</p>
          </div>
        </div>
      </section>

      {/* ── WHY SEWER HEALTH ── white ─────────────────────────────────── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Is Sewer Health Important?
          </h2>
          <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-14">
            A damaged or deteriorating sewer line can lead to costly repairs,
            sewage backups, and serious health hazards. Many issues develop
            silently underground, undetectable without a proper camera
            inspection. Catching problems early — before they become emergencies
            — can save thousands of dollars and protect your family&apos;s health.
            Whether you&apos;re buying a home or maintaining one you already own, a
            sewer scope gives you peace of mind and a clear picture of what
            lies beneath.
          </p>

          {/* 5 sewer problem cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Root Intrusion",
                image: "/images/Roots.jpg",
                desc: "Tree and shrub roots grow into sewer joints, causing blockages and pipe damage.",
              },
              {
                title: "Pipe Corrosion",
                image: "/images/Corrosion.jpg",
                desc: "Older metal pipes corrode over time, narrowing the flow and eventually failing.",
              },
              {
                title: "Bellied Pipe",
                image: "/images/Belly.png",
                desc: "Soil shifting causes sections of pipe to sag, collecting waste and creating clogs.",
              },
              {
                title: "Offset Joints",
                image: "/images/Offset.jpg",
                desc: "Ground movement can misalign pipe sections, restricting flow and allowing leaks.",
              },
              {
                title: "Blockage",
                image: "/images/Blockage.png",
                desc: "Unexpected objects can find their way into your sewer line, reducing capacity and causing backups.",
              },
            ].map(({ title, image, desc }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RADON GAS ── white ────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What Is Radon Gas?
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <Image
              src="/images/house.jpg"
              alt="House illustration for radon section"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full md:w-1/2 h-auto rounded-lg shrink-0"
            />
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>
                Radon is a naturally occurring radioactive gas produced by the
                decay of uranium in soil and rock. It seeps up through the
                ground and can accumulate to dangerous levels inside homes,
                especially in basements and lower floors.
              </p>
              <p>
                Radon is colorless and odorless — entirely undetectable without
                proper testing. It is the second leading cause of lung cancer in
                the United States, responsible for around 21,000 deaths per
                year. The EPA recommends taking action if indoor radon levels
                reach 4 pCi/L or higher.
              </p>
              <p>
                Our certified radon testing service gives you an accurate
                measurement of your home&apos;s radon levels. If elevated levels are
                found, mitigation options are available that can significantly
                reduce your risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── black ───────────────────────────────────────────── */}
      <footer className="bg-black py-6 px-10 flex flex-row items-center">
        <div className="flex-1 flex items-center">
          <Image
            src="/images/Logo (white).png"
            alt="Sewer Sleuths logo"
            width={80}
            height={80}
            className="h-16 w-auto"
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/Sewer Sleuths Text Sideways.png"
            alt="Sewer Sleuths"
            width={200}
            height={80}
            className="h-16 w-auto invert"
          />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <a
            href={`mailto:${BOOKING_EMAIL}`}
            className="text-gray-400 text-sm hover:text-white transition-colors"
          >
            {BOOKING_EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}
