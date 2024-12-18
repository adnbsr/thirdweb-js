import type { SidebarLink } from "../components/ui/sidebar";

export const navLinks: SidebarLink[] = [
  {
    name: "Sign in",
    expanded: true,
    links: [
      {
        name: "Button",
        href: "/connect/sign-in/button",
      },
      {
        name: "Embed",
        href: "/connect/sign-in/embed",
      },
      {
        name: "Headless",
        href: "/connect/sign-in/headless",
      },
    ],
  },
  {
    name: "Account Abstraction",
    expanded: true,
    links: [
      {
        name: "Connect",
        href: "/connect/account-abstraction/connect",
      },
      {
        name: "Sponsor Gas",
        href: "/connect/account-abstraction/sponsor",
      },
      {
        name: "Native AA (zkSync)",
        href: "/connect/account-abstraction/native-aa",
      },
    ],
  },
  {
    name: "In-App Wallet",
    expanded: true,
    links: [
      {
        name: "Any Auth",
        href: "/connect/in-app-wallet",
      },
      {
        name: "Ecosystems",
        href: "/connect/in-app-wallet/ecosystem",
      },
      {
        name: "Sponsor Gas",
        href: "/connect/in-app-wallet/sponsor",
      },
    ],
  },
  {
    name: "Pay",
    expanded: true,
    links: [
      {
        name: "Top up",
        href: "/connect/pay",
      },
      {
        name: "Commerce",
        href: "/connect/pay/commerce",
      },
      {
        name: "Transactions",
        href: "/connect/pay/transactions",
      },
    ],
  },
  {
    name: "Auth",
    href: "/connect/auth",
  },
  {
    name: "Social",
    href: "/connect/social",
  },
  {
    name: "Blockchain API",
    href: "/connect/blockchain-api",
  },
];
