const TERMS_SECTIONS = [
  {
    title: "Acceptance of Terms",
    content:
      "By using our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.",
  },
  {
    title: "Eligibility",
    content:
      "You must be at least 18 years old and have the legal capacity to enter into agreements to use our services. By using our platform, you confirm that you meet this requirement.",
  },
  {
    title: "User Accounts",
    content:
      "To access certain features, you may need to create an account. You agree to provide accurate and complete information when registering and to keep your account information updated. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.",
  },
  {
    title: "Use of Services",
    content:
      "You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations. You are prohibited from:",
    list: [
      "Engaging in any activity that disrupts or interferes with the services",
      "Using the platform for fraudulent or deceptive activities",
      "Submitting false or misleading information",
    ],
  },
  {
    title: "Intellectual Property",
    content:
      "All content on our platform, including text, images, logos, graphics, and software, is the intellectual property of Bymer Elastomers or its licensors. You are not permitted to copy, distribute, modify, or reproduce any content without prior written consent from Bymer Elastomers.",
  },
  {
    title: "Payments and Transactions",
    content:
      "If you make a purchase through our platform, you agree to provide accurate payment information and authorize us to charge the applicable fees. All payments are subject to our pricing and billing policies, which may be updated from time to time.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Bymer Elastomers and its affiliates are not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our services. This includes but is not limited to any loss of data, revenue, or profits.",
  },
  {
    title: "Termination",
    content:
      "We reserve the right to terminate or suspend your access to our services at any time, without notice, for violating these Terms and Conditions or engaging in activities that we deem harmful to our platform or other users.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms and Conditions from time to time. Any changes will be effective immediately upon posting to our platform. Your continued use of our services after the changes have been posted constitutes your acceptance of the revised terms.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions are governed by and construed in accordance with the laws of Maharashtra, India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Maharashtra, India.",
  },
  {
    title: "Contact Information",
    content:
      "If you have any questions or concerns regarding these Terms and Conditions, please contact us at",
    phones: ["+91 253 2387523", "0253 660 1061"],
  },
];

function TermsHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          LEGAL
        </span>
        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
          TERMS &amp; CONDITIONS
        </h1>
      </div>
    </header>
  );
}

function TermsContent() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed mb-12">
          Welcome to Bymer Elastomers. By accessing or using our website, mobile application, or
          services, you agree to be bound by the following Terms and Conditions. Please read them
          carefully before using our platform.
        </p>

        <div className="flex flex-col gap-10">
          {TERMS_SECTIONS.map((section) => (
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

export function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TermsHero />
      <TermsContent />
    </div>
  );
}
