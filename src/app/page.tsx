"use client";

import styles from "./page.module.css";
import Landing from "../components/Landing/index";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
    <div className={styles.page}>
      <Landing />
    </div>
  );
}
