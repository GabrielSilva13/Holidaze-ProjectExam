import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import FAQ from "../../components/FAQ";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center flex-col xl:flex-row">
        <ContactInfo />
        <ContactForm />
      </div>
      <FAQ />
      <img
        src="contact.png"
        className="w-full object-cover h-[35rem] pt-6 bg-customLightBlue"
        alt=""
      />
    </div>
  );
}
