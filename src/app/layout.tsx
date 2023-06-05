'use client'
import GlobalStyles from '@/design_system/lib/globalStyles';
import StyledComponentsRegistry from './registry';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <GlobalStyles/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}