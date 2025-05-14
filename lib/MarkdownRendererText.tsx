import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

const MarkdownRendererText: React.FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p({ node, ...props }) {
          return <p className="my-2" {...props} />;
        },
        h1({ node, ...props }) {
          return <h1 className="text-h1" {...props} />;
        },
        h2({ node, ...props }) {
          return <h2 className="text-h2" {...props} />;
        },
        h3({ node, ...props }) {
          return <h3 className="text-h3" {...props} />;
        },
        a({ node, ...props }) {
          return <a className="text-link " target="_blank" {...props} />;
        },
        li({ node, ...props }) {
          return <li className="text-list" {...props} />;
        },
        blockquote({ node, ...props }) {
          return <blockquote className="text-quote" {...props} />;
        },
        hr() {
          return <hr className="" />;
        },
        table({ node, ...props }) {
          return (
            <table className="table-auto border-collapse border " {...props} />
          );
        },
        th({ node, ...props }) {
          return <th className="border  px-4 py-2 " {...props} />;
        },
        td({ node, ...props }) {
          return <td className="border  px-4 py-2" {...props} />;
        },
        del({ node, ...props }) {
          return <del className="line-through" {...props} />;
        },
        input({ node, ...props }) {
          return <input type="checkbox" className="mr-2" disabled {...props} />;
        },
        strong({ node, ...props }) {
          return <span className="font-semibold text-danger" {...props} />;
        },
        em({ node, ...props }) {
          return <span className="text-italic" {...props} />;
        },
        code({ node, className, children, ...props }) {
          const isInline =
            node?.position?.start?.line === node?.position?.end?.line;
          return isInline ? (
            <span
              className="text-code block"
              {...props}
            >
              {children}
            </span>
          ) : (
            <pre className="block">
              <code className="text-code" {...props}>
                {children}
              </code>
            </pre>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRendererText;
