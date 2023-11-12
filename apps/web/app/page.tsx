import { Card } from "ui";
import "../styles/globals.css"
import "ui/styles.css"

export default function Page(): JSX.Element {
  return (
    <main className="px-10 py-10 bg-red-500">
      <Card
        title={"App 1"}
        children={undefined}
        href={""}
        className="bg-gray-300"
      />
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </main>
  );
}
