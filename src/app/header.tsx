import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { Link } from "lucide-react";

export function Header() {
    return (
        <div className="border-b py-4 bg-gray-50 ">
            <div className="items-center container mx-auto justify-between flex">
                <div>YourDrive</div>
                {/* <Link href="/" className="flex gap-2 items-center text-xl text-black">
        </Link>

        <Button variant={"outline"}>
          <Link href="/dashboard/files">Your Files</Link>
        </Button> */}

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