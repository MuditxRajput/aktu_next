export default function AmpStory() {
  return (
    <amp-story
      standalone=""
      title="Unlock the Secrets Hidden in Your Palm: Discover Your Future!"
      publisher="Palmistry Guru"
      publisher-logo-src="/assets/logo.png"
      poster-portrait-src="/assets/hands.png"
    >
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="/assets/hands.png"
            width="900"
            height="1600"
            layout="responsive"
            alt="Cover image"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1 className="absolute bottom-0 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
            Unlock the Secrets Hidden in Your Palm: Discover Your Future in Just 5 Lines!
          </h1>
          <p className="absolute bottom-60 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
            See how much you earn in future using <span className="font-bold text-yellow-300">Palmistry</span>
          </p>
        </amp-story-grid-layer>
      </amp-story-page>

      <amp-story-page id="cover1">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="/assets/hand1.jpg"
            width="900"
            height="1600"
            layout="responsive"
            alt="Hand image"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1 className="absolute bottom-0 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
            Life Line: Your Health & Vitality
          </h1>
          <p className="absolute bottom-20 p-2 text-white bg-black w-full">
            This line curves around your thumb and reflects your general well-being, physical strength, and major life events.
          </p>
        </amp-story-grid-layer>
      </amp-story-page>

      <amp-story-page id="cover2">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="/assets/images.png"
            width="900"
            height="1600"
            layout="responsive"
            alt="Heart line image"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1 className="absolute bottom-0 w-full p-5 bg-black bg-opacity-60 text-white text-center text-2xl leading-6">
            Heart Line: Your Emotions & Relationships
          </h1>
          <p className="absolute bottom-20 p-2 text-white bg-black w-full">
            Located above the life line, it reveals your emotional state and relationship dynamics. A deep, long line indicates you're passionate and have deep emotional connections.
          </p>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* Add more pages as needed */}
    </amp-story>
  );
}
