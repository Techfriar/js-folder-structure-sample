import Header from "@/themes/components/header/header";
import styles from "./home.module.css";
import Footer from "@/themes/components/footer/footer";
import Image from "next/image";
import SampleImage from "@/themes/images/sample-image.png";
import { formatText } from "@/utils/format-text";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to My Sample Next.js App!</h1>
        <p>This is the {formatText("Home Page")}.</p>
        <Image src={SampleImage} alt="sample-image" height={500} width={500} />
      </main>
      <Footer />
    </div>
  );
}
