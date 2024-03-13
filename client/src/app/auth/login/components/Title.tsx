type TitleProps = {
  str: string;
};

export function Title({ str }: TitleProps) {
  return <h1>{str}</h1>;
}
