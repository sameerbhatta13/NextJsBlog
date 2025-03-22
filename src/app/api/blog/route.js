import { time } from "console";
import { dbConnect } from "../../../../lib/config/db"
import { writeFile } from 'fs/promises'
import BlogModel from "../../../../lib/model/BlogModel";
import { NextResponse } from "next/server";
const fs = require('fs')



const loadDB = async () => {
    await dbConnect();

}
loadDB()

//API ENDPOINT TO GET ALL BLOGS
export async function GET(request) {
    //if no id
    const blogs = await BlogModel.find({})
    return NextResponse.json({ blogs })
}
//API END POINTS FOR UPLOADING BLOGS
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

export async function DELETE(request, response) {
    const id = await request.nextUrl.searchParams.get('id')
    if (!id) return NextResponse.json({ success: false, msg: "Blog ID is required" });
    const blog = await BlogModel.findById(id)

    await fs.unlink(`./public${blog.image}`, () => { })

    await BlogModel.findByIdAndDelete(id)

    return NextResponse.json({ msg: 'blog is deleted' })
}

