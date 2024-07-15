"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

// Получение доступных слотов времени с сервера
const fetchAvailableSlots = async (date) => {
  const response = await fetch(`/api/appointments?date=${date.toISOString()}`);
  const data = await response.json();
  return data.availableTimes;
};

const formatDate = (date) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export default function DateTimePicker({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      const fetchSlots = async () => {
        const availableSlots = await fetchAvailableSlots(selectedDate);
        setTimeSlots(availableSlots);
      };

      fetchSlots();
    }
  }, [selectedDate]);

  const options = timeSlots.map((time) => ({
    value: time,
    label: time,
    isDisabled: timeSlots.includes(time) && timeSlots[time] === "unavailable",
  }));

  return (
    <div className="mb-4">
      <label className="block text-white mb-2">Выберите дату</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="w-full p-2 rounded mb-4"
        minDate={new Date()}
      />
      {selectedDate && (
        <>
          <label className="block text-white mb-2">Выберите время</label>
          <Select
            value={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            options={options}
            placeholder="Выберите время"
            className="w-full p-2 rounded"
            isOptionDisabled={(option) => option.isDisabled}
          />
        </>
      )}
    </div>
  );
}
