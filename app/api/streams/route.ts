import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import z, { number } from "zod"
//@ts-ignore
import youtubeapisearch from "youtube-search-api"
const YT_REGEX = new RegExp("(?:https?:\\/\\/)?(?:www\\.)?(?:youtube\\.com\\/watch\\?v=|youtu\\.be\\/)([a-zA-Z0-9_-]{11})");
//here we will be adding a stream 
const createStreamSchema = z.object({
  creatorId:z.string(),
    url:z.string().url().refine((url)=>url.includes("youtube.com"),
    {
      message:"the url doesnot contain a youtube link"
    }
    )
})

//first we have to CREATE schema for stream creation validation using zod 

export async function POST(req:NextRequest){
  try{
  const data = createStreamSchema.parse( await req.json())
  //here we check if the url follows the pattern of the yt link 
  const isYT = data.url.match(YT_REGEX)
  if(!isYT){
    return NextResponse.json({
      message:"wrong url format"
    },

  {
    status:411
  }
    )
  }
  const extractedId = data.url.split("?v=")[1]
  const res = await youtubeapisearch.GetVideoDetails(extractedId) 
  const thumbnail = res.thumbnail.thumbnails
  thumbnail.sort((a:{width:number},b:{width:number})=>a.width<b.width ? -1:1)//this sort the thumnail based on their sidth size

  
 
  
const stream =   await prismaClient.stream.create({
    data:{

     userId:data.creatorId,
     type:"Youtube",
     url :data.url,
     extractedId,
     title:res.title??"cannot find video",
     smallImg:thumbnail.length>1?thumbnail[thumbnail.length-2].url:thumbnail[thumbnail.length-1].url
     ??"cat image here",
     bigImage:thumbnail[thumbnail.length-1].url??""


    }
  })
  return NextResponse.json({
    message:"stream created successfully",
    streamId:stream.id
  })
  }
  catch(e){
    console.log(e)
    return NextResponse.json({
      message:"error while creating a stream"
    },
    {
      status:411
    }
    )
  }


}