import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Clap Cut Universe",
    description: "Explore the cinematic portfolio of Clap Cut Universe — anthems, documentaries, brand campaigns, events, and digital ecosystems by J. Jeyabal.",
    openGraph: {
        title: "Portfolio | Clap Cut Universe",
        description: "50+ campaigns, 10M+ global reach, and award-winning productions.",
    },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
