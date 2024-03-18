const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
    {username : 'meol', password , email : 'meol@gmail.com', phone : "0321654789", address : "70000 ss" , role : "admin"},
    {username : 'wim', password , email : 'wim@gmail.com', phone : "0321654789", address : "70000 ss" , role : "admin"},
    {username : 'mon', password , email : 'mon@gmail.com', phone : "0321654789", address : "70000 ss" , role : "admin"},
    {username : 'min', password , email : 'min@gmail.com', phone : "0321654789", address : "70000 ss" , role : "customer"},
    {username : 'on', password , email : 'min@gmail.com', phone : "0321654789", address : "70000985ss" , role : "customer"},

]


// const todoData = [
    
//     { title : 'Learn HTML' , duedate : new Date(), userId: 1},
//     { title : 'Learn CSS' , duedate : new Date(), userId: 4},
//     { title : 'Learn JS' , duedate : new Date(), userId: 7},
//     { title : 'Learn React' , duedate : new Date(), userId: 12},

// ]

const run = async () => {
    await prisma.user.createMany({
        data : userData,
    })
}

run()