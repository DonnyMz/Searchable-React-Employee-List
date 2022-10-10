import React, { useState } from "react";
import Data from "./data.json";
import { motion } from "framer-motion";
import "./emp.css";
const Employee = () => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const today = new Date();

  return (
    <>
      <section className="empSection">
        <div className="search-box">
          <input
            className="search-Input"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search by name"
          />
        </div>
        <h2 className="emp-title">
          Number of StellarSol Employees: {Data.length}
        </h2>
        <div className="emp-box">
          <div className="emp-box-item">
            {Data.filter((item) => {
              const { full_name } = item;
              const searchTerm = value.toLowerCase();
              const Full_name = full_name.toLowerCase().startsWith(searchTerm);
              return Full_name;
            }).map((item) => {
              const { id, full_name, position, hired, image } = item;
              return (
                <motion.div
                  key={id}
                  className="employee-card"
                  layout
                  whileHover={{ opacity: 0.8 }}
                >
                  <div className="avatar">
                    <motion.img
                      src={image}
                      alt="avatar"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </div>
                  <div>
                    <ul className="employee-list">
                      <li>
                        Name:
                        <span className="employee-desc">{full_name}</span>
                      </li>
                      <li>
                        {" "}
                        position:
                        <span className="employee-desc">{position}</span>
                      </li>
                      <li>
                        {" "}
                        Hired:
                        <span className="employee-desc">{hired}</span>
                      </li>
                      <li>
                        Years of Service:
                        <span className="yearService">
                          <span className="yearServiceDigit">
                            {today.getFullYear() - hired}
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Employee;
