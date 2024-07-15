import emailjs from "@emailjs/browser";

export const initEmailJS = () => {
  emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY);
};
