import { PageHero } from "../components/Page";
import { Button } from "../ui";

export default function NotFound() {
  return (
    <>
      <PageHero title="Wrong turn." intro="That page does not exist. Head back to the main road." />
      <div className="mx-auto max-w-6xl px-4 pb-16"><Button href="/">Back to home</Button></div>
    </>
  );
}
