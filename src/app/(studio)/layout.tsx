import "../../styles/tailwind.css";

export const metadata = {
  title: "Studio",
  description: "Admin area for the app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
