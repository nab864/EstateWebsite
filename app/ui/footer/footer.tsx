export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100">
              Colorado Estate Managemnt
            </h3>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              Estate & Property Management providing discreet oversight and
              continuity for distinguished residences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-100 tracking-wide">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>Estate Management</li>
              <li>Seasonal Residences</li>
              <li>Staff Oversight</li>
              <li>Property Maintenance</li>
              <li>Vehicle & Asset Care</li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-100 tracking-wide">
              Coverage
            </h4>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Serving select markets across the United States, with experience
              in mountain, coastal, and rural estates.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-100 tracking-wide">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>Private Inquiries</li>
              <li>info@company.com</li>
              <li>(XXX) XXX-XXXX</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <span>© 2025 Company Name. All rights reserved.</span>
         
        </div>
      </div>
    </footer>
  );
}
