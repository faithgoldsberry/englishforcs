"use client";

import SidebarLayout from "./SidebarLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}