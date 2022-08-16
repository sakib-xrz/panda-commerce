// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।
const headings = document.getElementsByTagName("h2");
for (const heading of headings) {
  let allH2 = heading;
  allH2.style.color = "#5D82C7";
}

// ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।
const backPack = document.getElementById("backpack");
backPack.style.backgroundColor = "#FFC5A3";

// card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

// কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো
const headerBtn = document.getElementById("header-btn");
headerBtn.addEventListener("click", function () {
  console.log("First slider button clicked");
});

// এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।
const buyNowButtons = document.getElementsByClassName("buy-now");
for (const buyNowButton of buyNowButtons) {
  buyNowButton.addEventListener("click", function () {
    // console.log("Buy Now button clicked");
    buyNowButton.style.display = "none";
  });
}

// একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।
const inputEmail = document.getElementById("exampleInputEmail1");
const submitBtn = document.getElementById("submit-btn");
inputEmail.addEventListener("keyup", function () {
  const inputEmailValue = inputEmail.value;
  if (inputEmailValue === "email") {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
const subscribe = document.getElementById("subscribe");
subscribe.addEventListener("dblclick", function doubleClick(){
    subscribe.style.backgroundColor= "#d3d0d0";
})
