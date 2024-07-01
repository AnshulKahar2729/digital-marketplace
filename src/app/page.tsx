import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className=" py-20 mx-auto flex flex-col text-center max-w-3xl items-center">
          <h1 className=" font-bold text-4xl sm:text-6xl text-gray-900 tracking-tight">
            Your marketplace for high-quality {' '}
            <span className=" text-blue-600">
              digital assets
            </span>
          </h1>

          <p className=" mt-6 text-lg  max-w-prose text-muted-foreground">Welcome to Digital MarketPlace. Every asset on our platform is  verified by our own team to ensure our highest quality standards.</p>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
