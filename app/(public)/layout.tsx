export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen max-w text-white bg-black items-center justify-center m-auto">
      {children}
    </main>
  );
}
