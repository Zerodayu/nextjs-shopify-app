
import Link from "next/link";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Link href="/products">View Products</Link>
      </div>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Link href="/products">View Products</Link>
      </div>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Link href="/products">View Products</Link>
      </div>
    </section>
    
  );
}
