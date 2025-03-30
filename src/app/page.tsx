import Image from "next/image";
import Heading1 from "@/components/ui/Heading1";
import Heading2 from "@/components/ui/Heading2";

export default async function Home() {

  return (
    <main>
      <div className="wrapper">
        <Heading1>Making Every Moment Unforgettable.</Heading1>
        <Heading2>Welcome to our world of photography!</Heading2>
        <p>Explore the interplay of light and shadow to create dramatic, moody, or ethereal photographs.</p>
      </div>
    </main>
  );
}
