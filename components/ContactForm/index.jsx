"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { initEmailJS } from "@/utils/emailjs";
/* import DateTimePicker from "@/components/Datepicker"; */

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTime) {
      alert("Пожалуйста, выберите время.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      to_email: formData.email,
      message: formData.message,
      appointment_date: selectedDate.toDateString(),
      appointment_time: selectedTime.value,
    };

    try {
      const response = await fetch("/api/appointments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          date: selectedDate,
          time: selectedTime.value,
        }),
      });

      if (response.ok) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        );
        alert("Сообщение отправлено успешно!");
        setFormData({ name: "", email: "", message: "" });
        setSelectedDate(new Date());
        setSelectedTime(null);
      } else {
        alert("Ошибка при записи. Пожалуйста, попробуйте позже.");
      }
    } catch (error) {
      console.log("FAILED...", error);
      alert("Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.");
    }
  };

  return (
    <section id="signin">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="bg-primary p-8 rounded-lg shadow-lg max-w-lg mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Contactez-nous</h2>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded"
              required
            ></textarea>
          </div>
          {/*  <DateTimePicker
    selectedDate={selectedDate}
    setSelectedDate={setSelectedDate}
    selectedTime={selectedTime}
    setSelectedTime={setSelectedTime}
  /> */}
          <button
            type="submit"
            className="bg-white text-primary font-bold py-2 px-4 rounded"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
