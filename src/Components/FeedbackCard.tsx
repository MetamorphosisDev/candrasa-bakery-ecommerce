import { Ratinglist_feedback } from "../Data/profile_feed_back";
import { feedbackImageList } from "../Data/profile_feed_back";

function Feedback_User() {
    return (
        <div className="grid grid-cols-3 gap-6">
            {feedbackImageList.map((feedback) =>
                <div className="flex flex-col bg-gray-light p-4.5 rounded-2xl">
                    <div className="flex gap-5 items-center">
                        <div className="w-15 h-15 overflow-hidden rounded-[100%]">
                            <img src={feedback.profile_img} alt={feedback.alt} className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                            <p className="font-poppins font-bold text-blue-dark">{feedback.nama}</p>
                            <p className="font-inter font-light text-blue-dark">{feedback.bio}</p>
                        </div>
                    </div>
                    <div className="center">{feedback.deskripsi}</div>
                    <div className="bottom"></div>
                </div>
            )}
        </div>
    )
}

export default Feedback_User