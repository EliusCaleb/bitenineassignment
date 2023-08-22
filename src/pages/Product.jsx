import React from "react";

const Product = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="text-center align-center">
        <div className="flex justify-center items-center mt-3 mb-4">
          <img src="/assets/img/AgenSQL-Logo.png" alt="Agen SQL" />
        </div>
        <h2 className="mt-4 text-xl font-semibold">
          An integration of Bitnine's DB technology and PG expertise
        </h2>
        <p className="mt-4">
          AgensSQL is an all-new relational DBMS based on PostgreSQL, with years
          of expertise
          <br />
          and knowledge accumulated through database research and development.
        </p>
        <p className="mt-4">
          The enterprise package, along with AgensSQL engine, is an all-in-one
          solution that ensures <br />
          the efficiency and scalability of data management.
        </p>
        <p className="mt-4">
          Get AgensSQL now for stable operation and management services at a
          reduced
          <br />
          maintenance cost.
        </p>
        <div className="flex justify-center items-center">
          <button className="text-white bg-blue-600 px-4 py-2 rounded-md m-6">
            CONTACT
          </button>
          <button className="text-white bg-blue-600 px-4 py-2 rounded-md m-6">
            BROCHURE
          </button>
          <button className="text-white bg-blue-600 px-4 py-2 rounded-md m-6">
            BLOG
          </button>
        </div>
      </div>

      <div className="text-center mt-8">
        <img
          src="/assets/img/agens-package.png"
          alt="All-in-one-installation"
          className="mx-auto"
        />
      </div>

      <div className="mt-8  text-center ml-4">
        <h1 className="text-3xl font-semibold">Key features</h1>
        <p className="mt-4">Manage your data with Agens Enterprise Package</p>
        <p className="">
          Essential enterprise features such as high availability and sharding
          are provided
        </p>
        <div className="items-center ml-7">
          <img
            src="/assets/img/data-security.png"
            alt="Data Security"
            className="mt-8 "
          />
        </div>
      </div>

      <div>
        <div className="mt-8 justify-center text-center">
          <h1 className="text-xl font-semibold">AgensSQL DB Engine</h1>
          <h2 className="mt-4 text-lg font-semibold">Enhanced Data Security</h2>
          <p className="mt-4">
            AgensSQL is a PostgreSQL-based DBMS that guarantees optimal security
            and stability.
          </p>
        </div>
        <div className=" flex mt-8">
          <img src="/assets/img/passwordProfile.jpg" alt="Password Profile" />
          <img src="/assets/img/DataRedaction.jpg" alt="Data Redaction" />
          <img src="/assets/img/Auditing.jpg" alt="Auditing" />
        </div>
      </div>

      <div className="mt-8 text-center">
        <h1 className="text-xl font-semibold">Agens Enterprise Package</h1>
        <p className="mt-4">
          Agens Enterprise Package comes with a high availability management
          server that supports backup and data monitoring dashboard <br />
          that helps enterprise customers manage their data efficiently.
        </p>
      </div>

      <div className="flex gap-8 mt-8 mb-3">
        <div className="text-center mr-4">
          <h1 className="text-lg  text-center mr-4 font-semibold">
            Agens HA Manager
          </h1>
          <p className="text-center mr-4">
            HA Clustering – Failover/Failback, Load-balancing
          </p>
          <div className="flex ">
            <img
              src="/assets/img/database.png"
              alt="Agens HA Manager"
              className="mt-4 w-2/3 h-6/7"
            />
          </div>
          <p className="text-lg font-semibold">Replication</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
