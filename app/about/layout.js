import Link from "next/link";

export const metadata = {
    title: "About Us",
    description: "About Us page of Blog",
  };
  
export default function AboutLayout({ children }) {
    return (
      <div className="mb-6 mt-6">
          <nav>
          <ul className="flex gap-6">
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vision">Vision</Link></li>
          </ul>
        </nav>
          {children}
      </div>
    );
  }