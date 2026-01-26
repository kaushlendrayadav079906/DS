// import group69 from "../assets/Group/Group 69.png";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans text-slate-800">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-32">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-[#0B0F5C]">Imprint</h1>

        <div className="space-y-8 text-base md:text-lg leading-relaxed">
          
          {/* Address Section */}
          <section>
            <p className="mb-4">
              Responsible according to § 5 DDG:
              <br />
              <strong>Arshan UG</strong>
              <br />
              Level 8 , Linkstraße 2
              <br />
              10785 Berlin
              <br />
              GERMANY
            </p>

            <div className="mb-4">
              <strong>To:</strong>
              <br />
              <a href="mailto:info@arshan.de" className="hover:underline text-blue-900 block">info@arshan.de</a>
              <a href="https://www.arshan.de" target="_blank" rel="noopener noreferrer" className="text-[#8CC63F] hover:underline block">www.arshan.de</a>
            </div>

            <p>
              Commercial register: HRB 265415
              <br />
              Registered Court: District court Berlin (Charlottenburg)
              <br />
              VAT No.:
            </p>
          </section>

          {/* Copyright Notice */}
          <section>
            <h2 className="text-xl font-bold text-[#0B0F5C] mb-3">Copyright notice and disclaimer</h2>
            <p>
              All components of this website except images are subject to copyright without restriction as a work and in particular as a database. Any unauthorized use of the work or its components triggers injunctive relief and damages as well as criminal prosecution.
            </p>
          </section>

          {/* Liability for Contents */}
          <section>
            <h2 className="text-xl font-bold text-[#0B0F5C] mb-3">Liability for contents</h2>
            <p>
              As a search engine operator, we are responsible for our own content on these pages in accordance with the general laws in accordance with § 7 Abs.1 TMG. According to §§ 8 to 10 TMG, however, we as search engine operators are not obliged to monitor transmitted or stored third-party information or to search for circumstances that indicate illegal activity. Obligations to remove or block the use of information under the general laws remain unaffected by this. However, liability in this regard is only possible from the time of knowledge of a concrete infringement. Upon becoming aware of corresponding infringements, we will remove this content immediately.
            </p>
          </section>

          {/* Liabilities for Links */}
          <section>
            <h2 className="text-xl font-bold text-[#0B0F5C] mb-3">Liabilities for links</h2>
            <p>
              Our offer contains links to external websites of third parties, on whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete indications of an infringement. Upon notification of violations, we will remove such links immediately.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
