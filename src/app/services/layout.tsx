import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Clap Cut Universe",
    description: "Explore the suite of premium digital services offered by Clap Cut Universe, including Film Campaigns, Web Development, and Photography.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
