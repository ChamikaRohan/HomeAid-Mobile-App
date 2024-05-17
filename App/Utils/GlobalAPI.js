const getSlider = () => { 
  const value = {
    "sliders": [
      {
        "id": "clw69mgik04rq07piw53vk3l7",
        "name": "Slider 1",
        "image": {
          "url": "https://ap-south-1.graphassets.com/clw64u3om0c670dpmgj3zdqrk/clw8wqupp02o808ph1pae8yi4"
        }
      },
      {
        "id": "clw8vcqpm014a07pkybbis957",
        "name": "Slider 2",
        "image": {
          "url": "https://ap-south-1.graphassets.com/clw64u3om0c670dpmgj3zdqrk/clw8ws74502j407pk9k0xx8nm"
        }
      }
    ]
    }
  return value
}

const getCategories = () => { 
  const value = {
    "categories": [
      {
        "id": "clw8x58q0031508phgnvafw68",
        "name": "Cleaning",
        "icon": {
          "url": "https://ap-south-1.graphassets.com/clw64u3om0c670dpmgj3zdqrk/clw8x52c502sw07pk8t35ykfx"
        }
      },
      {
        "id": "clw8x63bk032j08phg9w1cji7",
        "name": "Repairing",
        "icon": {
          "url": "https://ap-south-1.graphassets.com/clw64u3om0c670dpmgj3zdqrk/clw8x5xgn02u707pkbdn8qfzu"
        }
      },
      {
        "id": "clw8x6w2102wb07pkpqtexgc5",
        "name": "Painting",
        "icon": {
          "url": "https://ap-south-1.graphassets.com/clw64u3om0c670dpmgj3zdqrk/clw8x6k1m033d08phjov5pysr"
        }
      },
      {
        "id": "clw8x7k7v02xi07pki5vfe1ai",
        "name": "Shifting",
        "icon": {
          "url": "https://ap-south-1.graphassets.com/clw64u3om0c670dpmgj3zdqrk/clw8x7elv02x207pkd5kcoxv1"
        }
      }
    ]
    }
  return value
}

const getBusinessList = () => { 
  const value = {
    "businessLists": [
      {
        "id": "clwatkdek02wx07o6rkamcevt",
        "name": "Kavindu Perera",
        "email": "kavindu99@gmail.com",
        "contactPerson": "Janitorial Services",
        "category": {
          "name": "Cleaning"
        },
        "address": "Hanthana, Kandy",
        "about": "Kavindu Perera offers meticulous washroom and bathroom cleaning services in the serene vicinity of Hanthana, Kandy. With a commitment to excellence and attention to detail, Kavindu ensures that every nook and cranny is spotless, leaving your space fresh and hygienic. Whether it's residential or commercial, Kavindu's services are tailored to meet your needs, providing a sparkling clean environment for your comfort and satisfaction. Trust Kavindu Perera for a pristine washroom experience that exceeds expectations.",
        "images": {
          "url": "https://ap-south-1.graphassets.com/clw64u3om0c670dpmgj3zdqrk/clwathv7j02v007plsu70d4x0"
        }
      },
      {
        "id": "clwatmtle02z107plgiw827iz",
        "name": "Nimesha De Silva",
        "email": "n.de.silva@gmail.com",
        "contactPerson": "House painting",
        "category": {
          "name": "Painting"
        },
        "address": "Hapugala, Galle",
        "about": "Nimesha De Silva brings her expertise in house painting to the tranquil neighborhood of Hapugala in Galle. With a keen eye for detail and a passion for transforming spaces, Nimesha ensures that every stroke of paint adds vibrancy and life to your home. Whether it's a fresh coat to revitalize your interiors or a bold color choice to make a statement, Nimesha's meticulous workmanship and dedication to customer satisfaction guarantee a stunning finish that enhances the beauty of your home in Hapugala, Galle. Trust Nimesha De Silva for professional house painting services that exceed expectations.",
        "images": {
          "url": "https://ap-south-1.graphassets.com/clw64u3om0c670dpmgj3zdqrk/clwatm5nf02ym07pl5atbz3be"
        }
      },
      {
        "id": "clwatovd9031c07o6f37xq3wo",
        "name": "Nimal Alponsu",
        "email": "alponsu.nimal@gmail.com",
        "contactPerson": "Delivery Service",
        "category": {
          "name": "Shifting"
        },
        "address": "Kadawatha, Colombo",
        "about": "Mimal Alponsu offers reliable delivery services for any item in the bustling city of Kadawatha, Colombo. With a focus on efficiency and timeliness, Mimal ensures that your packages, parcels, and goods reach their destination safely and on schedule. Whether it's a small package or a bulky item, Mimal's commitment to customer satisfaction guarantees a seamless delivery experience. Trust Mimal Alponsu for swift and dependable delivery services that cater to your needs in Kadawatha, Colombo.",
        "images": {
          "url": "https://ap-south-1.graphassets.com/clw64u3om0c670dpmgj3zdqrk/clwatnocy02zq07o6ll3ktyr3"
        }
      }
    ]
    }
  return value
}

export default { getSlider, getCategories, getBusinessList };
