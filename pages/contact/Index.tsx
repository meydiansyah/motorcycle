import AppLayout from "@/components/layouts/App";

import { NextPage } from "next";
// import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import Mail from "@/components/modal/login/mail";

const Product: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <AppLayout>
      <div className="w-full px-3 h-screen antialiased lg:px-6 flex items-center justify-center">
        <div className="mx-auto max-w-5xl center">
          <div className="container py-auto mx-auto text-center sm:px-4">
            <div className="max-w-md border-md mx-auto p-4">
              <div className="contact-us-form">
                <h1>Contact Us</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      //   value={formData.name}
                      //   onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <Input
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      label="Email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      contentLeft={<Mail />}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      name="message"
                      id="message"
                      //   value={formData.message}
                      //   onChange={handleChange}
                      required
                    />
                  </div>
                  {/* {formError && (
          <p className="form-error">An error occurred. Please try again.</p>
        )} */}
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Product;
