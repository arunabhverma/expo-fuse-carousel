export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "Get your Virtual Bank Account",
    description: "Receive USD and EUR for USDC",
    image: require("@/assets/images/bank.png"),
    },
    {
      id: 2,
      title: "Secure your wallet",
      description: "Finish set up for advanced security",
      image: require("@/assets/images/secure.png"),
    },
    {
      id: 3,
      title: "Enable push notifications",
      description: "Get balance and product updates",
      image: require("@/assets/images/push-notification.png"),
    },
    {
      id: 4,
      title: "Protect your digital assets",
      description: "Transfer them to Fuse",
      image: require("@/assets/images/digital-asset.png"),
    },
    {
      id: 5,
      title: "Swap tokens effortlessly",
      description: "Use our Jupiter integration",
      image: require("@/assets/images/swap-token.png"),
    },
    {
      id: 6,
      title: "Stake your SOL with Fuse",
      description: "Earn passive income",
      image: require("@/assets/images/stake.png"),
    },
    {
      id: 7,
      title: "Change your 2FA Key",
      description: "Upgrade your security",
      image: require("@/assets/images/key.png"),
    },
  ];