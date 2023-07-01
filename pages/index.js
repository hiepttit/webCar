// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner.js";
import LatestProducts from "@/components/latestProducts";
import AboutUs from "@/components/aboutUs";
import Post from "@/components/post";
import Review from "@/components/review";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinfast</title>
      </Head>
      <Banner></Banner>
      <LatestProducts></LatestProducts>
      <AboutUs></AboutUs>
      <Post></Post>
      <Review></Review>
    </>
  );
}
