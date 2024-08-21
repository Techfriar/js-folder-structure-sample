import About from "@/modules/about-us/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample App - About Us",
};

export default function IndexPage() {
  return <About />;
}
