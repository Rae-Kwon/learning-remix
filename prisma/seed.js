const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

async function seed() {
    await Promise.all(
        getPosts().map(post => {
            return db.post.create({ data: post })
        })
    )
}

seed()

function getPosts() {
    return [
        {
            title: 'Example Post 1',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt tempore atque beatae officia quam cupiditate molestias soluta laudantium? Saepe.'
        },
        {
            title: 'Example Post 2',
            body: 'Dolor sit amet consectetur adipisicing elit. Nesciunt incidunt tempore atque beatae officia quam cupiditate molestias soluta laudantium? Saepe.'
        },
        {
            title: 'Example Post 3',
            body: 'Amet consectetur adipisicing elit. Nesciunt incidunt tempore atque beatae officia quam cupiditate molestias soluta laudantium? Saepe.'
        },
        {
            title: 'Example Post 4',
            body: 'Adipisicing elit. Nesciunt incidunt tempore atque beatae officia quam cupiditate molestias soluta laudantium? Saepe.'
        }
    ]
}
