import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photography | Clap Cut Universe",
    description: "Premium commercial and cinematic photography services capturing the essence of your brand.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
