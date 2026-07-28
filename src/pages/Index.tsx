import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { DownloadCTASection } from "@/components/home/DownloadCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <UseCasesSection />
      <DownloadCTASection />
    </Layout>
  );
};

export default Index;
