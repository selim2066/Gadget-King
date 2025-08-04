import React from "react";

const Footer = () => {
  return (

    <>
    <div className="text-center py-10 mt-10 space-y-5">
         <h1 className="text-5xl font-bold">GadgetKing</h1>
        <h4 className="text-2xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatum.</h4>
    </div>
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10  justify-around">

       
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    </>
  );
};

export default Footer;
