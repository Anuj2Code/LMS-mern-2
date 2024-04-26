import React from "react";

const AskedQuestion = () => {
  return (
    <>
      <div className="flex flex-col gap-[50px]">
        <div>
          <h1 className="text-[#6674cc] w-[100%] text-center text-[40px] font-semibold">Frequently Asked Questions</h1>
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
              <p className="text-lg">As per current policy, we have "STRICT NO REFUND" Policy.</p>
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
              I am a Working Professional or College Student, can i watch this
              course along with studies ?
            </div>
            <div className="collapse-content text-[#a1a5aa]">
              <p className="text-lg">
                Yes, you can. This course will be beneficial for you, if your
                are targeting those high paying software jobs.
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
              Yes, the course multiple Quizzes, exercises and multiple Real World Design Problem Solving lectures.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-black w-[70%] border-[#202329] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg font-medium">
            Do, I need to learn anything before this course starts ?
            </div>
            <div className="collapse-content text-[#a1a5aa]">
              <p className="text-lg">
              No, there is no pre-requisite. We will cover everything right from scratch in this course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskedQuestion;
