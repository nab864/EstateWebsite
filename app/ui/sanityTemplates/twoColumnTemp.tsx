import { TwoColumnProps } from "@/app/lib/definition";

export function TwoColumnSection({
  title,
  inverseColor,
  compactColumns,
  leftColumnTitle,
  leftColumn,
  rightColumnTitle,
  rightColumn,
}: TwoColumnProps) {
  return (
    <section className="bg-background-secondary py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-secondary mb-12">
            Who We Serve in Colorado
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Primary & Secondary Residence Owners
                </h4>
                <p className="text-secondary/80 leading-relaxed">
                  Whether Colorado is your primary home or a vacation retreat,
                  professional estate management ensures your property operates
                  flawlessly, maintains its value, and stands ready for your
                  enjoyment without the burden of coordinating services
                  yourself.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Seasonal Residents
                </h4>
                <p className="text-secondary/80 leading-relaxed">
                  Snowbirds escaping to Arizona or Florida winters, summer-only
                  mountain property owners, or ski-season residents benefit from
                  year-round monitoring, seasonal preparation, and reliable
                  local oversight during extended absences.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Multi-Property Owners
                </h4>
                <p className="text-secondary/80 leading-relaxed">
                  Coordinating services across a Cherry Hills Village primary
                  residence and a Vail vacation home? An Evergreen mountain
                  retreat and a downtown Denver pied-à-terre? Experienced estate
                  managers can oversee multiple Colorado properties or
                  coordinate with our network members in other markets.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Luxury Home Buyers – New to Colorado
                </h4>
                <p className="text-secondary/80 leading-relaxed">
                  Relocating to Colorado or purchasing your first mountain
                  property? Local estate managers provide invaluable guidance on
                  vendor selection, service provider vetting, and
                  Colorado-specific property protocols while helping you
                  integrate into your new community.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Family Offices with Colorado Holdings
                </h4>
                <p className="text-secondary/80 leading-relaxed">
                  Family offices managing extensive real estate portfolios
                  appreciate detailed reporting, expense tracking, strategic
                  maintenance planning, and professional coordination across
                  multiple Colorado properties or nationwide holdings.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Luxury Builders & Developers
                </h4>
                <p className="text-secondary/80 leading-relaxed">
                  Smart builders partner with estate managers to provide
                  turnover services, homeowner referrals, and ongoing property
                  support—differentiating their properties and enhancing buyer
                  satisfaction.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Out-of-State Property Owners
                </h4>
                <p className="text-secondary/80 leading-relaxed">
                  Own Colorado property while living in Texas, California, or
                  elsewhere? Local estate management provides reliable
                  eyes-on-property oversight, coordinates all services, and
                  ensures your investment is protected and ready for your
                  arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
