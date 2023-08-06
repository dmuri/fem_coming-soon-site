import Image from 'next/image';
import {useState} from "react";

export default function Home() {

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsValidEmail(validateEmail(email));
  };

  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
      <>
        <div className="flex justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-10 mt-8 max-w-[540px]">
          <div className="">
            <Image width="86" height="26" src="images/logo.svg" alt="logo"></Image>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl text-neutral-darkGray text-center">We are launching <span
                className="text-neutral-veryDarkBlue font-bold"
            >soon!</span>
            </h1>
            <p>Subscribe and get notified</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-5 items-center w-full relative " onSubmit={handleSubmit} noValidate>
            <input

                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`border ${!isValidEmail ? "border-red-500" : ""} w-full flex-grow rounded-full px-4 py-3 `}
            />
            { !isValidEmail ? <p className="absolute top-12 text-red-500 col-span-2 ml-8 italic">Please enter a valid email</p> : ""}
            <button className="bg-blue-500 py-3 flex-1 px-5 col-start-2 row-start-1 w-full sm:min-w-[170px]  rounded-full text-white font-semibold"
                type="submit"
            >Notify Me
            </button>
          </form>

          <div className=" mt-8">
            <img src="images/illustration-dashboard.png" alt="dashboard"></img>
          </div>

          <div className="flex gap-4">
            <Image src="/images/facebook_icon.png" alt="facebook icon" height="18" width="18"></Image>
            <Image src="/images/instagram_icon.png" alt="facebook icon" height="18" width="18"></Image>
            <Image src="/images/twitter_bird_icon.png" alt="facebook icon" height="18" width="18"></Image>
          </div>
          <p className="text-sm text-center">@ Copyright Ping. All rights reserved</p>


        </div>
        </div>
      </>

  )
}
