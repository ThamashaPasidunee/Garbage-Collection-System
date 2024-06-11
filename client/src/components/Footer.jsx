export default function Header() {
  return (
    <footer className="bg-green-600 text-white py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-200" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 10a6 6 0 1112 0 6 6 0 01-12 0zm3.293-2.707a1 1 0 011.414 0l1.414 1.414 1.414-1.414a1 1 0 111.414 1.414L10 13.414l-3.707-3.707a1 1 0 111.414-1.414l2.293 2.293z" clipRule="evenodd" />
            </svg>
            <h1 className="text-3xl font-bold">EcoCollect</h1>
          </div>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#services" className="hover:underline">Our Services</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Policy (Mobile)</a></li>
              <li><a href="#advertise" className="hover:underline">Advertise with Us</a></li>
              <li><a href="#ratecard" className="hover:underline">Rate Card (Web)</a></li>
              <li><a href="#directories" className="hover:underline">Other Directories</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8">
          <p className="text-sm">All rights reserved. | Contact us: info@ecocollect.com</p>
        </div>
      </div>
    </footer>
  );
}
