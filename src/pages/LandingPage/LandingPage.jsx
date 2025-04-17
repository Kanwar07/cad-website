import ClientsSlideShow from "./ClientsSlideShow/ClientsSlideShow";
import CompanyStatistics from "./CompanyStatistics/CompanyStatistics";
import HeroSection from "./HeroImage/HeroSection";
import QuotationProcess from "./QuotationProcess/QuotationProcess";

export default function LandingPage() {
  return (
    <div className="h-full">
      <HeroSection />
      <CompanyStatistics />
      <QuotationProcess />
      <ClientsSlideShow />
    </div>
  );
}
