import { NextResponse } from "next/server";
import Axios from "axios";

const DataURL = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const { data } = await Axios.get(DataURL);
  return NextResponse.json(data);
}

export async function POST() {
  const postData = {};

  await Axios.post(DataURL, postData);

  return NextResponse.json({ Alert: "Data was sent" }, { status: 200 });
}
