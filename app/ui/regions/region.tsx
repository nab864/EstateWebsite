"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Region() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = window.innerHeight * 0.12;
      const startFade = headerHeight * 0.0;
      const fadeDistance = headerHeight * 6.0;

      const raw = 1 - (scrollY - startFade) / fadeDistance;

      const nextOpacity = Math.min(1, Math.max(0, raw));
      setOpacity(nextOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="min-h-[calc(100vh-12vh)] mt-[12vh] flex flex-col">
        <div
          className="flex-1 relative overflow-hidden"
          style={{ filter: `blur(${(1 - opacity) * 5}px)` }}
        >
          <Image
            src="/seasonal-home.png"
            alt="Luxury estate management in Colorado"
            fill
            className="object-cover"
            priority
          />
          {<div className="absolute inset-0 bg-black/35" />}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="flex flex-col items-center text-center max-w-5xl animate-slide-right opacity-0">
              <h1
                className="text-6xl md:text-7xl text-[#f6f3ee] mb-8 font-bold font-serif transition-all duration-100"
                style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
              >
                Luxury Estate Management & Concierge Services in Colorado
              </h1>

              <h2
                className="text-2xl md:text-3xl text-[#f6f3ee] mb-8 transition-all duration-100"
                style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
              >
                Connecting Colorado’s most discerning property owners with elite
                fractional estate professionals
              </h2>

              <p className="text-[#f6f3ee] mb-10 bg-background-secondary/80 p-6 rounded-xl max-w-3xl text-sm md:text-base leading-relaxed">
                From Denver’s prestigious Cherry Hills Village to Aspen’s iconic
                mountain estates, from Boulder’s foothills luxury homes to
                Vail’s ski-in/ski-out residences, Colorado’s diverse landscape
                of luxury real estate demands specialized, knowledgeable
                property management. The Private Estate Network connects
                ultra-high-net-worth families, seasonal residents, and
                multi-property owners with Colorado’s most trusted estate
                management professionals.
              </p>

              <div
                className="transition-all duration-100"
                style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
              >
                <Link
                  href="/directory"
                  className="border border-[#f6f3ee] text-[#f6f3ee] px-6 py-2 rounded hover:bg-[#f6f3ee] hover:text-primary transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f3ee]"
                >
                  Find Your Colorado Estate Manager
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-4">
          The Colorado Luxury Real Estate Landscape
        </h2>
        <h3 className="text-2xl md:text-3xl text-center text-gray-700 mb-10">
          A Market of Unparalleled Diversity
        </h3>
        <div className="text-lg md:text-xl text-gray-700 space-y-6 leading-relaxed max-w-4xl mx-auto">
          <p>
            Colorado's luxury property market encompasses some of the nation's
            most varied and spectacular real estate.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-background-secondary/10 p-6 rounded-xl space-y-4 leading-relaxed tracking-wide">
              <h4 className="text-xl font-semibold mb-3 flex items-center text-primary">
                Front Range
              </h4>
              <p>
                Front Range estates in Denver, Boulder, and Cherry Hills Village
                command prices from $3 million to $30 million+, offering
                expansive properties with mountain views, mature landscaping,
                and proximity to urban amenities.
              </p>
            </div>

            <div className="bg-background-secondary/15 p-6 rounded-xl space-y-4 leading-relaxed tracking-wide">
              <h4 className="text-xl font-semibold mb-3 flex items-center text-primary">
                Mountain Communities
              </h4>
              <p>
                Mountain communities like Aspen, Vail, and Beaver Creek feature
                ski-in/ski-out chalets, contemporary mountain modern
                masterpieces, and historic mining-era estates valued at $5
                million to $50 million+.
              </p>
            </div>
          </div>
          <p>
            This diversity creates unique management challenges. A
            10,000-square-foot Cherry Hills Village estate requires different
            expertise than an 8,500-foot-elevation Breckenridge ski chalet.
            Front Range properties demand year-round landscape management, pool
            service, and security oversight, while mountain homes require
            specialized seasonal preparation, snow removal coordination, heating
            system monitoring, and altitude-specific maintenance protocols.
          </p>
        </div>
      </section>
      <section>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-background-secondary/10 p-8 rounded-xl shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Front Range Considerations
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">
                  Climate Extremes
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Colorado's Front Range experiences dramatic weather
                  variation—from 100°F summer days to -10°F winter nights,
                  intense hail storms, heavy spring snowfall, and extreme UV
                  exposure at 5,000+ feet elevation. Properties require
                  climate-specific maintenance protocols, seasonal HVAC
                  transitions, and weather-damage vigilance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Water Rights & Landscape Management
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Many Cherry Hills Village, Boulder, and exclusive Front Range
                  properties include water rights, irrigation systems, and
                  extensive landscaping requiring knowledgeable coordination.
                  Understanding ditch company schedules, water delivery
                  protocols, and drought-resistant landscape maintenance is
                  essential.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Hail Damage Prevention & Response
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Colorado experiences some of the nation's most severe hail
                  storms. Professional estate managers know how to protect
                  vehicles, outdoor furniture, and property features, coordinate
                  emergency repairs, and navigate insurance claims specific to
                  Colorado's hail belt.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Indoor Air Quality & Altitude
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Denver's 5,280-foot elevation and periodic wildfire smoke
                  require specific HVAC filter protocols, air quality
                  monitoring, and humidification systems—especially critical for
                  properties with wine cellars, art collections, and
                  humidity-sensitive interiors.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background-secondary/15 p-8 rounded-xl shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Mountain Community Expertise
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">
                  Seasonal Property Preparation
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Mountain estates require meticulous opening and closing
                  protocols. Spring opening includes heating system restart,
                  water system reactivation, propane delivery coordination,
                  landscape assessment, and deep cleaning. Fall closing involves
                  comprehensive winterization, water system draining, propane
                  shutdown sequencing, and security protocols.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Snow Removal & Winter Access
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Reliable snow removal is non-negotiable for mountain
                  properties. Estate managers maintain relationships with
                  dependable local contractors, ensure emergency access,
                  coordinate roof snow removal when necessary, and monitor
                  accumulation remotely.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Altitude-Specific Systems
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Propane delivery logistics, septic system considerations, well
                  water management, and heating systems all function differently
                  at 8,000-10,000 feet. Local expertise prevents costly mistakes
                  and system failures.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Wildlife Management & Fire Mitigation
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Mountain properties face unique challenges, from bears
                  accessing trash to elk damaging landscaping, as well as the
                  risk of wildfires in many communities. Professional estate
                  managers implement prevention strategies, secure storage
                  solutions, defensible space maintenance, and fire mitigation
                  work, coordinating required clearing, understanding local fire
                  district requirements, and ensuring properties are fully
                  prepared for both wildlife and wildfire risks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Short-Term Rental Coordination
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Some owners offset costs through selective rental periods.
                  Local estate managers coordinate property preparation,
                  cleaning services, restocking, inspection protocols, and
                  vendor scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto px-6 py-20 space-y-24 max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-16">
          Featured Colorado Markets
        </h2>

        {/* Front Range */}
        <div className="space-y-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Denver Metro Area
          </h3>

          {/* Cherry Hills Village */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Cherry Hills Village
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Colorado's most prestigious address, Cherry Hills Village
                represents the pinnacle of Front Range luxury living…
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Large-lot landscape coordination</li>
                <li>Irrigation and water rights management</li>
                <li>Pool service, household staff coordination</li>
                <li>Security oversight</li>
                <li>Equestrian facilities (often)</li>
              </ul>
            </div>
            <div className="h-64 md:h-80 w-full relative rounded-xl overflow-hidden ">
              <Image
                src="/landscaping.jpg"
                alt="Cherry Hills Village"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Denver Proper */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 md:h-80 w-full relative rounded-xl overflow-hidden">
              <Image
                src="/landscaping.jpg"
                alt="Denver Proper"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Denver Proper - Hilltop, Observatory Park, Country Club
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Denver's established luxury neighborhoods feature historic
                mansions, contemporary estates, and architecturally significant
                properties…
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Historic home maintenance expertise</li>
                <li>Urban property security</li>
                <li>Landscape services</li>
                <li>Renovation project coordination</li>
                <li>Integration with Denver's cultural and social scene</li>
              </ul>
            </div>
          </div>

          {/* Boulder */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Boulder</h4>
              <p className="text-gray-700 leading-relaxed">
                Nestled against the Flatirons, Boulder's luxury market includes
                hillside contemporary estates, historic downtown properties, and
                mountain-transitional homes…
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Environmentally-conscious service providers</li>
                <li>Wildfire mitigation</li>
                <li>
                  Landscape management balancing aesthetics with water
                  conservation
                </li>
                <li>Integration with Boulder's active lifestyle</li>
                <li>Property security</li>
              </ul>
            </div>
            <div className="h-64 md:h-80 w-full relative rounded-xl overflow-hidden">
              <Image
                src="/landscaping.jpg"
                alt="Boulder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mountain Communities */}
        <div className="space-y-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Mountain Communities
          </h3>

          {/* Aspen & Snowmass */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 md:h-80 w-full relative rounded-xl overflow-hidden">
              <Image
                src="/landscaping.jpg"
                alt="Aspen & Snowmass"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Aspen & Snowmass
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Colorado's international destination for luxury mountain living,
                Aspen features everything from Victorian-era downtown gems to
                modern mountain contemporary estates…
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Sophisticated seasonal opening/closing</li>
                <li>Year-round property monitoring</li>
                <li>Snow removal coordination</li>
                <li>High-end contractor relationships</li>
                <li>Concierge-level service delivery</li>
              </ul>
            </div>
          </div>

          {/* Vail & Beaver Creek */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Vail & Beaver Creek
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Vail Valley's luxury market encompasses ski-in/ski-out
                residences, golf course estates, and mountain contemporary homes
                throughout Vail Village, Lionshead, Bachelor Gulch, and Beaver
                Creek…
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Winter sports season preparation</li>
                <li>Summer activity season transitions</li>
                <li>Sophisticated vendor coordination</li>
                <li>Property monitoring during owner absence</li>
                <li>Integration with Vail Valley's resort lifestyle</li>
              </ul>
            </div>
            <div className="h-64 md:h-80 w-full relative rounded-xl overflow-hidden">
              <Image
                src="/landscaping.jpg"
                alt="Vail & Beaver Creek"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Breckenridge & Summit County */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 md:h-80 w-full relative rounded-xl overflow-hidden">
              <Image
                src="/landscaping.jpg"
                alt="Breckenridge & Summit County"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Breckenridge & Summit County
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Summit County offers diverse mountain luxury from Breckenridge's
                ski-town charm to Keystone's family-focused resort atmosphere.
                Properties include ski-in/ski-out condos to expansive mountain
                estates with values from $1.5 million to $10 million+.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Year-round mountain property expertise</li>
                <li>Altitude-specific systems knowledge</li>
                <li>Snow removal reliability</li>
                <li>Seasonal rental coordination (where applicable)</li>
                <li>Budget-conscious service without compromising quality</li>
              </ul>
            </div>
          </div>

          {/* Steamboat Springs */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Steamboat Springs
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Western Colorado's authentic ranching community turned luxury
                ski destination, Steamboat attracts property owners seeking a
                less pretentious mountain experience. Estates range from in-town
                Victorian renovation projects to Steamboat Ski Resort properties
                to working ranch estates in the Yampa Valley.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Ranch property expertise where applicable</li>
                <li>Authentic Western Colorado contractor relationships</li>
                <li>Seasonal property management</li>
                <li>Understanding of Steamboat's community-oriented culture</li>
              </ul>
            </div>
            <div className="h-64 md:h-80 w-full relative rounded-xl overflow-hidden">
              <Image
                src="/landscaping.jpg"
                alt="Steamboat Springs"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Telluride & Mountain Village */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 md:h-80 w-full relative rounded-xl overflow-hidden">
              <Image
                src="/landscaping.jpg"
                alt="Telluride & Mountain Village"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Telluride & Mountain Village
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Southwestern Colorado's most exclusive ski destination,
                Telluride offers Victorian-era downtown estates, ski-in/ski-out
                Mountain Village properties, and spectacular mountain acreage.
                Remote location demands self-sufficient estate management.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Reliable local contractor relationships (limited vendor pool)
                </li>
                <li>Advanced planning for services and deliveries</li>
                <li>Sophisticated seasonal protocols</li>
                <li>
                  Understanding of Telluride's unique character and isolation
                  considerations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-12">
            The Value of Colorado-Specific Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Understanding Local Contractors
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Colorado's best contractors are often booked 6-12 months in
                advance, especially in mountain communities. Established estate
                managers maintain multi-year relationships ensuring priority
                service, quality work, and fair pricing. They know which roofer
                specializes in mountain weather challenges, which landscaper
                understands xeriscaping and water-wise design, and which
                handyman can be trusted with keys to your $10 million estate.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Navigating HOA & Community Requirements
              </h4>
              <p className="text-gray-700 leading-relaxed">
                From Cherry Hills Village's stringent architectural guidelines
                to Beaver Creek's design review processes, luxury communities
                maintain strict standards. Estate managers understand submission
                requirements, approval processes, and community protocols
                preventing costly mistakes and project delays.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">
                Climate & Altitude Considerations
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Managing properties at 5,000 feet requires different protocols
                than 10,000 feet. Paint fades faster at altitude, wood dries and
                cracks in low humidity, snow loads stress structures
                differently, and HVAC systems work harder in thin air.
                Colorado-specific expertise prevents expensive trial-and-error
                learning.
              </p>
            </div>
            <div className="space-y-4 md:col-span-1">
              <h4 className="text-xl font-semibold text-primary">
                Emergency Response Capability
              </h4>
              <p className="text-gray-700 leading-relaxed">
                When a pipe bursts during a January cold snap, your toilet backs
                up before Thanksgiving guests arrive, or a hailstorm damages
                your roof, immediate local response is critical. Colorado estate
                managers maintain relationships with emergency service providers
                and can be on-site quickly when needed.
              </p>
            </div>

            <div className="space-y-4 md:col-span-1">
              <h4 className="text-xl font-semibold text-primary">
                Seasonal Service Timing
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Knowing when to schedule furnace maintenance (before heating
                season), when to book snow removal contracts (early fall), when
                irrigation systems should be winterized (before first hard
                freeze), and when mountain properties should be opened
                (accounting for late-season snow) prevents service gaps and
                property damage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Ready to Experience Professional Estate Management?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Whether you're seeking oversight for your Denver metro estate,
            coordinated services across multiple Colorado properties, or
            year-round monitoring of your mountain retreat, Colorado's most
            trusted estate management professionals are ready to deliver the
            white-glove service your properties deserve.
          </p>
          <Link
            href="/directory"
            className="inline-block border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-primary transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Find an Estate Manager
          </Link>
        </div>
      </section>
    </div>
  );
}
