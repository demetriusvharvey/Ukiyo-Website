export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-white">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p className="text-sm text-white/60 mb-8">Last updated: January 2026</p>

      <p className="mb-6">
        Ukiyo (“we,” “our,” or “us”) respects your privacy. This policy explains how
        we collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">Information We Collect</h2>
      <ul className="list-disc pl-5 space-y-2 text-white/80">
        <li>Name, phone number, email</li>
        <li>Reservation details</li>
        <li>Basic usage & analytics data</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">How We Use Information</h2>
      <ul className="list-disc pl-5 space-y-2 text-white/80">
        <li>Process reservations and inquiries</li>
        <li>Communicate about events or bookings</li>
        <li>Improve our website experience</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">Data Sharing</h2>
      <p className="text-white/80">
        We do not sell your personal information. Data is shared only with trusted
        services required to operate this site.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">Contact</h2>
      <p className="text-white/80">
        For privacy questions, please contact us through the website.
      </p>
    </main>
  );
}
