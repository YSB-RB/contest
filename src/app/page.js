import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <HeaderComponent className="sticky top-0" />
        <main className="flex-grow flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center">
            This is the home page of Contest App
          </h1>
        </main>
        <FooterComponent className="sticky bottom-0" />
      </div>
    </>
  );
}
