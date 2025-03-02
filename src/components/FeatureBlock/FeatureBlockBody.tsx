export default function FeatureBlockBody({ children }): JSX.Element {
  return (
    <figcaption className="p-4 py-8">
      {children}
      {/* <iframe
        className="w-full"
        data-why
        onLoad={(e) => e.target.style.height = e.target.contentWindow.document.body.scrollHeight + 'px'}
      >
        {children}
      </iframe> */}
    </figcaption>
  );
}