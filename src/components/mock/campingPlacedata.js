// import place1 from "../assets/img-1.png"
// import place1 from '../assets/place1.webp'
import place1 from '../assets/campsite1.png'
import place2 from '../assets/campsite2.png'
import place3 from '../assets/campsite3.png'
import place4 from '../assets/campingPlace-4.jpeg'
import place5 from '../assets/campingPlace-5.jpeg'
import place6 from '../assets/campingPlace-6.png'
import place7 from '../assets/campingPlace-7.jpeg'
import place8 from '../assets/campingPlace-8.jpeg'
import place9 from '../assets/campingPlace-9.jpeg'

export const campingPlace = {
  maindata: [
    {
      id: 1,
      campingPlace: {
        name: "Campsite A",
        location: "충청남도 천안시",
        city: "천안",
        photo: `${place1}`,
        phone_number: "010-7890-1234",
        working_hour: {
          from: "10:00",
          to: "22:00",
        },
        home_page: "campsiteA.com",
        description:
          "Campsite A in Cheonan, Chungcheongnam-do, offers a perfect blend of nature and convenience. Enjoy camping in a serene environment with easy access to city amenities.",
        map: {
          latitude: "36.815673",
          longitude: "127.113049",
        },
      },
    },
    {
      id: 2,
      campingPlace: {
        name: "Campsite B",
        location: "서울 종로구",
        city: "서울",
        photo: `${place2}`,
        phone_number: "010-2345-6789",
        working_hour: {
          from: "10:00",
          to: "21:00",
        },
        home_page: "campsiteB.com",
        description:
          "Experience the charm of camping at Campsite B, located in the historic district of Jongno-gu, Seoul. Explore the city by day and relax under the stars by night.",
        map: {
          latitude: "37.572036",
          longitude: "126.976768",
        },
      },
    },
    // Add 10 more entries here following the same structure
    {
      id: 3,
      campingPlace: {
        name: "Campsite C",
        location: "부산 해운대구",
        city: "부산",
        photo: `${place3}`,
        phone_number: "010-3456-7890",
        working_hour: {
          from: "09:00",
          to: "22:00",
        },
        home_page: "campsiteC.com",
        description:
          "Discover Campsite C in Haeundae-gu, Busan, where the sea breeze and sandy shores await you. Enjoy water activities and stunning sunsets.",
        map: {
          latitude: "35.162032",
          longitude: "129.160256",
        },
      },
    },
    {
      id: 4,
      campingPlace: {
        name: "Campsite D",
        location: "강원도 강릉시",
        city: "강릉",
        photo: `${place4}`,
        phone_number: "010-4567-8901",
        working_hour: {
          from: "08:00",
          to: "18:00",
        },
        home_page: "campsiteD.com",
        description:
          "Experience the natural beauty of Gangneung at Campsite D. Wake up to the sounds of nature and enjoy hiking trails and scenic viewpoints.",
        map: {
          latitude: "37.768793",
          longitude: "128.856720",
        },
      },
    },
    {
      id: 5,
      campingPlace: {
        name: "Campsite E",
        location: "전라남도 여수시",
        city: "여수",
        photo: `${place5}`,
        phone_number: "010-5678-9012",
        working_hour: {
          from: "07:00",
          to: "19:00",
        },
        home_page: "campsiteE.com",
        description:
          "Escape to Campsite E in Yeosu, where the tranquil waters of the South Sea meet lush landscapes. Enjoy camping by the beach and explore nearby attractions.",
        map: {
          latitude: "34.760393",
          longitude: "127.662201",
        },
      },
    },
    {
      id: 6,
      campingPlace: {
        name: "Campsite F",
        location: "경기도 수원시",
        city: "수원",
        photo: `${place6}`,
        phone_number: "010-6789-0123",
        working_hour: {
          from: "12:00",
          to: "20:00",
        },
        home_page: "campsiteF.com",
        description:
          "Experience nature's tranquility at Campsite F in Suwon, Gyeonggi-do. Surrounded by greenery, it's the perfect spot for a relaxing getaway close to the city.",
        map: {
          latitude: "37.272485",
          longitude: "127.007446",
        },
      },
    },
    {
      id: 7,
      campingPlace: {
        name: "Campsite G",
        location: "충청남도 천안시",
        city: "천안",
        photo: `${place7}`,
        phone_number: "010-7890-1234",
        working_hour: {
          from: "10:00",
          to: "22:00",
        },
        home_page: "campsiteG.com",
        description:
          "Campsite G in Cheonan, Chungcheongnam-do, offers a perfect blend of nature and convenience. Enjoy camping in a serene environment with easy access to city amenities.",
        map: {
          latitude: "36.815673",
          longitude: "127.113049",
        },
      },
    },
    {
      id: 8,
      campingPlace: {
        name: "Campsite H",
        location: "경상북도 포항시",
        city: "포항",
        photo: ` ${place8}`,
        phone_number: "010-8901-2345",
        working_hour: {
          from: "09:00",
          to: "18:00",
        },
        home_page: "campsiteH.com",
        description:
          "Discover the beauty of Pohang at Campsite H. With its pristine beaches and lush forests, it's the perfect destination for outdoor enthusiasts.",
        map: {
          latitude: "36.029001",
          longitude: "129.369342",
        },
      },
    },
    {
      id: 9,
      campingPlace: {
        name: "Campsite I",
        location: "경상남도 진주시",
        city: "진주",
        photo: `${place9}`,
        phone_number: "010-9012-3456",
        working_hour: {
          from: "08:00",
          to: "21:00",
        },
        home_page: "campsiteI.com",
        description:
          "Campsite I in Jinju, Gyeongsangnam-do, offers a serene retreat surrounded by nature's beauty. Relax and unwind in the heart of South Korea's picturesque countryside.",
        map: {
          latitude: "35.192749",
          longitude: "128.086228",
        },
      },
    },
    {
      id: 10,
      campingPlace: {
        name: "Campsite J",
        location: "제주특별자치도 제주시",
        city: "제주",
        photo: ` ${place1}`,
        phone_number: "010-0123-4567",
        working_hour: {
          from: "07:00",
          to: "20:00",
        },
        home_page: "campsiteJ.com",
        description:
          "Escape to the scenic beauty of Jeju at Campsite J. Enjoy camping amidst volcanic landscapes, pristine beaches, and unique cultural attractions.",
        map: {
          latitude: "33.500539",
          longitude: "126.522741",
        },
      },
    },
    {
      id: 11,
      campingPlace: {
        name: "Campsite K",
        location: "인천 중구",
        city: "인천",
        photo: ` ${place1}`,
        phone_number: "010-2345-6789",
        working_hour: {
          from: "10:00",
          to: "21:00",
        },
        home_page: "campsiteK.com",
        description:
          "Immerse yourself in nature at Campsite K in Jung-gu, Incheon. Explore the nearby forests and enjoy stunning views of the coastline.",
        map: {
          latitude: "37.456256",
          longitude: "126.705206",
        },
      },
    },
    {
      id: 12,
      campingPlace: {
        name: "Campsite L",
        location: "대전 서구",
        city: "대전",
        photo: ` ${place1}`,
        phone_number: "010-3456-7890",
        working_hour: {
          from: "09:00",
          to: "22:00",
        },
        home_page: "campsiteL.com",
        description:
          "Campsite L in Seo-gu, Daejeon, offers a tranquil retreat surrounded by nature. Experience relaxation and adventure in the heart of South Korea.",
        map: {
          latitude: "36.352581",
          longitude: "127.379445",
        },
      },
    },
  ],
};
