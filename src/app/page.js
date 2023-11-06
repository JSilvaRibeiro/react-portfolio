import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">joao's portfolio</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-xl" />
            </li>
            <li>
              <a
                className=" bg-cyan-600 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <h2>Joao Ribeiro</h2>
          <h3>Web Developer & Software Engineer</h3>
          <p>
            Free lancer providing services for your web development and software
            engineer needs. Contact me below to get in touch about your project!
          </p>
        </div>
        <div>
          <AiFillTwitterCircle />
        </div>
      </section>
    </main>
  );
}
