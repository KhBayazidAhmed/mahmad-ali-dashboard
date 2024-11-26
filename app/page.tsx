import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1> mohmmad ali deshboard</h1>
      <Link
        className="text-blue-600 hover:text-blue-800 underline"
        href="/admin"
      >
        {" "}
        Dashboard Admin
      </Link>
      <Link
        className="text-blue-600 hover:text-blue-800 underline"
        href="/dashboard"
      >
        {" "}
        Dashboard
      </Link>
    </div>
  );
}
