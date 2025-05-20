import { AnonymousNavBar } from "@/components/AnonymousNavBar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-1 flex-col gap-5">
      <AnonymousNavBar />
      {children}
    </div>
  );
}
