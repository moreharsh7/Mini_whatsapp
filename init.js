const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
.then(()=>{
   console.log("connection success");
})
.catch((err)=>{
    console.log(err);
});



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats=[
    {
        from:"neha1",
    to:"priya1",
    message:"send me something",
    created_at:new Date()
    },
      {
        from:"neha2",
    to:"priya2",
    message:"send me something",
    created_at:new Date()
    },
      {
        from:"neha3",
    to:"priya3",
    message:"send me something",
    created_at:new Date()
    },
    

];

Chat.insertMany(allChats);

// chat1.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });