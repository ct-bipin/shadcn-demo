import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-12">
      <h2 className="text-3xl font-bold">Button Component</h2>
      <div className="flex gap-4 items-center">
        <Button>Default</Button>
        {/* <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button> */}
      </div>
    </div>
  );
}
