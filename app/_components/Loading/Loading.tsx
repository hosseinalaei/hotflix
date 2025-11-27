export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="h-10 w-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
}
