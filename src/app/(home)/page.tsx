import Home from "@/modules/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample App",
};

export default function IndexPage() {
  return <Home />;
}
