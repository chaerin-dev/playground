import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <h1 className="title">Main Page</h1>

      <ul>
        <li>
          <Link href="/nature-of-code">Nature of Code</Link>
        </li>
      </ul>
    </div>
  );
}
