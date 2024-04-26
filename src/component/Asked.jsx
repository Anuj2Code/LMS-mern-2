import React from "react";

const Asked = () => {
  return (
    <>
      <div className="flex flex-col gap-[50px] mb-[100px]">
        <div>
          <h1 className="text-[#6674cc] w-[100%] text-center text-[40px] font-semibold mt-[20px]">
            Frequently Asked Questions
          </h1>
          <p className="w-[100%] text-center text-[20px] font-medium">
            Have a question that is not answered? You can contact us we will
            reply it !
          </p>
        </div>
        <div className="flex flex-col gap-[15px] w-[100%] items-center ">
          <div className="collapse collapse-plus bg-black w-[70%]  border-[#202329] border-b-[1px]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can I get a refund incase I change my mind ?
            </div>
            <div className="collapse-content text-[#a1a5aa]">
              <p className="text-lg">
                As per current policy, we have "STRICT NO REFUND" Policy.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-black w-[70%] border-[#202329] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Is this a LIVE or a Recorded Course ?
            </div>
            <div className="collapse-content text-[#a1a5aa]">
              <p className="text-lg">
                This is a Recorded ,where we will provide both Recorded sessions
                and LIVE sessions to teach students.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-black w-[70%] border-[#202329] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              I am not able to view my enrolled course. What to do/whom to
              contact?
            </div>
            <div className="collapse-content text-[#a1a5aa]">
              <p className="text-lg">
                To access your enrolled course, ensure you have logged in at
                coursehub, If the course is still not visible, email to
                support@care.com for assistance within 24 hours.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-black w-[70%] border-[#202329] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How long is the course access?
            </div>
            <div className="collapse-content text-[#a1a5aa]">
              <p className="text-lg">
                The course is accessible for the duration of 2 year.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-black w-[70%] border-[#202329] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg font-medium">
              Will there be question practice in the course?
            </div>
            <div className="collapse-content text-[#a1a5aa]">
              <p className="text-lg">
                Yes, the course multiple Quizzes, exercises and multiple Real
                World Design Problem Solving lectures.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-black w-[70%] border-[#202329] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg font-medium">
              Will I receive a certification upon completion of the course?
            </div>
            <div className="collapse-content text-[#a1a5aa]">
              <p className="text-lg">
                We offer various support channels, including one-on-one doubt
                support, email support, communication with peers via our
                Telegram community and Q&A Forum, and Q&A sessions on our
                dashboard during revision. Instructors and the support team are
                available to assist you throughout your learning journey,
                helping you overcome challenges and grasp the course content
                effectively. Yes, upon successfully completing the course and
                its requirements, you will receive a certification to showcase
                your proficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asked;
