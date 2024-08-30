import Image from "next/image";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Hero() {
  return (
    <div className="md:grid grid-cols-5 mt-[120px] px-8 space-y-8 md:space-y-0">
    <Suspense fallback={<Skeleton className="h-full w-full col-span-3 rounded-md" />}>
      <Image
        src="/assets/images/login.png"
        alt="hero"
        width={500}
        height={500}
        className="h-full w-full col-span-3"
      />
    </Suspense>
      <div className="col-span-2 flex items-center text-center">
        <p className="text-2xl md:text-3xl xl:text-5xl font-medium text-balance">
          Welcome to <span className="text-primary font-bold">Digital</span>,
          Artificial Intelligence Driving Results For The Travel Industry
        </p>
      </div>
    </div>
  );
}
