const PRIVACY_SECTIONS = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal information that you voluntarily provide to us, including your name, email address, phone number, payment details, and other data necessary to process transactions or provide services. We also collect non-personal information, such as usage data, device information, and cookies, to enhance your user experience.",
  },
  {
    title: "How We Use Your Information",
    content: "We use your information to:",
    list: [
      "Provide and improve our products and services",
      "Process transactions and send you confirmations",
      "Respond to customer service inquiries",
      "Personalize your experience",
      "Communicate updates, promotions, and offers",
      "Ensure legal and regulatory compliance",
    ],
  },
  {
    title: "How We Share Your Information",
    content:
      "We do not sell or rent your personal information. However, we may share your data with third parties in the following circumstances:",
    list: [
      "With service providers who assist in our operations (e.g., payment processing, analytics, customer support)",
      "For legal reasons, such as to comply with legal obligations or respond to lawful requests by authorities",
      "In the event of a business transfer (e.g., merger or sale of assets)",
    ],
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of data transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, update, correct, or delete your personal information. You can also opt out of receiving promotional communications by following the instructions provided in those communications or by contacting us directly.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to collect non-personal information to improve our services. You can modify your cookie settings through your browser or device.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be effective when posted on our website, and we encourage you to review this policy regularly.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns regarding this Privacy Policy, please contact us at",
    phones: ["+91 253 2387523", "+91 98220 79899"],
  },
];

function PrivacyHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          LEGAL
        </span>
        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
          PRIVACY POLICY
        </h1>
      </div>
    </header>
  );
}

function PrivacyContent() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed mb-12">
          We at Bymer Elastomers are committed to protecting your privacy and ensuring that your
          personal information is handled safely and responsibly. This Privacy Policy explains how
          we collect, use, disclose, and protect your information when you use our website, mobile
          application, or services.
        </p>

        <div className="flex flex-col gap-10">
          {PRIVACY_SECTIONS.map((section) => (
            <article key={section.title} className="flex flex-col gap-3">
              <h2 className="font-title text-lg sm:text-xl font-bold text-[#1c1b1b] uppercase tracking-wide">
                {section.title}
              </h2>
              <div className="w-10 h-[3px] bg-[#C75550]" />
              <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
                {section.content}
                {section.phones && (
                  <>
                    {" "}
                    {section.phones.map((phone, index) => (
                      <span key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-[#C75550] hover:underline font-medium"
                        >
                          {phone}
                        </a>
                        {index < section.phones.length - 1 ? ", " : "."}
                      </span>
                    ))}
                  </>
                )}
              </p>
              {section.list && (
                <ul className="list-disc pl-5 flex flex-col gap-2 font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
}
