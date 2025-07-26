import Link from "next/link";

export default function NatureOfCode() {
  return (
    <div className="main-container">
      <h1 className="title">Nature of Code</h1>

      <ol>
        <li>
          <Link href="/nature-of-code/0-randomness">0. Randomness</Link>
        </li>
      </ol>
    </div>
  );
}
