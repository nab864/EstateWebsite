import { TwoColumnProps } from "@/app/lib/definition";

export function TwoColumnSection({
  leftColumnTitle,
  leftColumn,
  rightColumnTitle,
  rightColumn,
}: TwoColumnProps) {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-background-secondary/10 p-8 rounded-xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            {leftColumnTitle}
          </h3>

          <div className="space-y-4">
            {leftColumn.map((section) => {
              return (
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {section.heading}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {section.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-background-secondary/15 p-8 rounded-xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            {rightColumnTitle}
          </h3>

          <div className="space-y-4">
            {rightColumn.map((section) => {
              return (
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {section.heading}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {section.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
