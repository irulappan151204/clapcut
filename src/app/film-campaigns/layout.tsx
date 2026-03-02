import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Film & Campaigns | Clap Cut Universe",
    description: "Award-winning film marketing and digital campaign strategies for Tamil cinema and global brands.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
