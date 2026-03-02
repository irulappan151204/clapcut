import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ads & Scripts | Clap Cut Universe",
    description: "Compelling narrative scripting and high-conversion ad conceptualization.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
