import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
  const { shorturl } = params

  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  const doc = await collection.findOne({ shorturl })
  if (doc && doc.url) {
    let destination = doc.url
    if (!/^https?:\/\//i.test(destination)) {
      destination = "https://" + destination
    }
    redirect(destination)
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST || "/")
  }
}
