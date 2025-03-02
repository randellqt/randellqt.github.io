import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Button() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <p>Button</p>
        <p><abbr title="HyperText Markup Language" className="text-sm capitalize">HTML</abbr></p>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{
`<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" className="text-sm capitalize">HTML</abbr></p>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
