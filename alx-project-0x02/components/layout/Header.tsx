// components/layout/Header.tsx
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const linkStyle = (path: string) =>
    router.pathname === path
      ? "text-blue-600 font-bold"
      : "text-gray-600 hover:text-blue-500";

  return (
    <header className="bg-white shadow mb-6">
      <nav className="flex gap-6 px-8 py-4">
       <h1 className="text-xl font-bold">

          <Link href="/" className="hover:underline">ALX Project</Link>
        </h1>
        <Link href="/home" className={linkStyle("/home")}>
          Home
        </Link>
        <Link href="/about" className={linkStyle("/about")}>
          About
        </Link>
        <Link href="/posts" className={linkStyle("/posts")}>
          Posts
        </Link>     <Link href="/users" className={linkStyle("/users")}>
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;

  <h1 className="text-xl font-bold">

          <Link href="/" className="hover:underline">ALX Project</Link>
        </h1>