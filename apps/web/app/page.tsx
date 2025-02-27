"use client";

import { Button, TamaguiProvider, config } from "@repo/ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <TamaguiProvider config={config}>
      <div className={styles.container}>
        <h1>Web</h1>
        <Button 
        size="large"
        backgroundColor="red"
        borderColor="blue"
        backgroundHover="green"
        onPress={() => console.log("Pressed!")}>Boop</Button>
      </div>
    </TamaguiProvider>
  );
}
