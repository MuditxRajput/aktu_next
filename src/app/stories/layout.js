export const metadata = {
  title: 'AMP Stories',
  description: 'Immerse yourself in engaging stories with AMP.',
};

export default function StoryLayout({ children }) {
  return (
    <>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script
        async
        custom-element="amp-story"
        src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
      ></script>
      <script
        async
        custom-element="amp-video"
        src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
      ></script>
      <script
        async
        custom-element="amp-story-auto-ads"
        src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js"
      ></script>
      <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
      <noscript>
        <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
      </noscript>
      {children}
    </>
  );
}