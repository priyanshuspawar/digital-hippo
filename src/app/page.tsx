import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Your Marketplace for high quality {" "}
        <span className="text-blue-600">
          digital assets
        </span>
        </h1>
        <p className="max-w-prose text-muted-foreground mt-6 text-lg">
          Welcome to digitalHippo. Every asset on our 
          plateform is verified by our team to ensure our
          highest quality standards.
        </p>

        <div className="mt-6 gap-4 flex flex-col sm:flex-row ">
          <Link href={"/products"} className={buttonVariants()}>Browse Trending</Link>
          <Button variant={"ghost"}>Our quality promise &rarr;</Button>
        </div>

      </div>

      {/* TODO: List products */}
    </MaxWidthWrapper>
  );
}
