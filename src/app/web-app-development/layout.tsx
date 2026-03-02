import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web & App Development | Clap Cut Universe",
    description: "High-performance architecture, Awwwards-level UI/UX, and scalable React applications built for the future.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
