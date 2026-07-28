import { motion } from "framer-motion";
import { Wallet, ShieldCheck, Users } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { DownloadButtons } from "@/components/DownloadButtons";

export const DownloadCTASection = () => {
  return (
    <section className="py-8 md:py-10 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--primary))_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--primary))_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6"
          >
            Ride with <span className="text-primary">Uni Go</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-background/70 mb-8 max-w-2xl mx-auto"
          >
            Sign up as a rider, driver, or both. Download the app and start saving on every trip.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            {[
              { icon: Wallet, title: "Affordable Rides", description: "Split the cost of every trip with fellow students" },
              { icon: ShieldCheck, title: "Verified Students", description: "Every rider and driver is a verified student" },
              { icon: Users, title: "Ride or Drive", description: "Switch between riding and driving anytime" },
            ].map((benefit) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="bg-background/5 border border-background/10 rounded-2xl p-6 text-center"
                titleClassName="font-semibold text-background mb-2"
                descriptionClassName="text-sm text-background/60"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <DownloadButtons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
