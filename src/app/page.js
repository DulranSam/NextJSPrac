import Link from "next/link";
export default function Home() {
  return (
    <div className="text-align centre">
      <h1>Home page</h1>
      <Link href="/velo">Veloxal</Link>
      <Link href="/AmongUs">Among Us</Link>
    </div>
  );
}
