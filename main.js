const array = alert("Boshlanishida Arrayning uzunligi: 4")
const danet = confirm("sizinng arrayingizdan ma'lumotlarni olib tashlamoqchimiz")


const arra = ["olma", "Banan", "gilos", "Shaftoli"]


console.log(arra);

if (danet) {
    alert("Arrayning uzunligi: 5");
    arra.push("Orange"); 
    console.log("Yangi array:", arra);
} else {
    alert("Arrayning uzunligi: 4");
    console.log("Array o'zgarmadi:", arra); 
}