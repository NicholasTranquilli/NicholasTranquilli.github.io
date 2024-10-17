import Image from "next/image";

export default function Home() {
  return (
    <main>      
      <body>
          <div className="min-vh-100 d-flex flex-column justify-content-center text-center">
              <h1 className="title">Nicholas Tranquilli</h1>
              <div className="link-slots">
                  <div className="link-slot">
                      <a href="https://github.com/NicholasTranquilli">
                          <Image src="resources/github.svg" alt="..."/>
                      </a>
                  </div>
                  <div className="link-slot">
                      <a href="https://www.linkedin.com/in/nicholas-tranquilli-9b2135284/">
                          <Image src="resources/linkedin.svg" alt="..."/>
                      </a>
                  </div>
                  <div className="link-slot">
                      <a href="/contact">
                          <Image src="resources/email.svg" alt="..."/>
                      </a>
                  </div>
              </div>
          </div>
      </body>
    </main>
  );
}
