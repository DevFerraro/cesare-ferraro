import { Francois_One, Ramabhadra, Rancho } from 'next/font/google';



import "./globals.css";
import Footer from './components/organisms/Footer';
import Navbar from './components/organisms/Navbar';


// Carica i font tramite next/font
const francoisOne = Francois_One({
  weight: '400', 
  subsets: ['latin'],
});
const ramabhadra = Ramabhadra({
  weight: '400', 
  subsets: ['latin'],
});
const rancho = Rancho({
  weight: '400', 
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Puoi aggiungere altre informazioni nel head, come meta tag, link a font, etc. */}
      </head>
      <body className={`${francoisOne.className} ${ramabhadra.className} ${rancho.className}`}>
        {/* Navbar e contenuto principale */}
        <Navbar />
        <main>
        
        {children}
        
        </main>
        <Footer />
        {/* Footer */}
        
        {/* Script di FontAwesome, aggiunto dopo il body per non bloccare il rendering */}
        <script src="https://kit.fontawesome.com/9bae5764a0.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// } 

//VECCHIO 
