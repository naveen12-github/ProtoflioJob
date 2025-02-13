import React from "react";

const certificates = [
  { title: "React Developer Certificate", image: "/images/react-cert.png", link: "https://your-react-cert-link.com" },
  { title: "Frontend Development Certification", image: "/images/frontend-cert.png", link: "https://your-frontend-cert-link.com" },
  { title: "JavaScript Mastery Certificate", image: "/images/js-cert.png", link: "https://your-js-cert-link.com" },
  { title: "Web Design Certification", image: "/images/webdesign-cert.png", link: "https://your-webdesign-cert-link.com" }
];

const Certificates = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-[#0B1120] text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">
          My <span className="text-blue-400">Certificates</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {certificates.map((certificate, index) => (
            <a
              key={index}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141c2f] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-600 block"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="rounded-lg w-full h-40 object-cover"
              />
              <h2 className="text-xl font-semibold mt-4">{certificate.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
