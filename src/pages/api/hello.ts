// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Link from "next/link";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    status: { code: 200 },
    rows: [
      {
        name: "Suzume",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167784448479603_290x426.jpg",
      },
      {
        name: "John Wick: Chapter 4 (IMAX 2D)",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167818280460676_290x426.jpg",
      },
      {
        name: "Dungeons & Dragons: Honor Among Thieves",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167764540494637_290x426.jpg",
      },
      {
        name: "Ride On",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/16790447508009_290x426.jpg",
      },
      {
        name: "John Wick: Chapter 4",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167706370552494_290x426.jpg",
      },
      {
        name: "Shazam! Fury of the Gods",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167756795914615_290x426.jpg",
      },
      {
        name: "Jin Qorin",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167755551155249_290x426.jpg",
      },
      {
        name: "Hantu Baru",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167755542452152_290x426.jpg",
      },
      {
        name: "Losmen Melati",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167775537273660_290x426.jpg",
      },
      {
        name: "Ant-Man and the Wasp: Quantumia",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167749631728706_290x426.jpg",
      },
      {
        name: "Iblis dalam darah",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167542305281973_290x426.jpg",
      },
      {
        name: "Waktu Magrib",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167418344362787_290x426.jpg",
      },
      {
        name: "Mindcage",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/166875731353254_290x426.jpg",
      },
      {
        name: "Missing",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167524040551544_290x426.jpg",
      },
    ],
    total_rows: 10,
    total_page: 2,
  });
}
