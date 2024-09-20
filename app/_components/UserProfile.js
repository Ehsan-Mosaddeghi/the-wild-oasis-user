import Link from "next/link";
import { auth } from "../_lib/auth";

async function UserProfile() {
  const session = await auth();

  return session?.user?.image ? (
    <Link
      href="/account"
      className="hover:text-accent-400 transition-colors flex items-center gap-4"
    >
      <img
        src={session.user.image}
        className="h-8 rounded-full"
        alt={session.user.name}
        referrerPolicy="no-referrer"
      />
      <span>Guest area</span>
    </Link>
  ) : (
    <Link href="/account" className="hover:text-accent-400 transition-colors">
      Guest area
    </Link>
  );
}

export default UserProfile;
