import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <div className="relative z-10 border-b py-4 bg-gray-50 ">
            <div className="items-center container mx-auto justify-between flex">
                <Link href="/" className="flex gap-2 items-center text-xl text-black">
                    <Image src="/logo2.png" width="50" height="50" alt="file drive logo" />
                    FileDrive
                </Link>
                {/* <Link href="/" className="flex gap-2 items-center text-xl text-black">
        </Link>

        <Button variant={"outline"}>
          <Link href="/dashboard/files">Your Files</Link>
        </Button> */}
                <SignedIn>
                    <Button variant={"outline"}>
                        <Link href="/dashboard/files">Your Files</Link>
                    </Button>
                </SignedIn>

                <div className="flex gap-6">
                    <OrganizationSwitcher />
                    <UserButton />
                    <SignedOut>
                        <SignInButton>
                            <Button>Sign in</Button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </div>
    );
}