import "@/styles/globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#030303] text-white antialiased overflow-x-hidden">
        <NavigationWrapper />
        {children}
      </body>
    </html>
  );
}