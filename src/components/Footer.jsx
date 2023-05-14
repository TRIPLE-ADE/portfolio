import { FootersLink } from "../constants";
import { section } from "../style";
const Footer = () => (
  <section
    className={`${section.padding} ${section.textLgDefault} flex items-center flex-col sm:flex-row`}
  >
    <div>
      <p>Made by TripleA - Copyright 2023</p>
    </div>
    <div className="flex sm:ml-auto gap-10">
      {FootersLink.map((FooterLink) => {
        return (
          <a
            key={FooterLink.id}
            href={FooterLink.link}
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
