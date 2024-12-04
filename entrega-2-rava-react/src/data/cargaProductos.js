// const products = [
//     {
//      id: "A1B2C3D4E5F6",
//      name: "Bahía Escondida",
//      description: "Un paraíso tropical con aguas cristalinas y arena blanca.",
//      category: "playa",
//      price: 150,
//      image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2023/11/maldivas-playas-1.jpg",
//      city: "Male",
//    },
//    {
//      id: "G7H8I9J0K1L2",
//      name: "Playa Dorada",
//      description: "Disfruta de deportes acuáticos y el mejor atardecer.",
//      category: "playa",
//      price: 200,
//      image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/4b/5d/c8/caption.jpg",
//      city: "Phuket",
//    },
//    {
//      id: "M3N4O5P6Q7R8",
//      name: "Isla de Coral",
//      description: "Snorkeling inolvidable en un arrecife de coral vibrante.",
//      category: "playa",
//      price: 180,
//      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiV2snOoLHwhz6vFnvekkcou1JrAhAcLoezA&s",
//      city: "Brisbane",
//    },
//    {
//      id: "S9T0U1V2W3X4",
//      name: "Costa Esmeralda",
//      description: "Relájate bajo las palmeras con una vista espectacular.",
//      category: "playa",
//      price: 220,
//      image: "https://i0.wp.com/tiempodexplorar.com/wp-content/uploads/2020/03/IMG_2891.jpg?resize=1100%2C733&ssl=1",
//      city: "Maui",
//    },
//    {
//      id: "Y5Z6A7B8C9D0",
//      name: "Montaña Escarpada",
//      description: "Rutas de senderismo desafiantes y vistas panorámicas.",
//      category: "aventura",
//      price: 250,
//      image: "https://inspiredroutes.com/wp-content/uploads/2023/08/banff-in-summer.jpg",
//      city: "Banff",
//    },
//    {
//      id: "E1F2G3H4I5J6",
//      name: "Selva Mística",
//      description: "Explora una jungla exuberante llena de vida silvestre.",
//      category: "aventura",
//      price: 300,
//      image: "https://mediaim.expedia.com/destination/1/1ebb2a2f564cd91ad3bab6dd9276ee86.jpg",
//      city: "Manaus",
//    },
//    {
//      id: "K7L8M9N0O1P2",
//      name: "Cañón Profundo",
//      description: "Desciende por un cañón con cascadas impresionantes.",
//      category: "aventura",
//      price: 270,
//      image: "https://cdn1.eldia.com/102019/1570343608005.jpg?&cw=630",
//      city: "Tusayan",
//    },
//    {
//      id: "Q3R4S5T6U7V8",
//      name: "Volcán Dormido",
//      description: "Caminata épica a un volcán inactivo con vistas únicas.",
//      category: "aventura",
//      price: 290,
//      image: "https://media.istockphoto.com/id/1168699014/es/foto/joven-viajero-asi%C3%A1tico-con-mochila-en-la-monta%C3%B1a-fuji-senderismo-volc%C3%A1n-fujisan-en-el-lago.jpg?s=612x612&w=0&k=20&c=pVJoy6XzXlBeZIJg_hns7O_17MYBCOQtIdHESgUyIS4=",
//      city: "Tokyo",
//    },
//    {
//      id: "W9X0Y1Z2A3B4",
//      name: "Ruinas Antiguas",
//      description: "Descubre los secretos de civilizaciones perdidas.",
//      category: "cultura",
//      price: 100,
//      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QrJEYEqcvsjT0kraIexxa14MbYmNOxr7GA&s",
//      city: "MachuPicchu",
//    },
//    {
//      id: "C5D6E7F8G9H0",
//      name: "Ciudad Colonial",
//      description: "Arquitectura clásica y un encanto histórico único.",
//      category: "cultura",
//      price: 120,
//      image: "https://media.traveler.es/photos/61376b27b57001fc862c8190/master/w_1600%2Cc_limit/148019.jpg",
//      city: "Praga",
//    },
//    {
//      id: "I1J2K3L4M5N6",
//      name: "Museo del Tiempo",
//      description: "Viaja al pasado con artefactos y exposiciones fascinantes.",
//      category: "cultura",
//      price: 90,
//      image: "https://www.vamos-viajando.com/images/wikis/1675594433wikiitems.jpg",
//      city: "Cairo",
//    },
//    {
//      id: "O7P8Q9R0S1T2",
//      name: "Templo Ancestral",
//      description: "Experimenta la espiritualidad en un templo milenario.",
//      category: "cultura",
//      price: 110,
//      image: "https://withlocals-com-res.cloudinary.com/image/upload/w_360,h_202,c_fill,g_auto,q_auto,dpr_3.0,f_auto/657ebebb96d93ca77a5b697364ef7348",
//      city: "Angkor",
//    },
//  ]
// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";


// // TODO: Add SDKs for Firebase products that you want to use

// // https://firebase.google.com/docs/web/setup#available-libraries


// // Your web app's Firebase configuration

// const firebaseConfig = {

//   apiKey: "AIzaSyDlmysNox5VWi4DEkMPXf8l7h6gzxuvIfA",

//   authDomain: "ensayoreact-249f6.firebaseapp.com",

//   projectId: "ensayoreact-249f6",

//   storageBucket: "ensayoreact-249f6.firebasestorage.app",

//   messagingSenderId: "16066801087",

//   appId: "1:16066801087:web:7170e5a306c6105495050a"

// };


// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// // const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const cargarItems = async () => {
//     const itemsCollection = collection(db, "items");
  
//     try {
//       for (const item of products) {
//         const docRef = await addDoc(itemsCollection, item);
//         console.log(`Documento agregado con ID: ${docRef.id}`);
//       }
//       console.log("Todos los objetos se cargaron correctamente.");
//     } catch (error) {
//       console.error("Error al cargar los objetos:", error);
//     }
//   };
  
//   cargarItems();
