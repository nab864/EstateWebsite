import { ThreePerRowProps } from "@/app/lib/definition";

export function ThreePerRow({ heading, subSections }: ThreePerRowProps) {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-12">
          {heading}
        </h2>
        {subSections ? (
          <div className="divide-y">
            {subSections.map((section, index) => {
              return (
                <div key={index} className="py-5">
                  {section.heading ? <h3 className="text-3xl font-bold mb-5">{section.heading}</h3> : null}
                  <div className="grid md:grid-cols-3 gap-12">
                    {section.bodyList.map((subsection, index) => {
                      return (
                        <div className="space-y-4" key={index}>
                          <h4 className="text-xl font-semibold text-primary">
                            {subsection.heading}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {subsection.body}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
