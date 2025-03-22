import { dbConnect } from "../../../../../lib/config/db";
import BlogModel from "../../../../../lib/model/BlogModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    await dbConnect();
    const { id } = await params; // ✅ Get the id from dynamic route

    try {
        const blog = await BlogModel.findById(id);
        if (!blog) {
            return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, blog });
    } catch (error) {
        return NextResponse.json({ success: false, msg: "Invalid ID format" }, { status: 400 });
    }
}
