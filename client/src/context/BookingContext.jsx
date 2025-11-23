import React, { createContext, useContext, useState } from "react";
import * as api from "../utils/api";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    dateFrom: "",
    dateTo: "",
    guests: 1,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]); // local cache for admin or UX

  const updateField = (key, value) => {
    setBookingForm(prev => ({ ...prev, [key]: value }));
  };

  const submitBooking = async (payload) => {
    setLoading(true);
    try {
      const body = payload || bookingForm;
      const res = await api.createBooking(body);
      // optimistic update (if API returns booking)
      if (res?.id || res?._id) {
        setBookings(prev => [res, ...prev]);
      }
      setLoading(false);
      return res;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const loadBookings = async () => {
    try {
      const list = await api.getAllBookings(); // admin endpoint; will fail until backend exists & auth used
      setBookings(list || []);
      return list;
    } catch (err) {
      console.warn("loadBookings failed", err);
      return [];
    }
  };

  return (
    <BookingContext.Provider value={{
      selectedDate,
      setSelectedDate,
      bookingForm,
      updateField,
      submitBooking,
      loading,
      bookings,
      loadBookings
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}