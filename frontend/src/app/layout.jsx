import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';
import {Toaster} from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Theme Forge",
  description: "VS Code theme customizer for developers",
};

const theme = createTheme({
  primaryColor: 'teal'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Toaster position="top-center"/>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
