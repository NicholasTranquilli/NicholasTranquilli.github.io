import Image from "next/image";

export default function Home() {
  return (
    <main>      
      <body className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="title">Nicholas Tranquilli</h1>
          <div className="flex space-x-4">
              <div className="flex-shrink-0">
                  <a href="https://github.com/NicholasTranquilli">
                      <Image src="../resources/github.svg" alt="GitHub"/>
                  </a>
              </div>
              <div className="flex-shrink-0">
                  <a href="https://www.linkedin.com/in/nicholas-tranquilli-9b2135284/">
                      <Image src="../resources/linkedin.svg" alt="LinkedIn"/>
                  </a>
              </div>
              <div className="flex-shrink-0">
                  <a href="mailto:nicktranquilli7@gmail.com">
                      <Image src="../resources/email.svg" alt="Email"/>
                  </a>
              </div>
          </div>
      </body>
    </main>
  );
}
