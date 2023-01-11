import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ContactForm } from '../../components/contactForm';
const Contact = () => {
  const navigate = useNavigate();

  return (
    <section
      id="contact"
      className=" relative gap-16 mt-[80px] py-10 md:h-full md:pb-0"
    >
      <div className="absolute top-0 left-20 flex">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="rounded bg-myBlack hover:bg-cta p-0.5"
        >
          <FaArrowLeft className="w-5 h-5 text-myWhite stroke-[2]" />
        </button>
        <span className="hidden lg:block text-base font-medium  ml-2">
          Regresar
        </span>
      </div>
      <div className="max-w-screen-lg mx-auto p-8 rounded-lg -z-10">
        <h1 className="text-center title mb-16 text-4xl ">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" flex flex-col justify-center ">
            <h3 className="text-center text-2xl">
              Want to work together or have any questions?
            </h3>
            <ContactForm />
          </div>

          <div className="flexC flex-col">
            <h2 className="text-4xl mb-8"> Follow me on: </h2>
            <div className="flexC text-4xl space-x-4">
              <a
                className="text-inherit transition duration-500 hover:text-cta scale-115"
                href="https://www.linkedin.com/in/youssef-sabbagh/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-inherit transition duration-500 hover:text-cta scale-115"
                href="https://github.com/YoussefSabbagh"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-inherit transition duration-500 hover:text-cta scale-115"
                href="https://twitter.com/TaguaraDigital"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
