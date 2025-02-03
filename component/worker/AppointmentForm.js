import { useState } from "react";
import Header from "../home/Header";
import WorkerAddImg from "../../image/workerbackground.png";
import "../../style/workeraddform.css";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    landmark: "",
    pincode: "",
    phoneNumber: "",
    aadhaar: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      <Header />
      <div className="workeraddfrom">
        <button className="backbutton" onClick={() => navigate("/")}>
          ←
        </button>
        <form onSubmit={handleSubmit}>
          <div className="nameemail">
            <div>
              <label htmlFor="name">Enter Name</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <br />
            </div>
            <div>
              <label htmlFor="email">Enter Email</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <br />
            </div>
          </div>

          <label>Enter the Address</label>
          <br />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="address"
            required
          />
          <br />
          <input
            type="text"
            name="landmark"
            placeholder="Landmark"
            value={formData.landmark}
            onChange={handleChange}
          />
          <input
            type="number"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="pincode"
            required
          />
          <br />

          <div className="phoneaddhar">
            <div>
              <label>Enter Phone Number</label>
              <br />
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Add Aadhaar</label>
              <br />
              <input
                type="file"
                name="aadhaar"
                accept="application/pdf"
                onChange={handleChange}
              />
            </div>
          </div>

          <input type="submit" value="SUBMIT DETAILS" />
        </form>
        <div>
          <img src={WorkerAddImg} alt="worker" className="workerimg" />
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
