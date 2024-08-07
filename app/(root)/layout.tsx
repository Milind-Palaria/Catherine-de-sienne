import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

import Image from "next/image";
// import { MainSidebarComponent } from "@/components/MainSidebarComponent";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  // console.log(loggedIn)

  if(!loggedIn) redirect('/welcome')

  return (
    <main className="flex h-screen w-full font-secondary">

      {/* <Sidebar user={loggedIn} /> */}
      {/* <div>
          <Image src="/icons/cathedral-logo.png" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div> */}
      <div className="flex size-full flex-col">

        {/* <div className="root-layout">
          <Image src="/icons/cathedral-logo.png" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div> */}
        {children}
      </div>
    </main>
  );
}