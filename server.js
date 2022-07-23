const express = require("express");                                         //expressi projeye dahil ettik
const users =[                                                            //json objesi
       {"id":1,"name":"Oğuzhan Delen","place":"Elazığ"},
       {"id":2,"name":"Fatmanur Polat","place":"Elazığ"},
       {"id":3,"name":"Beyaznur Çelik","place":"İstanbul"},
       {"id":4,"name":"Hera Güler","place":"Ankara"},
       {"id":5,"name":"Büşra Güler","place":"Elazığ"},
       {"id":6,"name":"Faruk Kızrak","place":"Malatya"},
       {"id":7,"name":"Burak Bozkurt","place":"Amasya"}
];
const app = express();                                                       //expressin constructurından app oluşturduk
const PORT =3000;                                                            //web serverın hangi portta çalışacağını belirledik
app.use(express.json());                                                        //gönderilen veri body içinde yer alır

app.get("/users",(request,response)=>{              
    //console.log(req.params.id);
    response.json(users[index]);
});

app.get("/users/:id",(request,response)=>{   
     const id = parseInt(request.params.id);           
    console.log(id);

    var index = users.findIndex((user) => {
        user.id === id,
        console.log(user)
    });

    response.json(index);

});
// app.post("/users", (req,res) =>{   
//     const user =req.body;
//     users.push(user);
//     //yeni veri oluşturmak  için kullanılır
//     res.json({
//         success:true,
//         data: users
//     })
// })
// app.put("/users/:id", (req,res) => {
//     const id = parseInt(req.params.id);
//     for(let i=0; i<users.length;i++){
//         if(users[i].id ===id){
//             users[i]={
//                 ...users[i],
//                 ...req.body
//             }; } }
//     console.log(req.params.id)
//     res.json({
//         success:true,
//         data:users })
// })
    app.listen(PORT, ()=>{                                                        //uygulamanın çalışması çin
        console.log("server started PORT: "+ PORT)
    })

// gönderilen id yi requestten almak
// dizinin elemanını bulmak
// bulduğun elamanı response la dön