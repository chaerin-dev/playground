import Link from "next/link";

export default function ReactExample() {
  return (
    <div className="main-container">
      <h1 className="title">React Example</h1>

      <ol>
        <li>
          <Link href="/react-example/view-transition-gallery">
            View Transition Gallery
          </Link>
        </li>
      </ol>
    </div>
  );
}
