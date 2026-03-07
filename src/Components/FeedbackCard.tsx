import { Ratinglist_feedback } from "../Data/profile_feed_back";
import { feedbackImageList } from "../Data/profile_feed_back";

function Feedback_User() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {feedbackImageList.map((feedback) =>
                <div className="flex flex-col bg-gray-light p-4 sm:p-4.5 rounded-2xl">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-4 sm:gap-5 items-center">
                            <div className="w-12 h-12 sm:w-15 sm:h-15 overflow-hidden rounded-[100%] shrink-0">
                                <img src={feedback.profile_img} alt={feedback.alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="">
                                <p className="font-poppins font-bold text-blue-dark text-sm sm:text-base">{feedback.nama}</p>
                                <p className="font-inter font-light text-blue-dark text-[11px] sm:text-[13px]">{feedback.bio}</p>
                            </div>
                        </div>
                        <div className="center text-sm sm:text-base">{feedback.deskripsi}</div>
                    </div>
                    <div className="bottom">
                        <div className="flex gap-2 sm:gap-2.5 items-center">
                            <div className="text">
                                <p className="text-xl sm:text-2xl text-orange-light">{feedback.ratingfeed}</p>
                            </div>
                            <p className="font-inter font-semibold mt-1.5 text-sm sm:text-base">
                                {
                                    feedback.ratingfeed === Ratinglist_feedback[1] ? "1.0/5.0" :
                                        feedback.ratingfeed === Ratinglist_feedback[2] ? "2.0/5.0" :
                                            feedback.ratingfeed === Ratinglist_feedback[3] ? "3.0/5.0" :
                                                feedback.ratingfeed === Ratinglist_feedback[4] ? "4.0/5.0" :
                                                    feedback.ratingfeed === Ratinglist_feedback[5] ? "5.0/5.0" : ""
                                }
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Feedback_User