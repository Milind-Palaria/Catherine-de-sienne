import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex relative min-h-screen w-full justify-between ">
    {/* <div className="auth-asset">
      <div>
        <Image 
          src="/icons/auth-image.svg"
          alt="Auth image"
          width={500}
          height={500}
          className="rounded-l-xl object-contain"
        />
      </div>
    </div> */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
    {children}

    </main>
  );
}
