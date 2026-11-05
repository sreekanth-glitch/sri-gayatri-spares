import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import { requireAdmin } from "@/lib/requireAdmin";

export const runtime = "nodejs";
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ products: products.map(p => ({ ...p, _id: String(p._id) })) });
  } catch (e) {
    return NextResponse.json({ error: "Database connection failed. Check MONGODB_URI." }, { status: 500 });
  }
}
export async function POST(req) {
  if (!requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json();
    const { name, category, price, image } = body;
    if (!name?.trim() || !["bike","cycle"].includes(category) || !Number.isFinite(Number(price)) || Number(price) < 0 || !image?.startsWith("data:image/")) {
      return NextResponse.json({ error: "Please provide valid product details and an image." }, { status: 400 });
    }
    const approxBytes = Math.ceil(image.length * 3 / 4);
    if (approxBytes > 2 * 1024 * 1024) return NextResponse.json({ error: "Image must be 2 MB or smaller." }, { status: 413 });
    await connectDB();
    const product = await Product.create({ name: name.trim(), category, price: Number(price), image });
    return NextResponse.json({ product: { ...product.toObject(), _id: String(product._id) } }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Could not save product. Check database configuration." }, { status: 500 });
  }
}
export async function DELETE(req) {
  if (!requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { id } = await req.json();
    await connectDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Could not delete product." }, { status: 500 });
  }
}
