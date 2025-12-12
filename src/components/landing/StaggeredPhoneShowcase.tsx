export default function StaggeredPhoneShowcase() {
  const showcaseItems = [
    {
      id: 1,
      headline: "Main Benefit Headline",
      body: "Supporting body copy that explains this key feature or benefit of the InsuranceBuddy app. This text describes how the feature helps users manage their insurance more effectively.",
      alignment: "left" as const,
    },
    {
      id: 2,
      headline: "Feature Headline",
      body: "Supporting body copy that highlights another important aspect of the app. This section helps users understand the value proposition and benefits of using InsuranceBuddy.",
      alignment: "right" as const,
    },
    {
      id: 3,
      headline: "Benefit Headline",
      body: "Supporting body copy that showcases how InsuranceBuddy simplifies insurance management. This text emphasizes the user-friendly experience and time-saving features.",
      alignment: "left" as const,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                item.alignment === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Phone Mockup */}
              <div
                className={`relative ${
                  item.alignment === "right" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl shadow-2xl border-8 border-slate-300 overflow-hidden">
                  {/* Phone screen placeholder */}
                  <div className="w-full h-full bg-white p-4 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl mx-auto" />
                      <div className="text-sm text-slate-400 font-medium">
                        App Screenshot
                      </div>
                      <div className="text-xs text-slate-300">
                        9:16 Placeholder
                      </div>
                    </div>
                  </div>

                  {/* Decorative glow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 blur-2xl -z-10 rounded-full" />
                </div>

                {/* Optional: Buddy mascot peek (can be added later) */}
                {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-100 rounded-full" /> */}
              </div>

              {/* Content */}
              <div
                className={`text-center lg:text-left ${
                  item.alignment === "right" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  {item.headline}
                </h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
