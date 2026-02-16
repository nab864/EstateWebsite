export default function Footer() {
  return (
    <div className="bg-neutral-950 text-neutral-300">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-lg font-semibold text-neutral-100">
              Private Estate Network
            </div>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              Estate & Property Management providing discreet oversight and
              continuity for distinguished residences.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-neutral-100 tracking-wide">
              Services
            </h5>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>Estate Stewardship</li>
              <li>Fractional Management</li>
              <li>Household Operations</li>
              <li>Lifestyle Concierge</li>
              <li>Fiduciary Coordination</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-neutral-100 tracking-wide">
              Coverage
            </h5>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Serving select markets across the United States, with experience
              in mountain, coastal, and rural estates.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-neutral-100 tracking-wide">
              Contact
            </h5>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>Private Inquiries</li>
              <li>info@company.com</li>
              <li>(XXX) XXX-XXXX</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <span>© 2026 Company Name. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
