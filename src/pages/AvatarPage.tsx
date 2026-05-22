import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-12">
      <h2 className="text-3xl font-bold">Avatar Component</h2>
      <div className="flex gap-8 items-center">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-16 h-16">
          <AvatarImage src="invalid-url.png" alt="Fallback" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
