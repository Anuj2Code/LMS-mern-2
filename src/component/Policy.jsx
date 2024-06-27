import React from "react";

const Policy = () => {
  return (
    <div className="h-[50vh] flex justify-center mb-[25px] max-[900px]:hidden">
      <div className="w-[70%]">
        <h1 className="w-[100%] text-center text-blue-500 text-[45px] font-semibold">
          {" "}
          # Read before you deal
        </h1>
        <ul>
          <li className="text-[20px] p-[20px]">
            When buying or selling, you should meet in-person to see the
            product. Learn as much as you can about who you are meeting or
            trading with before you complete the transaction Course Hub is all
            about local transactions.
          </li>
          <li className="text-[20px] p-[20px]">
            Inform Coursehub of any attempted fraud or suspicious emails, Ads,
            or other activity by community members. In case of fraud, report it
            to the local authorities and inform us.
          </li>
        </ul>
        <p className="w-[100%] text-center text-blue-500 text-[25px] ">
          CourseHub is a customer-to-customer platform like Olx to buy and sell
          books. We don’t buy or sell books nor handle deliveries.
        </p>
      </div>
    </div>
  );
};

export default Policy;
