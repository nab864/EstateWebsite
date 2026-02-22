import { ThreePerRownProps } from "@/app/lib/definition";

export function ThreePerRow({ title, bodyList }: ThreePerRownProps) {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {bodyList.map((section, index) => {
            return (
              <div className="space-y-4" key={index}>
                <h4 className="text-xl font-semibold text-primary">
                  {section.heading}
                </h4>
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
