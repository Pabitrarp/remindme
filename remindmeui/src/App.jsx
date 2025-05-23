import React, { useState } from "react";
import moment from "moment";
import axios from "axios";


function App() {
   const [formData, setFormData] = useState({
    text: "",
    date: "",
    method: "",
    email: "",
    mobilenumber: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const now = moment();
    const selected = moment(formData.date);

    if (!formData.text) newErrors.text = "Text is required";
    if (!formData.date) newErrors.date = "Date is required";
    else if (selected.diff(now, "minutes") < 6)
      newErrors.date = "Select a time at least 6 minutes from now";

    if (!formData.method) newErrors.method = "Choose a method";

    if (formData.method === "email" && !formData.email)
      newErrors.email = "Email is required";

    if (formData.method === "sms" && !formData.mobilenumber)
      newErrors.mobilenumber = "Mobile number is required";

    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      
      const response= await axios.post("http://localhost:8000/Pabitra/api/vi/savereminder",{
        text: formData.text,
        date: formData.date,
        method: formData.method,
        email: formData.method === "email" ? formData.email : undefined,
        mobilenumber: formData.method === "sms" ? formData.mobilenumber : undefined
      })
     if (response.status===200){
      alert(response.data.message);
      setFormData({text: "",
    date: "",
    method: "",
    email: "",
    mobilenumber: ""});
      }

    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-50 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Remind Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Reminder Text</label>
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.text && <p className="text-red-500">{errors.text}</p>}
        </div>

        <div>
          <label className="block font-medium">Reminder Date & Time</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.date && <p className="text-red-500">{errors.date}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Send Via</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="method"
                value="email"
                checked={formData.method === "email"}
                onChange={handleChange}
              />
              <span className="ml-1">Email</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="sms"
                checked={formData.method === "sms"}
                onChange={handleChange}
              />
              <span className="ml-1">SMS</span>
            </label>
          </div>
          {errors.method && <p className="text-red-500">{errors.method}</p>}
        </div>

        {formData.method === "email" && (
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        )}

        {formData.method === "sms" && (
          <div>
            <label className="block font-medium">Mobile Number</label>
            <input
              type="tel"
              name="mobilenumber"
              value={formData.mobilenumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.mobilenumber && (
              <p className="text-red-500">{errors.mobilenumber}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
        >
          Submit Reminder
        </button>
      </form>
    </div>
  );
}

export default App
