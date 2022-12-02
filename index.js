let express = require ("express")
let path = require("path")
let app = express()

app.get("/", (req,res)=>{
res.sendFile(path.join(__dirname, "index.html")
)
})

app.get("/courses", (req,res)=>{
    res.sendFile(path.join(__dirname, "footer.html")
    )
    })

    app.get("/contact", (req,res)=>{
        res.sendFile(path.join(__dirname, "crerat acc.html")
        )
        })

        app.get("/game", (req,res)=>{
            res.sendFile(path.join(__dirname, "crerat.html")
            )
            })

            app.get("/aboutus", (req,res)=>{
                res.sendFile(path.join(__dirname, "structure.html")
                )
                })

                app.get("/products", (req,res)=>{
                    res.sendFile(path.join(__dirname, "website WP.html")
                    )
                    })
                    app.get("/product", (req,res)=>{
                        res.sendFile(path.join(__dirname, "homepage.html")
                        )
                        })
       
   
app.listen("300", ()=>{
 
console.log('connected to the server')
// console.log(lnl)
// let file = path.join(lnl, "finaly.html")
// console.log(file)
})