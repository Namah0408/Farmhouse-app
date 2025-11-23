const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, opts = {}) {
  const url = `${BASE_URL}${path}`;
  const headers = opts.headers || {};
  if (!headers["Content-Type"] && !(opts.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  const res = await fetch(url, { ...opts, headers, credentials: "include" });
  if (!res.ok) {
    const text = await res.text();
    let err;
    try { err = JSON.parse(text); } catch { err = text; }
    throw err || new Error("Request failed");
  }
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) return res.json();
  return res.text();
}

/* Booking endpoints */
export const createBooking = (payload) => request("/bookings", { method: "POST", body: JSON.stringify(payload) });
export const getBookedDates = () => request("/bookings/dates", { method: "GET" });

/* Admin endpoints (note: will require auth later) */
export const getAllBookings = () => request("/admin/bookings", { method: "GET" });
export const updateBookingStatus = (id, status) => request(`/admin/bookings/${id}/status`, { method: "PATCH", body: JSON.stringify({status}) });

/* Contact */
export const sendMessage = (payload) => request("/contact", { method: "POST", body: JSON.stringify(payload) });

/* Auth (admin) */
export const adminLogin = (payload) => request("/auth/login", { method: "POST", body: JSON.stringify(payload) });
