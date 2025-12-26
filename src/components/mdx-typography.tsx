import Image, { ImageProps } from "next/image";
import { Callout } from "./ui/callout";
import { Separator } from "./ui/separator";
import { CodeBlock } from "./code-block";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function h1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-semibold text-3xl leading-9 tracking-tight lg:text-4xl lg:leading-[2.75rem] lg:tracking-tight mt-10 lg:mt-11 mb-2 lg:mb-2.5 first:mt-0">
      {children}
    </h1>
  );
}

export function h2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-semibold text-xl lg:text-2xl leading-7 lg:leading-8 tracking-tight lg:tracking-tight mt-10 lg:mt-11 mb-2 lg:mb-2.5 first:mt-0">
      {children}
    </h2>
  );
}

export function h3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-semibold text-lg leading-6 tracking-tight lg:text-lg lg:leading-7 mt-10 lg:mt-11 mb-2 lg:mb-2.5 first:mt-0">
      {children}
    </h3>
  );
}

export function h4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-semibold text-base leading-6 tracking-tight lg:text-base lg:leading-7 mt-10 lg:mt-11 mb-2 lg:mb-2.5 first:mt-0">
      {children}
    </h4>
  );
}

export function h5({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="font-semibold text-sm leading-5 tracking-tight mt-10 lg:mt-11 mb-2 lg:mb-2.5 first:mt-0">
      {children}
    </h5>
  );
}

export function h6({ children }: { children: React.ReactNode }) {
  return (
    <h6 className="font-medium text-sm leading-5 tracking-tight mt-10 lg:mt-11 mb-2 lg:mb-2.5 first:mt-0">
      {children}
    </h6>
  );
}

export function p({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 lg:mt-5 mb-2 lg:mb-2.5 tracking-normal">{children}</p>
  );
}

export function ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-6 lg:mt-5 mb-2 lg:mb-2.5 list-disc list-outside pl-8">
      {children}
    </ul>
  );
}

export function ol({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mt-6 lg:mt-5 mb-2 lg:mb-2.5 list-decimal list-outside pl-8">
      {children}
    </ol>
  );
}

export function li({ children }: { children: React.ReactNode }) {
  return <li className="mb-1 pl-1">{children}</li>;
}

export function blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function hr() {
  return <Separator />;
}

export function a({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="text-blue-500 dark:text-blue-400 underline underline-offset-4 decoration-blue-500/35 transition-colors duration-150 hover:text-cyan-500 dark:hover:text-cyan-500 hover:decoration-cyan-500/70 active:text-cyan-500 focus-visible:rounded focus-visible:outline focus-visible:outline-cyan-500 focus-visible:outline-offset-2"
      {...props}
    >
      {children}
    </a>
  );
}

export function strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold">{children}</strong>;
}

export function em({ children }: { children: React.ReactNode }) {
  return <em className="italic">{children}</em>;
}

export function pre({
  children,
  raw,
  title,
}: {
  children: React.ReactNode;
  raw: string;
  title: string | undefined;
}) {
  return (
    <CodeBlock rawCode={raw ?? ""} title={title}>
      {children}
    </CodeBlock>
  );
}

export function Figure(props: ImageProps) {
  const { width, height, alt } = props;

  if (width === undefined && height === undefined) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={props.src as string} alt={alt ?? ""} className="rounded-sm" />
    );
  }
  return (
    <Image
      {...props}
      alt={alt ?? ""}
      width={width}
      height={0}
      className="rounded-sm"
    />
  );
}

export function img(props: ImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt ?? ""}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto", // Maintains aspect ratio
      }}
      className="rounded-sm"
    />
  );
}

export function table({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border">
      <Table>{children}</Table>
    </div>
  );
}

export function thead({ children }: { children: React.ReactNode }) {
  return <TableHeader>{children}</TableHeader>;
}

export function tbody({ children }: { children: React.ReactNode }) {
  return <TableBody>{children}</TableBody>;
}

export function tr({ children }: { children: React.ReactNode }) {
  return <TableRow>{children}</TableRow>;
}

export function th({ children }: { children: React.ReactNode }) {
  return <TableHead>{children}</TableHead>;
}

export function td({ children }: { children: React.ReactNode }) {
  return <TableCell>{children}</TableCell>;
}

export function caption({ children }: { children: React.ReactNode }) {
  return <TableCaption>{children}</TableCaption>;
}

export function tfoot({ children }: { children: React.ReactNode }) {
  return <TableFooter>{children}</TableFooter>;
}

export const customMDXComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li,
  ol,
  a,
  pre,
  blockquote,
  hr,
  strong,
  em,
  Callout,
  Figure,
  img,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  caption,
  tfoot,
};
