import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Videography | Clap Cut Universe",
    description: "Stunning 4K video production, commercial shoots, and corporate storytelling.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
