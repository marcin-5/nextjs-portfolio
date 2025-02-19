import ContactCard from "@/components/cards/contact";
import Heading from "@/components/heading/heading";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
// import SelectInput from "@/components/ui/select-input";
import TextArea from "@/components/ui/text-area";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  services: string[];
  budget: string[];
  message: string;
}

interface SelectOption {
  text: string;
}

const SERVICES_OPTIONS: SelectOption[] = [
  { text: "Web Design" },
  { text: "Web Development" },
  { text: "Full Website" },
  { text: "Logo Design" },
  { text: "SEO" },
  { text: "Ai Integration" },
  { text: "1 On 1 Teaching" },
];

const BUDGET_OPTIONS: SelectOption[] = [
  { text: "< $500" },
  { text: "$500 - $2000" },
  { text: "$2000 - $5000" },
  { text: "> $5000" },
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null!);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    services: [],
    budget: [],
    message: "",
  });

  const handleFormChange = (field: keyof ContactFormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEmailSubmission = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      );
      console.log("Email sent successfully", response.text);
    } catch (error: any) {
      console.error("Failed to send email: ", error.text);
    }
  };

  return (
    <section id="contact" className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-9">
            <ContactCard
              title="Call me directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+48 79 339 11 71"
            />
            <ContactCard
              title="Contact me by email."
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="marcin.bojara@mail.ru"
            />
            <ContactCard title="Submit the completed form." icon={<FaPen className="fill-[#333] text-lg" />} />
          </div>

          <form
            ref={formRef}
            onSubmit={handleEmailSubmission}
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
                value={formData.name}
                onChange={(e) => handleFormChange("name", e.target.value)}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                icon={<MdEmail />}
                value={formData.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
            </div>

            <Input
              name="subject"
              type="text"
              placeholder="Subject"
              icon={<MdSubject />}
              value={formData.subject}
              onChange={(e) => handleFormChange("subject", e.target.value)}
            />

            {/*<div className="flex flex-col gap-6">*/}
            {/*  <div className="space-y-6">*/}
            {/*    <h1 className="font-bold text-lg">What services are you in need for ?</h1>*/}
            {/*    <div className="flex flex-wrap items-center justify-between mb-4 gap-8">*/}
            {/*      {SERVICES_OPTIONS.map((service, index) => (*/}
            {/*        <SelectInput*/}
            {/*          key={index}*/}
            {/*          type="checkbox"*/}
            {/*          optionId={service.text}*/}
            {/*          label={service.text}*/}
            {/*          selectedValues={formData.services}*/}
            {/*          onSelectionChange={(values) => handleFormChange("services", values)}*/}
            {/*          allowMultiple*/}
            {/*        />*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="flex flex-col gap-6">*/}
            {/*  <div className="space-y-6">*/}
            {/*    <h1 className="font-bold text-lg">What is your budget ?</h1>*/}
            {/*    <div className="flex flex-wrap items-center justify-between mb-4 gap-8">*/}
            {/*      {BUDGET_OPTIONS.map((budget, index) => (*/}
            {/*        <SelectInput*/}
            {/*          key={index}*/}
            {/*          type="radio"*/}
            {/*          optionId={budget.text}*/}
            {/*          label={budget.text}*/}
            {/*          selectedValues={formData.budget}*/}
            {/*          onSelectionChange={(values) => handleFormChange("budget", values)}*/}
            {/*        />*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <TextArea name="message" rows={5} placeholder="Share your concept with me." icon={<FaProjectDiagram />} />

            <div className="w-full flex justify-end">
              <div onClick={() => submitButtonRef.current?.click()}>
                <Button className="!w-44 !py-3 !text-xl">
                  Send <SiMinutemailer />
                </Button>
              </div>
              {/*<div className="hidden">*/}
              {/*  <input type="text" value={formData.services.join(", ")} name="services" hidden readOnly />*/}
              {/*  <input type="text" value={formData.budget.join(", ")} name="budget" hidden readOnly />*/}
              {/*</div>*/}
              <button type="submit" hidden ref={submitButtonRef}></button>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
}
