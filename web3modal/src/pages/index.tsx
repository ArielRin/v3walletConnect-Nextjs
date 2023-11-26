import Header from "@/components/Header";
import MyABI from "@/components/contractABI";

import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import mainPagesStyles from "@/styles/MainPages.module.css";
import { useContractRead } from 'wagmi'

export default function Home() {
  const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] = useState(false);
  const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

  const closeAll = () => {
    setIsNetworkSwitchHighlighted(false);
    setIsConnectHighlighted(false);
  };


function App() {
  const { data, isError, isLoading } = useContractRead({
    address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
 	 abi: MyABI,
    functionName: 'namw',
  })
}

function App() {
 const { data, isLoading, isSuccess, write } = useContractWrite({
	 address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
	 abi: MyABI,
	 functionName: 'claim',
 })
}

  return (
    <>
      <Head>
        <title>CheyneDapp1223 | Next Wagmi Ethers Web3 an more</title>
        <meta name="description" content="Generated by create-wc-dapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        isConnectHighlighted={isConnectHighlighted}
        isNetworkSwitchHighlighted={isNetworkSwitchHighlighted}
      />

      <main className={`${styles.main} ${mainPagesStyles.mainPages}`}>
        <div className={`${styles.wrapper} ${mainPagesStyles.wrapper}`}>


        </div>

							<div className={mainPagesStyles.centeredButton}>
				  <Link href="/About">
				    <div>
				      <button className={mainPagesStyles.enterAppButton}>Enter App</button>
				    </div>
				  </Link>
				</div>
      </main>

    </>
  );
}
