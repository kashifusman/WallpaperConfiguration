import React from "react";
import Header from "./AddRecords/Header";
import ConfigurationList from "./ConfigurationList";

const ConfigurationPageList: React.FC = () => {
  const configurations = [
    {
      title: "Title Config 1",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6da05e652e1ca8c42cb9f7068a21e979f4fe471390b0e111937147a224c930d0?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
    },
    {
      title: "Title Config 2",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6da05e652e1ca8c42cb9f7068a21e979f4fe471390b0e111937147a224c930d0?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
    },
    {
      title: "Title Config 3",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6da05e652e1ca8c42cb9f7068a21e979f4fe471390b0e111937147a224c930d0?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
    },
    {
      title: "Title Config 4",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6da05e652e1ca8c42cb9f7068a21e979f4fe471390b0e111937147a224c930d0?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
    },
  ];

  return (
    <div className="md:container md:mx-auto">
      <Header />
      <ConfigurationList configurations={configurations} />
    </div>
  );
};

export default ConfigurationPageList;
