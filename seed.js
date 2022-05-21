const mongoose=require('mongoose');
const Product = require('./models/product');
const products=[
    {
        name:"Wall Hanging",
        img:"https://i.pinimg.com/564x/02/5e/7b/025e7b15a6901a6a768c48c950dc7e31.jpg",
        price:100000,
        desc:"The iPhone 12 and iPhone 12 mini are Apple's mainstream flagship iPhones for 2020. The phones come in 6.1-inch and 5.4-inch "
    },
    {
        name:"Woolen Jhumar",
        img:"https://cdn.mycrafts.com/i/1/11/55/diy-woolen-jhumar-diy-wind-oDHX-o.jpg",
        price:2000000  ,
        desc:"A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.  "
    },
    {
        name:"Painting Golden Handicraft ",
        img:"https://5.imimg.com/data5/SELLER/Default/2021/2/LY/NX/OY/124187587/handicraft-jpg-500x500.jpg",
        price:20000  ,
        desc:"A watch is a portable timepiece intended to be carried or worn by a person. ... "
    },
    {
        name:"Child's handmade dress ",
        img:"https://i.pinimg.com/originals/c2/92/ec/c292eca9f14a409a211878b3798fec4a.jpg ",
        price:30000  ,
        desc:"A watch is a portable timepiece intended to be carried or worn by a person. ..."
    },
    {
        name:"Rajasthani Swaad Raw Mango Pickle ",
        img:"https://m.media-amazon.com/images/I/51cfk3FcTZL.jpg",
        price: 40000 ,
        desc:"Meticulously Designed Laptops With Intel® Core™ Processor. Shop Today! Alienware Command Center. Cryo - Tech Cooling. The 51Whr Battery. RBG Backlit Keyboard. Amenities: Dell Gaming Backpack, Accidental Damage Service, Performance USB Headset. "
    },
    {
        name:"Red And Black Handmade Jewellery",
        img:"https://5.imimg.com/data5/RE/HJ/DN/ANDROID-73376737/1555067375606-jpg-500x500.jpg ",
        price:30000,
        desc:"A bag is a common tool in the form of a non-rigid container. The use of bags predates recorded history, with the earliest bags being no more than lengths of ... "
    },
    {
        name:"Handmade Jewellery ",
        img:"https://i0.wp.com/artindo.in/wp-content/uploads/2021/08/Jewellery2.jpeg?fit=768%2C768&ssl=1",
        price:30000,
        desc:"An electric kettle is an electrical appliance, that has a self-contained heating unit, for heating water, and automatically switches off when the water reaches boiling point or at a preset temperature below 100 °C. ... In the rest of this paper, we refer to the electric kettle as kettle only. "
    },
    {
        name:"New design doormat",
        img:"https://cdn.mycrafts.com/i/1/11/45/new-design-doormat-o6ab-o.jpg",
        price:30000,
        desc:"Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earspeakers, earphones or, colloquially, cans. ... Headphones exhibit a range of different audio reproduction quality capabilities."
    },
    {
        name:"Homemade Masala ",
        img:"https://i.ytimg.com/vi/xvP2RpZ4Toc/maxresdefault.jpg",
        price:200000,
        desc:"Drones are more formally known as unmanned aerial vehicles (UAVs) or unmanned aircraft systems (UASes). Essentially, a drone is a flying robot that can be remotely controlled or fly autonomously through software-controlled flight plans in their embedded systems, working in conjunction with onboard sensors and GPS."
    },
]

const seedDB= async()=>{
    await Product.insertMany(products);
    console.log("DB seeded");
}

module.exports= seedDB;