export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Dashboard - SaaS - demo. All rights reserved for TLOO.</p>
      </div>
    </footer>
  );
}
