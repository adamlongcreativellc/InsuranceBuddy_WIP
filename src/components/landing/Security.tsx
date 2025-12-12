import { Lock, ShieldCheck, Eye, Trash2 } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Private AI",
    description:
      "Private AI that only works with YOUR data. Your info stays with you – never shared or sold.",
  },
  {
    icon: ShieldCheck,
    title: "We Work for You",
    description:
      "We don't sell things, we work for you. No insurance sales, we don't sell your data – just a helpful pal.",
  },
  {
    icon: Eye,
    title: "Your Pal Only",
    description:
      "Buddy is your faithful pal, not an advisor. We sort and explain – you choose what to do.",
  },
  {
    icon: Trash2,
    title: "Top Safety",
    description:
      "Your data is locked and kept safe with top safety. Delete your data any time.",
  },
];

export default function Security() {
  return (
    <section id="security" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Safety and Privacy
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Your data is yours. Buddy uses private AI that only sees your
              info – fully safe, never shared, always working for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary-200 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-primary-50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
