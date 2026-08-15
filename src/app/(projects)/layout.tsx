import '@/styles/tailwind.css';
import { Inter, Manrope } from 'next/font/google';
import ProjectCloseControl from '@/components/Portfolio/ProjectCloseControl';

const inter = Inter({ subsets: ['latin'], variable: '--font-project-sans' });
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-project-display',
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <ProjectCloseControl />
        {children}
      </body>
    </html>
  );
}
