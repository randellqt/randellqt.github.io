export default function FeatureBlockFooter({ children }): JSX.Element {
  return (
    <figcaption className="bg-gray-300 p-4">
      <div className="relative">
        {children}
      </div>
    </figcaption>
  );
}