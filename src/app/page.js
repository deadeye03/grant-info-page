import GrantInfoPage from "@/components/grant-info-page";
import GrantQuestionnaire from "@/components/grant-questonaire";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="relative h-[150px] w-full flex justify-center">
          <Image src="/top.png" alt="Background" fill className="inset-0 absolute object-cover -z-10" />
          <div className="flex flex-col gap-4 justify-between py-1 items-center">
            <h1 className="text-white text-2xl md:text-4xl font-bold">Education Information Services</h1>

            <p className="text-white text-xl md:text-2xl font-bold">
              Return to School Today
            </p>
          </div>
        </div>

        <div className="bg-foreground py-14 container mx-auto px-4 md:px-20">
          <div className="relative flex justify-center items-center">
            <Image src="/hero.webp" alt="Background" height={700} width={700} className="object-cover" />
          </div>
          <GrantQuestionnaire />
        </div>

      </main>
      <GrantInfoPage />
    </div>
  );
}
