import "./globals.css";


export const metadata = {

  title: "Mohamed Abdelhay | Data Scientist",

  description:
  "Data Scientist Portfolio - Machine Learning, AI and Data Analytics",

};



export default function RootLayout({ children }) {


  return (

    <html lang="en">

      <body>

        {children}

      </body>


    </html>

  );


}