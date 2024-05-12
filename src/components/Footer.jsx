import { FootersLink } from "../constants";
import { section } from "../style";
const Footer = () => (
  <section className={`${section.padding} ${section.textLgDefault} flex items-center flex-col sm:flex-row`} >
    <div>
      <p>Made by TripleA</p>
    </div>
    <div className="flex gap-10 mt-5 sm:ml-auto sm:mt-0">
      {/* mapping through FooterLink array of objects  */}
      {FootersLink.map((FooterLink) => {
        return (
          <a
            key={FooterLink.id}
            href={FooterLink.link}
            aria-label={FooterLink.label}
            target="_blank"
            rel="noreferrer"
            className="text-xl sm:text-2xl"
          >
            {FooterLink.icon}
          </a>
        );
      })}
    </div>
  </section>
);

export default Footer;
