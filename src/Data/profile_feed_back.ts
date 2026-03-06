export const Ratinglist_feedback: string[] = [' ', '★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★']

export type feedbacks = {
    id: number;
    profile_img: string;
    nama: string;
    bio: string;
    deskripsi: string;
    ratingfeed: string;

    alt: string;
};

export const feedbackImageList: feedbacks[] = [
    {
        id: 0,
        profile_img: '/Images/profileUser/profileone.jpg',
        nama: 'Budi.JPG',
        bio: 'Manusia biasa makan nasi',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
        ratingfeed: Ratinglist_feedback[4],
        alt: 'UserProfile'
    },
    {
        id: 1,
        profile_img: '/Images/profileUser/profiletwo.jpg',
        nama: 'Joeekoui',
        bio: 'Coc Aku 10th',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
        ratingfeed: Ratinglist_feedback[4],
        alt: 'UserProfile'
    },
    {
        id: 2,
        profile_img: '/Images/profileUser/profilethree.jpg',
        nama: 'Cihuyy.mp4',
        bio: 'Mahasiswa aja',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
        ratingfeed: Ratinglist_feedback[5],
        alt: 'UserProfile'
    }
]