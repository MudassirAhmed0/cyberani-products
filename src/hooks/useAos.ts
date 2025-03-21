'use client';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useEffect } from 'react';

interface AosSettings {
  duration?: number;
  once?: boolean;
  mirror?: boolean;
  disable?: boolean | 'phone' | 'mobile' | 'tablet';
  anchorPlacement?:
    | 'top-bottom'
    | 'top-center'
    | 'top-top'
    | 'center-bottom'
    | 'center-center'
    | 'center-top'
    | 'bottom-bottom'
    | 'bottom-center'
    | 'bottom-top';
}

const isVideoLoaded = (): boolean => {
  const video = document.querySelector<HTMLVideoElement>(".hero-video");
  return Boolean(!video || video.readyState >= 4);
};

function areAllAssetsLoaded(): boolean {
  const fontsLoaded: boolean = document.fonts.status === "loaded";
  const heroImg: NodeListOf<HTMLImageElement> = document.querySelectorAll(".heroImg");
  const imagesLoaded: boolean =
    heroImg.length === 0 || Array.from(heroImg).every((img) => img.complete && img.naturalHeight !== 0);

  return isVideoLoaded() && fontsLoaded && imagesLoaded;
}

const loadAOS = (settings: AosSettings = {}) => {
  AOS.init({
    disable: settings.disable,
    duration: settings.duration || 800,
    once: settings.once || false,
    mirror: settings.mirror || false,
    anchorPlacement: settings.anchorPlacement || 'top-bottom',
  });
};

const showUI = () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
};

const onAllAssetsLoaded = (settings: AosSettings) => {
  loadAOS(settings);
  showUI();
};

function checkAssetsPeriodically(settings: AosSettings) {
  const intervalId: number = window.setInterval(() => {
    if (areAllAssetsLoaded()) {
      clearInterval(intervalId);
      onAllAssetsLoaded(settings);
    }
  }, 100);
}

export const useAos = (settings: AosSettings = {}) => {
  useEffect(() => {
    if (areAllAssetsLoaded()) {
      onAllAssetsLoaded(settings);
    } else {
      checkAssetsPeriodically(settings);
    }

    return () => {
      AOS.refresh();
    };
  }, [settings]);
};
