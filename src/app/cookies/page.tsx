export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-white">
      <h1 className="text-3xl font-semibold mb-6">Cookies Policy</h1>
      <p className="text-sm text-white/60 mb-8">Last updated: January 2026</p>

      <p className="mb-6">
        Ukiyo uses cookies to enhance site functionality and understand visitor
        behavior.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">How Cookies Are Used</h2>
      <ul className="list-disc pl-5 space-y-2 text-white/80">
        <li>Site performance & analytics</li>
        <li>User preferences</li>
        <li>Improving navigation and content</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">Managing Cookies</h2>
      <p className="text-white/80">
        You may disable cookies in your browser settings. Some features may not
        function properly without cookies.
      </p>
    </main>
  );
}
