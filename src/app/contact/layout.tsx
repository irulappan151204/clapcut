import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Clap Cut Universe",
    description: "Reach out to Clap Cut Universe to start your cinematic digital journey. Contact our Madurai headquarters.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
