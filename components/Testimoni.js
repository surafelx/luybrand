import React from "react";


const Testimoni = ({
  listTestimoni = [
    {
      name: "Usman",
      image: "/assets/people-3.png",
      city: "Addis Ababa",
      country: "Ethiopia",
      rating: "5",
      hasVideo: true,
      videoSource: 'assets/videos/usman.mp4',
      testimoni:
        "",
    },
    {
      name: "Birhan",
      image: "/assets/people-3.png",
      city: "Addis Ababa",
      country: " Ethiopia",
      rating: "5",
      hasVideo: true,
      videoSource: 'assets/videos/birhan.mp4',
      testimoni:
        "",
    },
    {
      name: "Hana",
      image: "/assets/people-3.png",
      city: "Addis Ababa",
      country: " Ethiopia",
      rating: "5",
      hasScreenshot: true,
      screenshotSource: 'assets/screenshots/rahel.jpeg',
      testimoni:
        "",
    },
    {
      name: "Alex",
      image: "/assets/people-3.png",
      city: "Addis Ababa",
      country: " Ethiopia",
      rating: "5",
      hasScreenshot: true,
      screenshotSource: 'assets/screenshots/alex.jpeg',
      testimoni:
        "",
    },
    {
      name: "Yasub",
      image: "/assets/people-3.png",
      city: "Harrar",
      country: " Ethiopia",
      rating: "5",
      hasScreenshot: true,
      screenshotSource: 'assets/screenshots/yasub.jpeg',
      testimoni:
        "",
    },
    {
      name: "Sami",
      image: "/assets/people-3.png",
      city: "Shashemene",
      country: " Ethiopia",
      rating: "5",
      hasScreenshot: true,
      screenshotSource: 'assets/screenshots/sami.jpeg',
      testimoni:
        "",
    },
    {
      name: "Abraham",
      image: "/assets/people-3.png",
      city: "Addis Ababa",
      country: " Ethiopia",
      rating: "5",
      hasScreenshot: true,
      screenshotSource: 'assets/screenshots/abraham.jpeg',
      testimoni:
        "",
    },
  ],
}) => {

  return (
    <>
      <div className="block mx-auto md:flex  items-stretch justify-items-stretch flex-grow flex-wrap">
        {listTestimoni.map((listTestimonis, index) => (
          <div className="p-2 items-stretch md:w-1/3 w-full" key={index}>
            <div className="border-2 md:min-h-[700px] border-gray-500 hover:border-white transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-white capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-white capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>

              </div>
              <p className="mt-5 text-left">{listTestimonis.testimoni}</p>
              {listTestimonis.hasVideo ? (
                <div>
                  <video controls>
                    <source src={listTestimonis.videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>


                </div>
              ) : listTestimonis.hasScreenshot ? (
                <div>
                  <img

                    src={listTestimonis.screenshotSource}
                    alt="Screenshot"
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Testimoni;
