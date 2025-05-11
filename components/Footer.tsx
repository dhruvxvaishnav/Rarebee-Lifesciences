const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rarebee-secondary py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Rarebee LifeSciences
            </h3>
            <p className="text-rarebee-text">
              Next generation pharmaceutical company focused on innovative
              healthcare solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-rarebee-text hover:text-gray-800 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-rarebee-text hover:text-gray-800 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-rarebee-text hover:text-gray-800 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-2 text-rarebee-text">
              <li>Email: info@rarebee.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Pharma Street, CA 94000</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-rarebee-text">
            &copy; {currentYear} Rarebee LifeSciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
