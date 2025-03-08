import { time } from "console";
import { dbConnect } from "../../../../lib/config/db"
import { writeFile } from 'fs/promises'
import BlogModel from "../../../../lib/model/BlogModel";

const { NextResponse } = require("next/server")


const loadDB = async () => {
    await dbConnect();

}
loadDB()


export async function GET(request) {
    return NextResponse.json({ msg: 'api working' })
}

export async function POST(request) {
    const formData = await request.formData()
    const timestamp = Date.now()

    const image = formData.get('image')
    const imagebyteData = await image.arrayBuffer()
    const buffer = Buffer.from(imagebyteData)
    const path = `./public/${timestamp}_${image.name}`
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author_name: `${formData.get('author_name')}`,
        image: `${imgUrl}`
    }
    await BlogModel.create(blogData)
    console.log("blog generated")
    return NextResponse.json({ success: true, msg: 'blog details added' })



}
