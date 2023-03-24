// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    status: { code: 200 },
    rows: [
      {
        name: "Suzume",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "hello@example",
        question: "random question",
        status: "on progress",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167784448479603_290x426.jpg",
      },
      {
        name: "John Wick: Chapter 4 (IMAX 2D)",
        content:
          "Magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167818280460676_290x426.jpg",
      },
      {
        name: "Dungeons & Dragons: Honor Among Thieves",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167764540494637_290x426.jpg",
      },
      {
        name: "Ride On",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/16790447508009_290x426.jpg",
      },
      {
        name: "John Wick: Chapter 4",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167706370552494_290x426.jpg",
      },
    ],
    total_rows: 10,
    total_page: 2,
  });
}
